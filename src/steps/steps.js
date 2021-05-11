import { Given, When, Then, Before } from 'cucumber';

import LoginPage from '../page_objects/login.page';
import ProfilePage from '../page_objects/profile.page';
import BookstorePage from '../page_objects/bookstore.page';

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    bookstore: BookstorePage
};

const buttons = {
    'login menu': LoginPage.loginMenuButton,
    'new user': LoginPage.newUserButton,
    'bookstore menu': BookstorePage.bookstoreMenuButton,
    'profile menu': ProfilePage.profileMenuButton,
    'login': ProfilePage.loginButton
};

const fields = {
    'search bar': BookstorePage.inputSearchBar
};

const labels = {
    'books item list': BookstorePage.bookFirstItem
}

const dropdowns = {
    rows: BookstorePage.rowsDropdown
}

// Steps for general purpose
Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I click on the button ([^"]*)?$/, (button) => {
        $(buttons[button]).waitForExist({ timeout: 10000 })
        $(buttons[button]).click();
    }
);

When(/^I set ([^"]*)? to the ([^"]*)? input field$/, (value, selector) => {
        $(fields[selector]).setValue(value);
    }
);

When(/^I select ([^"]*)? from the ([^"]*)? dropdown$/, (value, selector) => {
        $(dropdowns[selector]).selectByVisibleText(value);
    }
);

Then(/^I expect elements for ([^"]*)? page exist$/, (page) => {
    pages[page].checkElementsExist();
});

Then(/^I expect that the url is ([^"]*)?$/, (expectedUrl) => {
    let currentUrl = browser.getUrl();

    expect(currentUrl, `Expected url to be "${browser.options.baseUrl + expectedUrl}"`
    + ` but found ${currentUrl}`).equal(browser.options.baseUrl + expectedUrl);
});
 
Then(/^I should see the displayed text ([^"]*)? on ([^"]*)?$/, (expectedText, selector) => {
    $(labels[selector]).waitForExist({ timeout: 10000 })
    let text = $(labels[selector]).getText();

    expect(text, `Expected text ${text} to equal ${expectedText}`).equal(expectedText);
})

// Login Page
Given(/^I am logged in my profile page$/, () => {
    LoginPage.open();
    LoginPage.login('Test12345', 'Abc123***');
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password);
});

// Profile Page
Then(/^I should see the displayed username ([^"]*)?$/, (username) =>
    ProfilePage.checkLoggedUser(username)
);

Then(/^I expect to see my books on the books list$/, () => {
    expect($(ProfilePage.booksListMenu, 'Books are not displaying on profile.').isExisting()).to.be.true;
})

// Bookstore page
Then(/^I should see ([^"]*)? book items displayed$/, (amount) => {
    BookstorePage.checkAmountOfBooks(amount);
})