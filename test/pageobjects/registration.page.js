import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {

    /*
     * define elements
     */

    get maleRadio()              { return $('//input[@id="gender-male"]'); }
    get femaleRadio()            { return $('//input[@id="gender-female"]'); }
    get firstName()              { return $('//input[@id="FirstName"]'); }
    get lastName()               { return $('//input[@id="LastName"]'); }
    get bdDay()                  { return $('//select[@name="DateOfBirthDay"]'); }
    get bdMonth()                { return $('//select[@name="DateOfBirthMonth"]'); }
    get bdYear()                 { return $('//select[@name="DateOfBirthYear"]'); }
    get email()                  { return $('//input[@id="Email"]'); }
    get password()               { return $('//input[@id="Password"]'); }
    get confirmPassword()        { return $('//input[@id="ConfirmPassword"]'); }
    get registerButton()         { return $('//input[@id="register-button"]'); }
    get registerComplete()       { return $('//div[@class="result" and text()="Your registration completed"]'); }

    //Validation messages
    get firstNameError()         { return $('//span[@id="FirstName-error" and text()="First name is required."]'); }
    get lastNameError()          { return $('//span[@id="LastName-error" and text()="Last name is required."]'); }
    get emailError()             { return $('//span[@id="Email-error" and text()="Email is required."]'); }
    get passwordError()          { return $('//span[@id="Password-error" and text()="Password is required."]'); }
    get confirmPasswordError()   { return $('//span[@id="ConfirmPassword-error" and text()="Password is required."]'); }


    //***********************************************************************************
    /*
     * define or overwrite page methods
     */


    open () {
        super.open('register');
    }

    //Clicks the male or female radio button, depending on the string argument ("male" or "femail") passed in through the "gender" parameter
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
    registerEmailPassword(password) {
        this.email.setValue(utl.generateEmail());
        this.password.setValue(password);
        this.confirmPassword.setValue(password);
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

}

export default new RegisterPage()