import Page from './page';
import utl from '../../utilities/common-utilities';

class Footer extends Page {
    
    //define elements

    //Information links
    get sitemapLink() { return $('//a[contains(@href, "/sitemap") and text()="Sitemap"]'); }
    get shippingReturnsLink() { return $('//a[contains(@href, "/shipping-returns") and text()="Shipping & returns"]'); }
    get privacyNoticeLink() { return $('//a[contains(@href, "/privacy-notice") and text()="Privacy notice"]'); }
    get conditionsOfUseLink() { return $('//a[contains(@href, "/conditions-of-use") and text()="Conditions of Use"]'); }
    get aboutUsLink() { return $('//a[contains(@href, "/about-us") and text()="About us"]'); }
    get contactUsLink() { return $('//a[contains(@href, "/contactus") and text()="Contact us"]'); }

    //Customer service links
    get searchLink() { return $('//a[contains(@href, "/search") and text()="Search"]'); }
    get newsLink()  { return $('//a[contains(@href, "/news") and text()="News"]'); }
    get blogLink() { return $('//a[contains(@href, "/blog") and text()="Blog"]'); }
    get recentlyViewedProductsLink() { return $('//a[contains(@href, "/recentlyviewedproducts") and text()="Recently viewed products"]'); }
    get compareProductsListLink() { return $('//a[contains(@href, "/compareproducts") and text()="Compare products list"]'); }
    get newProductsLink() { return $('//a[contains(@href, "/newproducts") and text()="New products"]'); }

    //My account links
    get myAccountLink() { return $('//a[contains(@href, "/customer/info") and text()="My account"]'); }
    get ordersLink() { return $('//a[contains(@href, "/order/history") and text()="Orders"]'); }
    get addressesLink() { return $('//a[contains(@href, "/customer/addresses") and text()="Addresses"]'); }
    get shoppingCartLink() { return $('//a[contains(@href, "/cart") and text()="Shopping cart"]'); }
    get wishlistLink() { return $('//a[contains(@href, "/wishlist") and text()="Wishlist"]'); }
    get applyForVendorAccountLink() { return $('//a[contains(@href, "/vendor/apply") and text()="Apply for vendor account"]'); }

    //Follow us links
    get facebookLink() { return $('//a[contains(@href, "//www.facebook.com/nopCommerce") and text()="Facebook"]'); }
    get twitterLink() { return $('//a[contains(@href, "//twitter.com/nopCommerce") and text()="Twitter"]'); }

    //nopCommerce link
    get nopCommerceLink() { return $('//a[contains(@href, "//www.nopcommerce.com") and text()="nopCommerce"]'); }

    //Footer disclaimer
    get footerDisclaimer() { return $('//*[@class="footer-disclaimer"]'); }


    //**********************************************************************************************
    //define or overwrite page methods

    //Load homepage
    loadHomepage() {
        super.open('');
    }

    //Verify that the footer copyright disclaimer is displayed
    disclaimerDisplayed() {
        this.footerDisclaimer.isDisplayed().should.be.true;
    }

    //Click nopCommerce link
    clickNopCommerceLink() {
        this.nopCommerceLink.click();
    }


    //**********************************************************************************************
    //Function for switching tabs
    switchTabs() {
        browser.getAllWindowHandles().then(function(windowHandles) {
            browser.switchTo().window(windowHandles[1]);
        });
        // browser.getWindowHandle().then(function(mainWindowHandle) {
        //     browser.getAllWindowHandles().then(function(windowHandles) {
        //         windowHandles.forEach(function(handle) {
        //             if (handle !== mainWindowHandle) {
        //                 browser.switchTo().window(handle);
        //             }
        //         });
        //     });
        // });
    }


    //**********************************************************************************************
    //Functions for clicking footer links

    //Click Information links
    clickInformationLink(link) {
        switch(link) {
            case 'Sitemap':
                this.sitemapLink.click();
                break;
            case 'Shipping & returns':
                this.shippingReturnsLink.click();
                break;
            case 'Privacy notice':
                this.privacyNoticeLink.click();
                break;
            case 'Conditions of Use':
                this.conditionsOfUseLink.click();
                break;
            case 'About us':
                this.aboutUsLink.click();
                break;
            case 'Contact us':
                this.contactUsLink.click();
                break;
        }
    }

    //Click Customer service links
    clickCustomerServiceLink(link) {
        switch(link) {
            case 'Search':
                this.searchLink.click();
                break;
            case 'News':
                this.newsLink.click();
                break;
            case 'Blog':
                this.blogLink.click();
                break;
            case 'Recently viewed products':
                this.recentlyViewedProductsLink.click();
                break;
            case 'Compare products list':
                this.compareProductsListLink.click();
                break;
            case 'New products':
                this.newProductsLink.click();
                break;
        }
    }

    //Click My account links
    clickMyAccountLink(link) {
        switch(link) {
            case 'My account':
                this.myAccountLink.click();
                break;
            case 'Orders':
                this.ordersLink.click();
                break;
            case 'Addresses':
                this.addressesLink.click();
                break;
            case 'Shopping cart':
                this.shoppingCartLink.click();
                break;
            case 'Wishlist':
                this.wishlistLink.click();
                break;
            case 'Apply for vendor account':
                this.applyForVendorAccountLink.click();
                break;
        }
    }
    
    clickFollowUsLink(link) {
        switch(link) {
            case 'Facebook':
                this.facebookLink.click();
                break;
            case 'Twitter':
                this.twitterLink.click();
                break;
        }
    }


    //**********************************************************************************************
    //Functions for verifying that the correct page was loaded upon clicking the corresponding link

    //Information pages
    loadedPage(url) {
        return browser.getUrl().should.equal(url);
    }

    loadedFollowUsPage(url) {
        browser.switchWindow(url);
        browser.pause(4000);
        return browser.getUrl().should.equal(url);
    }


        //**********************************************************************************************
}

export default new Footer();