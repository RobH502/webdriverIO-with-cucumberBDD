import Page from './page';
import utl from '../../utilities/common-utilities';
import videoGamesPage from './videogames';

class Transactions extends Page {

    //************************************************************************
    //define elements

    //Shopping cart link
    get cartLink() { $('a[@class="cart-label"]'); }

    //Add to cart
    get addToCart() { $('//*[@data-productid="14"]//child::*//[@class="details"]//child:://*[@class="add-info"]//child:://*[@class="buttons"]//input[@value="Add to cart"]'); }

    //Shopping cart
    get countryDropdown() { return $('select[@id="CountryId"]'); }
    get stateProvinceDropdown() { return $('select[@id="StateProvinceId"]'); }
    get zipPostalCode() { reutnr $('input[@id="ZipPostalCode"]'); }
    get termsOfServiceCheckbox() { return $('input[@id="termsofservice"]'); }
    get checkoutButton() { return $('button[@id="checkout"]'); }


    //************************************************************************

    open() {
        super.open('video-games');
    }

    toCart() {
        this.cartLink.click();
    }

    checkout() {
        this.termsOfServiceCheckbox.click();
        this.checkoutButton.click();
    }
}

export default new Transactions();