import { expect } from 'chai';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookstorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get bookstoreMenuButton () { return 'div:nth-child(6) #item-2' }
    get inputSearchBar () { return '#searchBox' }
    get bookFirstItem () { return 'div.rt-tbody > div:nth-child(1) > div > div:nth-child(3)' }
    get booksItems () { return 'div.rt-tbody > div' }
    get rowsDropdown () { return 'select' }

    checkElementsExist () {
        let isSearchBarInputExisting = $(this.inputSearchBar).isExisting();
        let isBookFirstItemExisting = $(this.bookFirstItem).isExisting();

        expect(isSearchBarInputExisting, 'Search bar input field does not exist.').to.be.true;
        expect(isBookFirstItemExisting, 'Books are not displaying on item list.').to.be.true;
    }

    checkAmountOfBooks (expectedAmount) {
        let amount = $$(this.booksItems);

        expect(amount, `Expected the amount of books to be ${expectedAmount} but ${amount} where found.`).lengthOf(expectedAmount);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('books');
    }
}

export default new BookstorePage();
