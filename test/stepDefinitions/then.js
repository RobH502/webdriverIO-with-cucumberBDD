import { Then } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/registration.page';
import myAccountPage from '../pageobjects/myaccount.page';
import videoGamesPage from '../pageobjects/videogames.page';
import footerSection from '../pageobjects/footer.page';
import transactionsPage from '../pageobjects/shoppingcart.page';
import wishlist from '../pageobjects/wishlist.page';
import addProduct from '../pageobjects/addproduct.page';


//Login
Then('I should see the logout link', function() {
  loginPage.isLogoutShowing().should.be.true;
})

Then('I should not see the Log out link on the page', function() {
  loginPage.isLogoutShowingNoWait().should.be.false;
})

Then('I should see the Login link on the page', function() {
  loginPage.isLoginShowing().should.be.true;
});

Then('I should see the validation error message "Wrong email"', function() {
  loginPage.invalidEmailMessage();
});

Then(/^I should see the appropriate validation error message displayed "([^"]*)" "([^"]*)"$/, function(email, password) {
  loginPage.blankFieldsMessages(email, password);
});

Then('I should see a validation error message saying that no account was found', function() {
  loginPage.failedLoginMessage('noAccount');
})

Then('I should see a validation error message saying that the credentials are not correct', function() {
  loginPage.failedLoginMessage('wrongCreds');
})


//Register
Then(/^I should see "([^"]*)"$/, function(message) {
  registerPage.isRegisterComplete().should.be.true;
});

Then('I should see validation messages for all of the required fields', function() {
  registerPage.allValidationMessages();
});

Then('I should see a validation message saying that the two passwords do not match', function() {
  registerPage.noMatchMessage();
});

Then('I should see a validation message saying that the entered password is invalid', function() {
  registerPage.invalidPasswordMessage();
});

Then('I should see a validation message saying "The specified email already exists"', function() {
  registerPage.existingEmailMessage();
});

Then('I should see a validation message saying "Wrong email"', function() {
  registerPage.invalidEmailMessage();
})


//My Account page
Then(/^I see the newly edited info retained in the Customer info fields "([^"]*)" "([^"]*)" "([^"]*)"$/, function (gender, fName, lName) {
  myAccountPage.verifyChanges(gender, fName, lName);
});

Then(/^I should see the "([^"]*)" header$/, function (header) {
  myAccountPage.correctHeaderDisplayed(header);
});

Then(/^I should see the new address block and its name headers "([^"]*)" "([^"]*)"$/, function(fName, lName) {
  myAccountPage.addressVerifyPresent(fName, lName);
});

Then(/^the address is no longer displayed on the page "(\D+)" "(\D+)"$/, function(fName, lName) {
  myAccountPage.addressVerifyDeleted(fName, lName);
});


//Video Games
Then(/^I see the correct header "([^"]*)" on the page$/, function(header) {
  videoGamesPage.correctHeader(header);
});


//Footer
Then(/^the page with the url "(\D+)" should load$/, function(url) {
  footerSection.loadedPage(url);
});

Then(/^the page with the url "(\D+)" should load in a separate tab$/, function(url) {
  footerSection.loadedFollowUsPage(url);
  browser.closeWindow();
  browser.switchWindow('https://auticontraining.azurewebsites.net/');
});

Then(/^I should see the validation error message "Enter valid email"$/, function() {
  footerSection.emailValidation();
});

Then('I should see the validation message saying that a verification email has been sent', function() {
  footerSection.successValidation();
});

Then(/^the "nopCommerce" page with the url "([^"]*)" should load in a separate tab$/, function(url) {
  footerSection.loadedNopComPage(url);
});

Then('the copyright disclaimer is displayed in the footer', function() {
  footerSection.disclaimerDisplayed();
})


//Shopping Cart
Then('I see a confirmation message at the top of the screen', function() {
  transactionsPage.addCartConfirmation();
});

Then('I see a popup message saying Out of stock at the top of the screen', function() {
  transactionsPage.soldOut();
});

Then('I should see the order displayed with status pending', function() {
  transactionsPage.transactionVerification();
});

Then('the item should be displayed on the shopping cart page', function() {
  transactionsPage.verifyItemPresent();
})

Then('the item should not be displayed on the shopping cart page', function() {
  transactionsPage.verifyItemNotPresent();
});


//**************************************************************************************************
//Wishlist

Then('I should see a message saying "The wishlist is empty!"', function() {
  wishlist.verifyEmptyList();
});

Then('the product should be displayed on the wishlist', function() {
  wishlist.itemAddedVerify();
});

Then('a green notification bar appears saying "The product has been added to your wishlist"', function() {
  wishlist.verifySuccessMessage();
});

Then('the wishlist item is still present', function() {
  wishlist.itemAddedVerify();
});

Then('the item should no longer be displayed on the wishlist', function() {
  wishlist.itemGoneVerify();
});

Then(/^the quantity of the item retains the new value "(\d+)"$/, function(newVal) {
  wishlist.verifyQuantityChange(newVal);
});

Then('I should see a validation error message saying "Enter friend\'s email"', function() {
  wishlist.verifyEnterEmailMessage('friend');
});

Then('I should see a validation error message saying "Wrong email" for the friend email', function() {
  wishlist.verifyWrongEmailMessage('friend');
});

Then('I should see a validation error message saying "Enter your email"', function() {
  wishlist.verifyEnterEmailMessage('personal');
});

Then('I should see a validation error message saying "Wrong email" for the personal email', function() {
  wishlist.verifyWrongEmailMessage('personal');
});

Then('I should see a message saying "Your message has been sent."', function() {
  browser.pause(5000);
  wishlist.verifyEmailSuccessMessage();
})


//*************************************************************************************************
//Add new product

Then('I should be redirected to the Admin page', function() {
  addProduct.verifyAdminPageLoaded();
});

Then('I should be dredirected to the Add new product CMS page', function() {
  addProduct.verifyAddNewCMSLoaded();
});

Then('I should see a success message at the top of the page', function() {
  addProduct.verifySuccessMessage();
});

Then('I should see the new product displayed on the page', function() {
  addProduct.verifyNewProductDisplayed();
});

Then('the product should no longer be listed', function() {
  addProduct.verifyRemoved();
})