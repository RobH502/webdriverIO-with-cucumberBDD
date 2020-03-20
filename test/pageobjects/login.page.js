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

    //Validation error messages
    get invalidEmailError()   {return $('//span[text()="Wrong email"]'); }
    get failedLoginError()    {return $('//div[@class="message-error validation-summary-errors" and contains(text(), "Login was unsuccessful")]'); }
    get wrongCredsError()      {return $('//div[@class="message-error validation-summary-errors"]//child::ul//child::li[text()="The credentials provided are incorrect"]'); }
    get noAccountError()     {return $('//div[@class="message-error validation-summary-errors"]//child::ul//child::li[text()="No customer account found"]'); }
    get blankEmailError()     {return $('//span[text()="Please enter your email"]'); }
    

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
    }

    //Click the "Login" button
    clickLoginButton() {
        this.loginButton.click();
    }

    //Generic basic login function for testing the requires being logged in
    loginBasic() {
        this.open();
        this.login('robert.hayes+4@auticon.us', 'PotterMalfoy22');
        this.clickLoginButton();
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

    //Enter an invalid or previously existing email address
    enterBadEmail(email) {
        this.emailInput.setValue(email);
    }

    //Click the password field (used for testing invalid email validation error message)
    clickPasswordField() {
        this.passwordInput.click();
    }


    //*******************************************************************************************
    //Field validation

    //Check if the correct validation error message is displayed for an invalid email
    invalidEmailMessage() {
        this.invalidEmailError.waitForDisplayed(3000);
        return this.invalidEmailError.isDisplayed().should.be.true;
    }

    //Check if the correct validation error message is displayed for a failed login
    failedLoginMessage(errorType) {
        this.failedLoginError.waitForDisplayed(3000);
        if (errorType === 'noAccount') {
            return this.failedLoginError.isDisplayed() && this.noAccountError.isDisplayed();
        } else {
            return this.failedLoginError.isDisplayed() && this.wrongCredsError.isDisplayed();
        }
    }

    blankFieldsMessages(email, password) {
        if (email === '') {
            return this.blankEmailError.isDisplayed().should.be.true;
        } else if (password === '') {
            return (this.failedLoginMessage('noAccount') || this.failedLoginMessage('wrongCreds')).should.be.true;
        }
    }
}

export default new LoginPage()