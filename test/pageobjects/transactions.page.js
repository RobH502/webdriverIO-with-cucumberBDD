import Page from './page';
import utl from '../../utilities/common-utilities';
import videoGamesPage from './videogames.page';
import myAccount from './myaccount.page';

class Transactions extends Page {

    //************************************************************************
    //define elements

    //Shopping cart link
    get cartLink() { return $('//a[contains(@href, "/cart")]'); }

    //Add to cart
    get addToCartAnimalCrossing()    { return $('//*[@data-productid="14"]//child::*[@class="details"]//child::*[@class="add-info"]//child::*[@class="buttons"]//input[@value="Add to cart"]'); }
    get addToCartCallOfDuty()        { return $('//*[@data-productid="4"]//child::*[@class="details"]//child::*[@class="add-info"]//child::*[@class="buttons"]//input[@value="Add to cart"]'); }
    get addToCartMarioKart()         { return $('//*[@data-productid="15"]//child::*[@class="details"]//child::*[@class="add-info"]//child::*[@class="buttons"]//input[@value="Add to cart"]'); }
    get addToCartAvengers()          { return $('//*[@data-productid="3"]//child::*[@class="details"]//child::*[@class="add-info"]//child::*[@class="buttons"]//input[@value="Add to cart"]'); }
    get addToCartXboxWindowsContr()  { return $('//*[@data-productid="10"]//child::*[@class="details"]//child::*[@class="add-info"]//child::*[@class="buttons"]//input[@value="Add to cart"]'); }
    get popupMessageAdded()               { return $('//p[@class="content" and contains(text(),"The product has been added to your")]'); }
    get popupMessageOut()            { return $('//p[@class="content" and text()="Out of stock"]'); }

    //Shopping cart
    get countryDropdown() { return $('//select[@id="CountryId"]'); }
    get stateProvinceDropdown() { return $('//select[@id="StateProvinceId"]'); }
    get zipPostalCode() { return $('//input[@id="ZipPostalCode"]'); }
    get termsOfServiceCheckbox() { return $('//input[@id="termsofservice"]'); }
    get checkoutButton() { return $('//button[@id="checkout"]'); }

    //Checkout flow
    get checkoutCountry() { return $('//select[@id="BillingNewAddress_CountryId"]'); }
    get checkoutState()   { return $('//select[@id="BillingNewAddress_StateProvinceId"]'); }
    get checkoutCity()    { return $('//input[@id="BillingNewAddress_City"]'); }
    get checkoutAddress1()  { return $('//input[@id="BillingNewAddress_Address1"]'); }
    get checkoutZipPostalCode()  { return $('//input[@id="BillingNewAddress_ZipPostalCode"]'); }
    get checkoutPhoneNumber()    { return $('//input[@id="BillingNewAddress_PhoneNumber"]'); }
    get waitMsg()                { return $('//span[@id="states-loading-progress"]'); }
    
    //Remainder of checkout flow
    get continueButton1() { return $('//input[@type="button" and @value="Continue" and @onclick="Billing.save()"]'); }
    get continueButton2() { return $('//input[@type="button" and @value="Continue" and @onclick="ShippingMethod.save()"]'); }
    get continueButton3() { return $('//input[@type="button" and @value="Continue" and @onclick="PaymentMethod.save()"]'); }
    get continueButton4() { return $('//input[@type="button" and @value="Continue" and @onclick="PaymentInfo.save()"]'); }
    get continueButton5() { return $('//input[@type="button" and @value="Continue"]'); }
    get confirmButton() { return $('//input[@value="Confirm"]'); }
    get orderNumber() { return $('//*[@class="title" and contains(text(),"Order Number")]'); }
    get orderStatus() { return $('//span[@class="order-status pending" and text()="Pending"]'); }
    //get orderStatus() { return $('//ul[@class="info"]//child::li//child::span[@class="order-status pending" and text()="Pending"]'); }


    //************************************************************************

    open() {
        super.open('video-games');
    }

    toCart() {
        this.cartLink.click();
    }

    addCartConfirmation() {
        this.popupMessageAdded.waitForDisplayed(2000);
        return this.popupMessageAdded.isDisplayed().should.be.true;
    }

    soldOut() {
        this.popupMessageOut.waitForDisplayed(5000);
        return this.popupMessageOut.isDisplayed().should.be.true;
    }

    addToCart(item) {
        switch(item) {
            case 'Animal Crossing':
                this.addToCartAnimalCrossing.click();
                break;
            case 'Call of Duty':
                this.addToCartCallOfDuty.click();
                break;
            case 'Mario Kart':
                this.addToCartMarioKart.click();
                break;
            case 'Avengers':
                this.addToCartAvengers.click();
                break;
            case 'Xbox Windows Controller':
                this.addToCartXboxWindowsContr.click();
                break;
        }
    }

    checkout() {
        this.termsOfServiceCheckbox.click();
        if(this.checkout)
        this.checkoutButton.click();
        browser.pause(1000);
        if (this.checkoutCountry.isDisplayed()) {
            this.checkoutCountry.selectByVisibleText('United States');
            browser.pause(1000);
            this.checkoutState.selectByVisibleText('California');
            this.checkoutCity.setValue('Metropolis');
            this.checkoutAddress1.setValue('Test Address');
            this.checkoutPhoneNumber.setValue('1111111111');
            this.checkoutZipPostalCode.setValue('11111');
        }
        this.continueButton1.click();
        browser.pause(8000);
        this.continueButton2.click();
        browser.pause(1000);
        this.continueButton3.click();
        browser.pause(1000);
        this.continueButton4.click();
        browser.pause(3000);
        this.confirmButton.click();
        browser.pause(2000);
        this.continueButton5.click();
    }

    ordersTab() {
        myAccount.loadMyAccountPage();
        myAccount.ordersLink.click();
    }

    transactionVerification() {
        return this.orderNumber.isDisplayed() && this.orderStatus.isDisplayed();
    }


}

export default new Transactions();