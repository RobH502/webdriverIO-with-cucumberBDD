import Page from './page';
import utl from '../../utilities/common-utilities';

class LoginPage extends Page {

    /**
     * define elements
     */

    get emailInput()      { return $('//input[@id="Email"]'); }
    get passwordInput()   { return $('//input[@id="Password"]'); }
    get loginButton()     { return $('//input[@type="submit" and @value="Log in"]'); }
    get logoutLink()      { return $('//a[@class="ico-logout"]'); }
    get loginLink()       { return $('//a[contains(@href, "/login") and contains(text(), "Log in")]'); }
    

    /**
     * define or overwrite page methods
     */

    open () {
        super.open('login');
    }

    //Login on an account
    login (email, password) {
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    //Generic basic login function for testing the requires being logged in
    loginBasic() {
        this.open();
        this.login('robert.hayes+4@auticon.us', 'PotterMalfoy22');
    }

    //Same as above except with parameter for password
    loginWithPassword(password) {
        this.open();
        this.login('robert.hayes+4@auticon.us', password);
    }

    //Logout of an account
    logout () {
        this.logoutLink.click();
    }

    //Check if "Log out" link is displayed on the page
    isLogoutShowing() {
        this.logoutLink.waitForDisplayed(3000);
        return this.logoutLink.isDisplayed();
    }

    //Same as above except no wait
    isLogoutShowingNoWait() {
        return this.logoutLink.isDisplayed();
    }

    //Check if "Log in" link is displayed on the page
    isLoginShowing() {
        this.loginLink.waitForDisplayed(3000);
        return this.loginLink.isDisplayed();
    }
}

export default new LoginPage()