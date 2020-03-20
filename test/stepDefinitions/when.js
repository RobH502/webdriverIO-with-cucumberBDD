import {Given, When, Then} from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/registration.page';
import myAccountPage from '../pageobjects/myaccount.page';
import videoGamesPage from '../pageobjects/videogames.page';
import footerSection from '../pageobjects/footer.page';
import transactions from '../pageobjects/shoppingcart.page';
import wishlist from '../pageobjects/wishlist.page';


//Generic basic login function for testing that requires being logged in
When('I login to the site', function() {
    loginPage.loginBasic();
});

//Generic function to access the homepage
When('I am on the homepage of the site', function() {
    footerSection.loadHomepage();
});


//*****************************************************************************************
//Login
When(/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);  // entering email, password and submitting the page
});

When('I click on the "Login" button', function() {
    loginPage.clickLoginButton();
});

When('I click the Log out button', function() {
    loginPage.logout();
});

When(/^I enter an invalid email "([^"]*)"$/, function(email) {
    loginPage.enterBadEmail(email);
});

When('I move the cursor focus away from the email field', function() {
    loginPage.clickPasswordField();
});

When(/^I leave either or both of the email and password fields blank "([^"]*)" "([^"]*)"$/, function (email, password) {
    loginPage.login(email, password);
});

When(/^I enter an email "([^"]*)" for a non-existing account$/, function(email) {
    loginPage.login(email, 'Test1234');
});

When(/^I anter a valid email "([^"]*)" with the wrong password "([^"]*)"$/, function(email, password) {
    loginPage.login(email, password);
});


//*****************************************************************************************
//Registration
When(/^I input a gender "([^"]*)"$/, function (gender) {
    registerPage.registerGender(gender);
});

When(/^I input a first name and last name "([^"]*)" "([^"]*)"$/, function (fname, lname) {
    registerPage.registerName(fname, lname);
});

When(/^I input a birth date "(\d+)" "([A-Za-z]+)" "(\d+)"$/, function (day, month, year) {
    registerPage.registerDate(day, month, year);
});

When('I input an email address', function () {
    registerPage.registerEmail();
});

When(/^I input a password "([^"]*)"$/, function (password) {
    registerPage.registerPassword(password, password);
});

When(/^I input non-matching passwords "([^"]*)" "([^"]*)" into the password fields$/, function (password1, password2) {
    registerPage.registerPassword(password1, password2);
});

When('I click the Register button', function() {
    registerPage.clickRegisterButton();
});

When(/^I input an invalid password "([^"]*)"$/, function (password) {
    registerPage.registerPassword(password, '');
});

When('I input an existing email address', function() {
    registerPage.enterExistingEmail();
});

When(/^I input an invalid email address "([^"]*)"$/, function (email) {
    registerPage.enterInvalidEmail(email);
});


//*****************************************************************************************
//My account page and tabs
When('I load the My account page', function() {
    myAccountPage.loadMyAccountPage();
});

When(/^I click the "(\D+)" tab$/, function (tabOp) {
    myAccountPage.clickTab(tabOp);
});

When(/^I click the "([^"]*)" button$/, function(btn) {
    myAccountPage.clickButton(btn);
});

When(/^I click the "([^"]*)" radio option$/, function(gender) {
    myAccountPage.changeGender(gender);
});


//**************************************************************************************************
//Change password
When(/^I see the message "(\D+)"$/, function (message) {
    myAccountPage.passwordChangedShown(message);
});

When(/^I fill out the old and new password "([^"]*)" "([^"]*)" fields$/, function (oldPw, newPw) {
    myAccountPage.passwordFields(oldPw, newPw);
});

When(/^I login to the site with new password "([^"]*)"$/, function (password) {
    loginPage.loginWithPassword(password);
});

When(/^I edit the entry in the "([^"]*)" field "([^"]*)"$/, function (field, name) {
    myAccountPage.editNameFields(field, name);
});


//**************************************************************************************************
//New Address
When('I click the address Save button', function() {
    myAccountPage.saveAddress();
});

When(/^I fill out the first name, last name, and email fields "([^"]*)" "([^"]*)" "([^"]*)"$/, function(fName, lName, email) {
    myAccountPage.addressInputFields("First name", fName);
    myAccountPage.addressInputFields("Last name", lName);
    myAccountPage.addressInputFields("Email", email);
    browser.pause(3000);
});

When(/^I select options from the Country and State fields "(\D+)" "(\D+)"$/, function(country, state) {
    myAccountPage.addressCountryField(country, state);
});

When(/^I fill out the City and Address 1 fields "([^"]*)" "([^"]*)"$/, function(city, address) {
    myAccountPage.addressInputFields("City", city);
    myAccountPage.addressInputFields("Address 1", address);
    browser.pause(3000);
});

When(/^I fill out the Zip postal code and Phone number fields "(\d+)" "(\d+)"$/, function(zip, phone) {
    myAccountPage.addressInputFields("Zip / postal code", zip);
    myAccountPage.addressInputFields("Phone number", phone);
    browser.pause(3000);
});


//**************************************************************************************************
//Delete Address
When(/^I add a new address "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "(\d+)" "(\d+)" "(\D+)" "(\D+)"$/, function(fName, lName, email, city, address, zip, phone, country, state) {
    myAccountPage.clickButton("Add New");
    myAccountPage.addressInputFields("First name", fName);
    myAccountPage.addressInputFields("Last name", lName);
    myAccountPage.addressInputFields("Email", email);
    myAccountPage.addressCountryField(country, state);
    myAccountPage.addressInputFields("City", city);
    myAccountPage.addressInputFields("Address 1", address);
    myAccountPage.addressInputFields("Zip / postal code", zip);
    myAccountPage.addressInputFields("Phone number", phone);
    myAccountPage.saveAddress();
})

When('I click the Delete button on an existing address and accept the alert', function() {
    myAccountPage.addressDelete();
});


//*****************************************************************************************
//Video Games
When('I go to the login page', function() {
    loginPage.open();
    browser.getTitle().should.equal('Your store. Login');
});

When('I click the Video Games link', function() {
    videoGamesPage.clickLink();
});

When(/^I hover over the "([^"]*)" option$/, function(menuOpt) {
    videoGamesPage.hoverOver(menuOpt);
});

When(/^I click a menu option "([^"]*)"$/, function(menuOpt) {
    videoGamesPage.clickMenuOption(menuOpt);
});

When(/^I click an Xbox One sub-menu option "([^"]*)"$/, function(menuOpt) {
    videoGamesPage.selectXboxSubmenuOption(menuOpt);
});

When(/^I click a Nintendo Switch sub-menu option "([^"]*)"$/, function(menuOpt) {
    videoGamesPage.selectSwitchSubmenuOption(menuOpt);
});


//**************************************************************************************************
//Footer
When(/^I click the "(\D+)" Information link$/, function (link) {
    footerSection.clickInformationLink(link);
});

When(/^I click the "(\D+)" Customer service link$/, function (link) {
    footerSection.clickCustomerServiceLink(link);
});

When(/^I click the "(\D+)" My account link$/, function (link) {
    footerSection.clickMyAccountLink(link);
});

When(/^I click the "(\D+)" Follow us link$/, function (link) {
    footerSection.clickFollowUsLink(link);
});

When(/^I enter a valid email address into the newsletter email field "([^"]*)"$/, function(email) {
    footerSection.enterSubscriptionEmail(email);
})

When(/^I click the "Subscribe" button under "Newsletter"$/, function() {
    footerSection.clickSubscribe();
})

When('I click the "nopCommerce" link', function() {
    footerSection.clickNopCommerceLink();
})


//*****************************************************************************************
//Shopping Cart

When('I load the video games page', function() {
    transactions.open();
});

When(/^I attempt to add an item "([^"]*)" to the shopping cart$/, function(item) {
    transactions.addToCart(item);
});

When('I go to my shopping cart', function() {
    transactions.toCart();
});

When('I complete the checkout flow', function() {
    transactions.checkout();
});

When('I go to the Orders tab in My account', function() {
    transactions.ordersTab();
});


//**************************************************************************************************
//Wishlist

When('I load the wishlist', function() {
    wishlist.open();
});

When('I click the heart button of a product', function() {
    wishlist.addItemToWishlist();
});

When('I click the wishlist link in the success message', function() {
    wishlist.successMessageLink();
});

When('I click the Update Wishlist button', function() {
    wishlist.clickUpdateButton();
});

When('I click the Add to Cart button', function() {
    wishlist.clickAddToCartButton();
});