import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get loggedUsernameText () { return '#userName-value' }
    get loginButton () { return '#notLoggin-label > a:nth-child(1)' }
    get profileMenuButton () { return 'div:nth-child(6) #item-3' }
    get booksListMenu () { return 'div.rt-tbody > div:nth-child(1) > div' }

    checkElementsExist () {
        $(this.loggedUsernameText).waitForExist({ timeout: 10000 })
        let isLoggedUsernameTextExisting = $(this.loggedUsernameText).isExisting();
        
        expect(isLoggedUsernameTextExisting, 'Logged username label does not exist.').to.be.true;
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    checkLoggedUser (expectedUsername) {
        let displayedUser = $(this.loggedUsernameText).getText();

        expect(
            displayedUser,
            `Expected that displayed user "${displayedUser} equals to ${expectedUsername}`
            ).equal(expectedUsername);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('profile');
    }
}

export default new ProfilePage();
