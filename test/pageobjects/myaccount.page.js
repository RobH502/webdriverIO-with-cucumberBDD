import Page from './page';
import utl from '../../utilities/common-utilities';
import loginPage from './login.page';

class MyAccount extends Page {


    //************************************************************************
    //define elements

    //sidebar links
    get customerInfoLink()               { return $('//a[contains(@href, "/customer/info")]'); }
    get addressesLink()                  { return $('//a[contains(@href, "/customer/addresses")]'); }
    get ordersLink()                     { return $('//a[contains(@href, "/order/history")]'); }
    get downloadableProductsLink()       { return $('//a[contains(@href, "/customer/downloadableproducts")]'); }
    get backInStockSubscriptionsLink()   { return $('//a[contains(@href, "/backinstocksubscriptions/manage")]'); }
    get rewardPointsLink()               { return $('//a[contains(@href, "/rewardpoints/history")]'); }
    get changePasswordLink()             { return $('//a[contains(@href, "/customer/changepassword")]'); }
    get myProductReviewsLink()           { return $('//a[contains(@href, "/customer/productreviews")]'); }

    //Options
    get newsletterCheckbox()             { return $('//input[@id="Newsletter"])'); }
    get saveButton()                     { return $('//input[@id="save-info-button"]'); }

    //Header
    get tabSectionHeader()               { return $('//*[@class="page-title"]//child::h1'); }

    //Customer Info
    get maleRadio()                      { return $('//input[@id="gender-male"]'); }
    get femaleRadio()                    { return $('//input[@id="gender-female"]'); }
    get firstName()                      { return $('//input[@id="FirstName"]'); }
    get lastName()                       { return $('//input[@id="LastName"]'); }
    get bdday()                          { return $('//select[@name="DateOfBirthDay:]'); }
    get bdmonth()                        { return $('//select[@name="DateOfBirthMonth"]'); }
    get bdyear()                         { return $('//select[@name="DateOfBirthYear"]'); }
    get email()                          { return $('//input[@id="Email"]'); }
    get companyName()                    { return $('//input[@id="Company"]'); }

    //Addresses
    get addNewButton()                   { return $('//input[@type="button" and @value="Add new"]'); }
    get addressFirstName()               { return $('//input[@id="Address_FirstName"]'); }
    get addressLastName()                { return $('//input[@id="Address_LastName"]'); }
    get addressEmail()                   { return $('//input[@id="Address_Email"]'); }
    get addressCountry()                 { return $('//select[@id="Address_CountryId"]'); }
    get addressWaitMsg()                 { return $('//span[@id="states-loading-progress"]'); }
    get addressStateProvince()           { return $('//select[@id="Address_StateProvinceId"]'); }
    get addressCity()                    { return $('//input[@id="Address_City"]'); }
    get addressAddress1()                { return $('//input[@id="Address_Address1"]'); }
    get addressZipPostalCode()           { return $('//input[@id="Address_ZipPostalCode"]'); }
    get addressPhoneNumber()             { return $('//input[@id="Address_PhoneNumber"]'); }
    get addressSaveButton()              { return $('//input[@value="Save"]'); }
    get addressBlockHeader1()            { return $('//*[@class="address-list"]//child::*[@class="section address-item"][last()]//child::*[@class="title"]'); }
    get addressBlockHeader2()            { return $('//*[@class="address-list"]//child::*[@class="section address-item"][last()]//child::ul[@class="info"]//child::li[@class="name"]'); }
    get addressDeleteButton()            { return $('//*[@class="address-list"]//child::*[@class="section address-item"][last()]//child::*[@class="buttons"]//child::input[@value="Delete"]'); }

    //Orders

    //Downloadable products

    //Back in stock subscription

    //Reward points

    //Change password
    get oldPassword()                    { return $('//input[@id="OldPassword"]'); }
    get newPassword()                    { return $('//input[@id="NewPassword"]'); }
    get confirmNewPassword()             { return $('//input[@id="ConfirmNewPassword"]'); }
    get changePasswordButton()           { return $('//input[@type="submit" and @value="Change password"]'); }
    get passwordChangedMessage()         { return $('//*[@class="result"]'); }

    //My product reviews
    get myProductReviews()               { return $('//*[@class="page-title"]//child::h1'); }

    
    //define or overwrite page methods

    loadMyAccountPage() {
        super.open('customer/info');
    }

    clickTab(tabOp) {
        switch(tabOp) {
            case 'Customer info':
                this.customerInfoLink.waitForDisplayed(1000);
                this.customerInfoLink.click();
                break;
            case 'Addresses':
                this.addressesLink.click();
                break;
            case 'Orders':
                this.ordersLink.click();
                break;
            case 'Downloadable products':
                this.downloadableProductsLink.click();
                break;
            case 'Back in stock subscriptions':
                this.backInStockSubscriptionsLink.click();
                break;
            case 'Reward points':
                this.rewardPointsLink.click();
                break;
            case 'Change password':
                this.changePasswordLink.click();
                break;
            case 'My product reviews':
                this.myProductReviewsLink.click();
                break;
        }
    }


    //Verifies that the correct header is displayed upon clicking the corresponding sidebar tab
    correctHeaderDisplayed(header) {
        this.tabSectionHeader.getText().should.equal(header);
    }


    //****************************************************************************************
    //Change password

    //Verifies that the correct message appears on the page after changing the password
    passwordChangedShown(message) {
        this.passwordChangedMessage.getText().should.equal(message);
    }

    //Enter old and new passwords into respective fields for "Change password"
    passwordFields(oldPw, newPw) {
        this.oldPassword.setValue(oldPw);
        this.newPassword.setValue(newPw);
        this.confirmNewPassword.setValue(newPw);
    }


    //****************************************************************************************
    //Customer info

    //Changes gender to the opposite of that initially selected
    changeGender(currGender) {
        currGender === "male" ? this.maleRadio.click() : this.femaleRadio.click();
    }

    //Changes first or last name field entry (specified by "field" parameter) to new entry ("name" parameter)
    editNameFields(field, name) {
        field === "First name" ? this.firstName.setValue(name) : this.lastName.setValue(name);
    }

    //Verifies that changes to Customer info were retained
    verifyChanges(gender, fName, lName) {
        if (!(gender === "male" ? this.maleRadio.isSelected() : this.femaleRadio.isSelected())) {
            return false
        }
        return this.firstName.getValue().should.equal(fName) && this.lastName.getValue().should.equal(lName);
    }


    //****************************************************************************************
    //Addresses

    //Save new address
    saveAddress() {
        this.addressSaveButton.click();
        browser.pause(3000);
    }

    addressInputFields(field, entry) {
        switch(field) {
            case "First name":
                this.addressFirstName.setValue(entry);
                break;
            case "Last name":
                this.addressLastName.setValue(entry);
                break;
            case "Email":
                this.addressEmail.setValue(entry);
                break;
            case "City":
                this.addressCity.setValue(entry);
                break;
            case "Address 1":
                this.addressAddress1.setValue(entry);
                break;
            case "Zip / postal code":
                this.addressZipPostalCode.setValue(entry);
                break;
            case "Phone number":
                this.addressPhoneNumber.setValue(entry);
                break;
        }
    }

    addressCountryField(country, state) {
        this.addressCountry.selectByVisibleText(country);
        this.addressWaitMsg.waitForDisplayed(3000, true);
        this.addressStateProvince.selectByVisibleText(state);
    }

    addressVerifyPresent(fName, lName) {
        return $(`//*[@class="address-list"]//child::*[@class="section address-item"][last()]//child::ul[@class="info"]//child::li[@class="name" and text()="${fName} ${lName}"]`).should.exist;
    }

    addressVerifyDeleted(fName, lName) {
        return !$(`//*[@class="address-list"]//child::*[@class="section address-item"][last()]//child::ul[@class="info"]//child::li[@class="name" and text()="${fName} ${lName}"]`).should.exist;
    }

    //Delete the last address listed
    addressDelete() {
            this.addressDeleteButton.click();
            browser.acceptAlert();
    }



    //****************************************************************************************

    //Method for clicking the "Change password," "Save," and "Add New" buttons as needed
    clickButton(btn) {
        switch(btn) {
            case "Change password":
                this.changePasswordButton.click();
                break;
            case "Save":
                this.saveButton.click();
                break;
            case "Add New":
                this.addNewButton.click();
                break;
        }
    }

    

}

export default new MyAccount();