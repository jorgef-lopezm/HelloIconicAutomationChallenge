import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return '#userName' }
    get inputPassword () { return '#password' }
    get loginButton () { return '#login' }
    get newUserButton () { return '#newUser' }
    get loginMenuButton () { return 'div:nth-child(6) #item-0' }

    
    checkElementsExist () {
        let isUsernameInputExisting = $(this.inputUsername).isExisting();
        let isPasswordInputExisting = $(this.inputPassword).isExisting();
        let isLoginButtonExisting = $(this.loginButton).isExisting();
        let isNewUserButtonExisting = $(this.newUserButton).isExisting();

        expect(isUsernameInputExisting, 'Username input field does not exist.').to.be.true;
        expect(isPasswordInputExisting, 'Password input field does not exist.').to.be.true;
        expect(isLoginButtonExisting, 'Login button does not exist.').to.be.true;
        expect(isNewUserButtonExisting, 'New user button does not exist.').to.be.true;
    };

    /**
     * Method to register a new user to the application
     * @param {String} username 
     * @param {String} password 
     */
    login (username, password) {
        $(this.inputUsername).setValue(username);
        $(this.inputPassword).setValue(password);
        $(this.loginButton).click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
