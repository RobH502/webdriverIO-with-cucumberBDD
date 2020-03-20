import Page from './page'
import utl from '../../utilities/common-utilities'

class Wishlist extends Page {
    /*
    * define elements
    */

    get wishlistLink()           { return $('//a[contains(@href, "/wishlist")]'); }

    get emptyWishlistMessage()   { return $('//div[@class="no-data" and text()="The wishlist is empty!"]'); }

    get wishlistItem()           { return $('//tr//child::td[@class="product"]//child::a[@class="product-name" and contains(@href, "/microsoft-xbox-elite-wireless-controller-series-2")]'); }
    get removeCheckbox()         { return $('//input[@type="checkbox" and @name="removefromcart"]'); }
    get addToCartCheckbox()      { return $('//input[@type="checkbox" and @name="addtocart"]'); }
    get quantityField()          { return $('//td[@class="quantity"]//child::input[@class="qty-input"]'); }
    get productPicture()         { return $('//td[@class="product-picture"]//child::a'); }

    get updateWishlistButton()   { return $('//input[@name="updatecart" and @value="Update wishlist"]'); }
    get addToCartButton()        { return $('//input[@name="addtocartbutton" and @value="Add to cart"]'); }
    get emailAFriendButton()     { return $('//input[@value="Email a friend"]'); }

    get addToWishlistButton()    { return $('//div[@data-productid="8"]//div[@class="add-info"]//div[@class="buttons"]//input[@type="button" and @value="Add to wishlist"]'); }
    get wishlistAddSuccess()     { return $('//div[@id="bar-notification"]//child::div[@class="bar-notification success"]//child::p[@class="content"]//a[contains(@href, "/wishlist")]'); }

    get shareLink()              { return $('//a[@class="share-link"]'); }

    //Send Email to Friend
    get friendEmailField()       { return $('//input[@id="FriendEmail"]'); }
    get yourEmailField()         { return $('//input[@id="YourEmailAddress"]'); }
    get personalMessageField()   { return $('//input[@id="PersonalMessage"]'); }
    get sendEmailButton()        { return $('//input[@name="send-email" and @value="Send email"]'); }
    get enterFriendEmailError()  { return $('//span[@id="FriendEmail-error" and text()="Enter friend\'s email"]'); }
    get wrongFriendEmailError()  { return $('//span[@id="FriendEmail-error" and text()="Wrong email"]'); }
    get enterYourEmailError()    { return $('//span[@id="YourEmailAddress-error" and contains(text(), "Enter your email")]'); }
    get wrongYourEmailError()    { return $('//span[@id="YourEmailAddress-error" and text()="Wrong email"]'); }
    get emailSuccessMessage()    { return $('//div[@class="result" and contains(text(), "Your message has been sent.")]'); }

    /*
    * define or overwrite page methods
    */

    //Open the wishlist page
    open() {
        super.open('wishlist');
        browser.getTitle().should.equal('Your store. Wishlist');
    }

    //Add an item to the wishlist
    addItemToWishlist() {
        this.addToWishlistButton.click();
    }

    successMessageLink() {
        this.wishlistAddSuccess.click();
    }

    //Change quantity of wishlist
    changeQuantity(newVal) {
        this.quantityField.clearValue();
        this.quantityField.setValue(newVal);
    }

    //Remove item from wishlist
    clickCheckbox(checkBox) {
        checkBox === "Remove" ? this.removeCheckbox.click() : this.addToCartCheckbox.click();
    }

    clickUpdateButton() {
        this.updateWishlistButton.click();
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    wishlistItemProductPage() {
        this.wishlistItem.click();
    }


    //******************************************************************************
    //Friend Email page functions

    //click the "Email a Friend" button
    clickEmailFriendButton() {
        this.emailAFriendButton.click();
    }

    //Click the "Send Email" button
    clickSendEmailButton() {
        this.sendEmailButton.click();
    }

    //Enter a friend's email address
    enterFriendEmail(email) {
        this.friendEmailField.setValue(email);
    }

    //Enter your email address
    enterYourEmail(email) {
        this.yourEmailField.clearValue();
        this.yourEmailField.setValue(email);
    }

    clearYourEmail(email) {
        this.yourEmailField.clearValue();
    }

    //Enter a personal message
    enterPersonalMessage(message) {
        this.personalMessageField.setValue(message);
    }

    //******************************************************************************
    //Verification functions

    //Verify that the added item is indeed displayed on the wishlist
    itemAddedVerify() {
        this.wishlistItem.waitForDisplayed(3000);
        return this.wishlistItem.isDisplayed().should.be.true;
    }

    //Verify that the wishlist item is no longer displayed on the list
    //Verify this after the item has been removed or added to the cart
    itemGoneVerify() {
        this.wishlistItem.waitForDisplayed(3000, true);
        return this.wishlistItem.isDisplayed().should.be.false;
    }

    //Verify that an empty wishlist displays the appropriate message instead
    verifyEmptyList() {
        return this.emptyWishlistMessage.isDisplayed().should.be.true;
    }

    //Verify that the correct success message appears after adding an item to the wishlist
    verifySuccessMessage() {
        this.wishlistAddSuccess.waitForDisplayed(3000);
        return this.wishlistAddSuccess.isDisplayed().should.be.true;
    }

    //Verify that the item's quantity value has changed to the value specified by the "newVal" parameter
    verifyQuantityChange(newVal) {
        this.quantityField.waitForDisplayed(3000);
        return Number(this.quantityField.getAttribute('value')).should.equal(newVal);
    }

    //Verify that the correct validation error message appears upon clicking "Send Email" without
    //entering an email address
    verifyEnterEmailMessage(field) {
        if (field === "friend") {
            this.enterFriendEmailError.waitForDisplayed(3000);
            return this.enterFriendEmailError.isDisplayed().should.be.true;
        } else {
            this.enterYourEmailError.waitForDisplayed(3000);
            return this.enterYourEmailError.isDisplayed().should.be.true;
        }
    }

    //Same as above, except for entering an invalid email address
    verifyWrongEmailMessage(field) {
        if (field === "friend") {
            this.wrongFriendEmailError.waitForDisplayed(3000);
            return this.wrongFriendEmailError.isDisplayed().should.be.true;
        } else {
            this.wrongYourEmailError.waitForDisplayed(3000);
            return this.wrongYourEmailError.isDisplayed().should.be.true;
        }
    }

    //Verify that the correct message appears after successfully emailing a friend
    verifyEmailSuccessMessage() {
        this.emailSuccessMessage.waitForDisplayed(3000);
        return this.emailSuccessMessage.isDisplayed().should.be.true;
    }

    //Verify that 
}

export default new Wishlist();