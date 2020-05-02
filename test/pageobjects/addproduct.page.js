import Page from './page';
import utl from '../../utilities/common-utilities'
const path = require('path');

class AddProduct extends Page {
    
    /*
     * define elements
     */

    get adminBarLink()        { return $('//a[@class="administration"]'); }
    get catalogMenu()         { return $('//span[contains(text(),"Catalog")]'); }
    get productsLink()        { return $('//li[@class="treeview menu-open"]//ul[@class="treeview-menu"]//li//span[@class="menu-item-title"][contains(text(),"Products")]'); }
    get addNewButton()        { return $('//a[@class="btn bg-blue" and @href="/Admin/Product/Create"]'); }

    get productName()         { return $('//input[@name="Name"]'); }
    get shortDescription()    { return $('//textarea[@name="ShortDescription"]'); }
    get fullDescription()     { return $('//div[@class="mce-edit-area mce-container mce-panel mce-stack-layout-item"]//iframe'); }
    get sku()                 { return $('//input[@name="Sku"]'); }
    get categoriesDiv()       { return $('//div[@class="form-group"]//input[@class="k-input k-readonly"]'); }
    get categories()          { return $('//select[@name="SelectedCategoryIds"]'); }

    get price()               { return $('//input[@name="Price"]'); }
    get taxCategory()         { return $('//select[@name="TaxCategoryId"]'); }

    get shippingHeader()      { return $('//body[@class="skin-blue sidebar-mini basic-settings-mode"]/div[@class="wrapper"]/div[@class="content-wrapper"]/div/form/div[@class="content"]/div[@class="form-horizontal"]/nop-panels/nop-panel[3]/div[1]/div[1]'); }
    get weight()              { return $('//input[@name="Weight"]'); }
    get length()              { return $('//input[@name="Length"]'); }
    get width()               { return $('//input[@name="Width"]'); }
    get height()              { return $('//input[@name="Height"]'); }

    get inventoryHeader()     { return $('//body[@class="skin-blue sidebar-mini basic-settings-mode"]/div[@class="wrapper"]/div[@class="content-wrapper"]/div/form/div[@class="content"]/div[@class="form-horizontal"]/nop-panels/nop-panel[4]/div[1]/div[1]'); }
    get inventoryMethod()     { return $('//select[@name="ManageInventoryMethodId"]'); }

    get picturesHeader()      { return $('//body[@class="skin-blue sidebar-mini basic-settings-mode"]/div[@class="wrapper"]/div[@class="content-wrapper"]/div/form/div[@class="content"]/div[@class="form-horizontal"]/nop-panels/nop-panel[5]/div[1]/div[1]'); }
    get uploadPictureFile()   { return $('//div[@class="upload-image-button pull-left margin-t-5"]//div//input[@name="qqfile"]'); }
    get addProductPicBtn()    { return $('//button[contains(text(),"Add product picture")]'); }
    get removePictureBtn()    { return $('//span[contains(text(),"Remove picture")]'); }

    get attributesHeader()    { return $('//div[@class="panel-heading opened"]//span[contains(text(),"Product attributes")]'); }

    get saveContinueEdit()    { return $('//button[@name="save-continue"]'); }
    //get saveBtn()             { return $('//button[@name="save"]'); }
    get saveBtn()             { return $('//div[@id="ajaxBusy"]'); }
    get publicStoreLink()     { return $('//a[contains(text(),"Public store")]'); }
    //get publicStoreLink()     { return $('//div[@id="ajaxBusy" and @style="display: block"]'); }

    get successMessage()      { return $('//div[@class="alert alert-success alert-dismissable"]'); }

    get nextResultsPage()     { return $('//li[@class="paginate_button next"]//a//i'); }
    get searchItem()          { return $('//td[contains(text(),"Test Product RH")]'); }
    get removeCheckbox()      { return $('//td[contains(text(),"Test Product RH")]//parent::tr//child::td[@class=" text-center"]//child::input[@type="checkbox"]'); }
    //get removeCheckbox()      { return $('//td[contains(text(),"Test Product RH")]//sibling::td[@class="text-center"]//child::input[@type="checkbox"]'); }
    get deleteButton()        { return $('//button[@class="btn bg-red"]'); }
    get deleteYesButton()     { return $('//button[@id="delete-selected-action-confirmation-submit-button"]'); }

    /*
    * define or overwrite page methods
    */

    //Click the admin link at the top of the page to access the Admin content
    clickAdminLink() {
        this.adminBarLink.click();
    }
    
    //Open the Catalog menu in the sidebar
    clickCatalogMenu() {
        this.catalogMenu.click();
    }

    //Click the "Products" link in the sidebar Catalog menu
    clickProductsLink() {
        this.productsLink.click();
    }

    //Click the "Add New" button
    clickAddNewButton() {
        this.addNewButton.waitForDisplayed(3000);
        this.addNewButton.click();
    }

    //Click the "Save and Continue Edit" button
    clickSaveContinueButton() {
        this.saveContinueEdit.click();
    }

    clickSaveButton() {
        this.saveBtn.waitForDisplayed(3000);
        this.saveBtn.click();
    }

    verifyAdminPageLoaded() {
        return browser.getUrl().should.equal('https://auticontraining.azurewebsites.net/Admin');
    }

    verifyAddNewCMSLoaded() {
        return browser.getUrl().should.equal('https://auticontraining.azurewebsites.net/Admin/Product/Create');
    }

    verifySuccessMessage() {
        this.successMessage.waitForDisplayed(3000);
        return this.successMessage.isDisplayed().should.be.true;
    }


    //**************************************************************************************
    //Product Info section
    enterProductName() {
        this.productName.setValue('Test Product RH');
    }

    enterShortDescription() {
        this.shortDescription.setValue('This is just a test description.');
    }

    enterFullDescription() {
        browser.switchToFrame('FullDescription_ifr');
        $('//body[contains(@class,"mce-content-body")]').setValue('This is the full description for my test product.');
        browser.switchToParentFrame();
    }

    enterSku() {
        this.sku.setValue('012346');
    }

    selectCategories() {
        this.categoriesDiv.click();
        //this.categoriesDiv.setValue('Video Games >> Xbox One >> Xbox One Game');
        $('//ul[@id="SelectedCategoryIds_listbox"]//li[text()="Video Games >> Xbox One >> Xbox One Games"]').waitForDisplayed(3000);
        $('//ul[@id="SelectedCategoryIds_listbox"]//li[text()="Video Games >> Xbox One >> Xbox One Games"]').moveTo();
        $('//ul[@id="SelectedCategoryIds_listbox"]//li[text()="Video Games >> Xbox One >> Xbox One Games"]').click();
        browser.pause(5000);
    }


    //**************************************************************************************
    //Prices section

    enterPrice() {
        this.price.setValue(9.99);
    }


    selectTaxCategory() {
        this.taxCategory.selectByVisibleText('Downloadable Products');
    }



    //**************************************************************************************
    //Shipping section

    openShippingSection() {
        this.shippingHeader.click();
    }

    enterShippingInfo() {
        this.weight.setValue(4.00);
        this.length.setValue(5.00);
        this.width.setValue(5.00);
        this.height.setValue(5.00);
    }


    //**************************************************************************************
    //Inventory section

    openInventorySection() {
        this.inventoryHeader.click();
    }

    selectInventoryMethod() {
        this.inventoryMethod.selectByVisibleText('Track inventory');
    }


    //**************************************************************************************
    //Pictures section

    uploadPicture() {
        const filePath = path.join(__dirname, '../images/Auticon_logo.jpg');
        
        const remoteFilePath = browser.uploadFile(filePath);
        this.uploadPictureFile.setValue(remoteFilePath);
        this.removePictureBtn.waitForDisplayed(10000);
        this.addProductPicBtn.click();
    }


    //**************************************************************************************
    //Product Attributes section



    //**************************************************************************************

    //Load the page where the product will be displayed on the public store
    loadResultsPage() {
        this.open('xbox-one-games');
    }

    //Verify new product displayed on site
    verifyNewProductDisplayed() {
        $('//h2[@class="product-title"]//a[contains(text(),"Test Product RH")]').waitForDisplayed(3000);
        return $('//h2[@class="product-title"]//a[contains(text(),"Test Product RH")]').isDisplayed().should.be.true;
    }


    //**************************************************************************************
    //Removing a product

    //Locate search result
    locateResult() {
        let found = false;
        let count = 1;
        while (!found && count <= 3) {
            if (this.searchItem.isDisplayed()) {
                console.log('FOUND ITEM');
                return true;
            } else {
                console.log('NOT FOUND YET');
                //this.nextResultsPage.isClickable() ? this.nextResultsPage.click() : found = true;
                if (count < 3) {
                    this.nextResultsPage.click();
                    console.log('GOING TO NEXT PAGE');
                } else {
                    found = true;
                    console.log('REACHED END');
                }
                count++;
            }
        }
        return false;
    }

    clickRemoveCheckbox() {
        browser.pause(10000);
        this.removeCheckbox.click();
        browser.pause(5000);
    }

    clickDeleteButton() {
        this.deleteButton.click();
        this.deleteYesButton.waitForDisplayed(3000);
        this.deleteYesButton.click();
    }

    //Verify that the removed product is no longer present
    verifyRemoved() {
        super.open('Admin/Product/List');
        //return !this.locateResult();
        let found = false;
        let count = 1;
        while (!found && count <= 3) {
            if (this.searchItem.isDisplayed()) {
                console.log('FOUND ITEM');
                return false;
            } else {
                console.log('NOT FOUND YET');
                //this.nextResultsPage.isClickable() ? this.nextResultsPage.click() : found = true;
                if (count < 3) {
                    this.nextResultsPage.click();
                    console.log('GOING TO NEXT PAGE');
                } else {
                    found = true;
                    console.log('REACHED END');
                }
                count++;
            }
        }
        return true;
    }

    
}

export default new AddProduct();