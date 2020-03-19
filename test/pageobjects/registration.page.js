import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {

    /*
     * define elements
     */

    get maleRadio()                { return $('//input[@id="gender-male"]'); }
    get femaleRadio()              { return $('//input[@id="gender-female"]'); }
    get firstName()                { return $('//input[@id="FirstName"]'); }
    get lastName()                 { return $('//input[@id="LastName"]'); }
    get bdDay()                    { return $('//select[@name="DateOfBirthDay"]'); }
    get bdMonth()                  { return $('//select[@name="DateOfBirthMonth"]'); }
    get bdYear()                   { return $('//select[@name="DateOfBirthYear"]'); }
    get email()                    { return $('//input[@id="Email"]'); }
    get password()                 { return $('//input[@id="Password"]'); }
    get confirmPassword()          { return $('//input[@id="ConfirmPassword"]'); }
    get registerButton()           { return $('//input[@id="register-button"]'); }
    get registerComplete()         { return $('//div[@class="result" and text()="Your registration completed"]'); }

    //Validation messages
    get firstNameError()           { return $('//span[@id="FirstName-error" and text()="First name is required."]'); }
    get lastNameError()            { return $('//span[@id="LastName-error" and text()="Last name is required."]'); }
    get emailError()               { return $('//span[@id="Email-error" and text()="Email is required."]'); }
    get passwordError()            { return $('//span[@id="Password-error" and text()="Password is required."]'); }
    get confirmPasswordError()     { return $('//span[@id="ConfirmPassword-error" and text()="Password is required."]'); }
    get nonMatchPasswordError()    { return $('//span[@id="ConfirmPassword-error" and contains(text(), "do not match")]'); }
    get invalidPasswordErrorP1()   { return $('//span[@id="Password-error"]//child::p[text()="must meet the following rules: "]'); }
    get invalidPasswordErrorP2()   { return $('//span[@id="Password-error"]//child::ul//child::li[text()="must have at least 6 characters"]'); }
    get invalidEmailError()        { return $('//span[text()="Wrong email"]'); }
    get existingEmailError()       { return $('//*[@class="message-error validation-summary-errors"]//child::ul//child::li[text()="The specified email already exists"]'); }


    //***********************************************************************************
    /*
     * define or overwrite page methods
     */


    open () {
        super.open('register');
    }

    //Clicks the male or female radio button, depending on the string argument ("male" or "female") passed in through the "gender" parameter
    registerGender (gender) {
        gender === "male" ? this.maleRadio.click() : this.femaleRadio.click();
    }

    //Inputs the "fname" and "lname" arguments into their respective fields
    registerName (fname, lname) {
        this.firstName.setValue(fname);
        this.lastName.setValue(lname);
    }

    //Selects a birthdate via the Day, Month, and Year dropdown menus
    registerDate(day, month, year) {
        this.bdDay.selectByVisibleText(day);
        this.bdMonth.selectByVisibleText(month);
        this.bdYear.selectByVisibleText(year);
    }

    //Fills out the email field (with randomly generated email) and the two password fields
    registerEmail() {
        this.email.setValue(utl.generateEmail());
    }

    //Fills out the "Password" and "Confirm password" with the "password1" and "password2" parameters, respectively
    registerPassword(password1, password2) {
        this.password.setValue(password1);
        this.confirmPassword.setValue(password2);
    }

    //Enter a previously existing email address into the "Email" field
    enterExistingEmail() {
        this.email.setValue('robert.hayes+4@auticon.us');
    }

    //Enter an invalid email address into the "Email" field
    enterInvalidEmail(email) {
        this.email.setValue(email);
    }

    //Click the "Register" button on the page to complete the registration flow
    clickRegisterButton() {
        this.registerButton.click();
    }

    //Verifies that the registration completion message is displayed
    isRegisterComplete() {
        this.registerComplete.waitForDisplayed(10000);
        return this.registerComplete.isDisplayed();
    }


    //***********************************************************************************
    //Field Validation

    //Check to see that all field validation messages are displayed
    allValidationMessages() {
        const vals = [this.firstNameError, this.lastNameError, this.emailError, this.passwordError, this.confirmPasswordError];
        for(let i = 0; i < vals.length; i++) {
            vals[i].waitForDisplayed(3000);
            if (!vals[i].isDisplayed()) {
                return false;
            }
        }

        return true;
    }

    //Check to see that the correct validation message appears upon entering two non-matching passwords
    noMatchMessage() {
        this.nonMatchPasswordError.waitForDisplayed(3000);
        return this.nonMatchPasswordError.isDisplayed().should.be.true;
    }

    //Verify that the correct error message appears for an invalid password
    invalidPasswordMessage() {
        this.invalidPasswordErrorP1.waitForDisplayed(3000);
        return this.invalidPasswordErrorP1.isDisplayed().should.be.true && this.invalidPasswordErrorP2.isDisplayed().should.be.true;
    }

    //Verify that the correct error message appears for a previously existing email address
    existingEmailMessage() {
        this.existingEmailError.waitForDisplayed(3000);
        return this.existingEmailError.isDisplayed().should.be.true;
    }

    //Verify that the correct error message appears for an invalid email address
    invalidEmailMessage() {
        return this.invalidEmailError.isDisplayed().should.be.true;
    }

}

export default new RegisterPage()