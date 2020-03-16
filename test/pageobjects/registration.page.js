import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {

    get maleRadio()           { return $('//input[@id="gender-male"]'); }
    get femaleRadio()         { return $('//input[@id="gender-female"]'); }
    get firstName()           { return $('//input[@id="FirstName"]'); }
    get lastName()            { return $('//input[@id="LastName"]'); }
    get bdDay()               { return $('//select[@name="DateOfBirthDay"]'); }
    get bdMonth()             { return $('//select[@name="DateOfBirthMonth"]'); }
    get bdYear()              { return $('//select[@name="DateOfBirthYear"]'); }
    get email()               { return $('//input[@id="Email"]'); }
    get password()            { return $('//input[@id="Password"]'); }
    get confirmPassword()     { return $('//input[@id="ConfirmPassword"]'); }
    get registerButton()      { return $('//input[@id="register-button"]'); }
    get registerComplete()    { return $('//div[@class="result" and text()="Your registration completed"]'); }


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
}

export default new RegisterPage()