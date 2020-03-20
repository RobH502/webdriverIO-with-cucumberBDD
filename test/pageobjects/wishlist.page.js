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
    changeQuantity() {
        this.quantityField.clearValue();
        this.quantityField.setValue('2');
    }

    //Remove item from wishlist
    clickRemoveCheckbox() {
        this.removeCheckbox.click();
    }

    clickUpdateButton() {
        this.updateWishlistButton.click();
    }

    clickAddToCartCheckbox() {
        this.addToCartCheckbox.click();
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    clickEmailFriendButton() {
        this.emailAFriendButton.click();
    }

    wishlistItemProductPage() {
        this.wishlistItem.click();
    }

    //Verify that the added item is indeed displayed on the wishlist
    itemAddedVerify() {
        this.wishlistItem.waitForDisplayed(3000);
        return this.wishlistItem.isDisplayed().should.be.true;
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
}

export default new Wishlist();