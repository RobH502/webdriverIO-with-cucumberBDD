import { Then } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/registration.page';
import myAccountPage from '../pageobjects/myaccount.page';
import videoGamesPage from '../pageobjects/videogames.page';
import footerSection from '../pageobjects/footer.page';


//Login
Then('I should see the logout link', function() {
  loginPage.isLogoutShowing().should.be.true;
})

Then('I should not see the Log out link on the page', function() {
  loginPage.isLogoutShowingNoWait().should.be.false;
})

Then('I should see the Login link on the page', function() {
  loginPage.isLoginShowing().should.be.true;
})

//Register
Then(/^I should see "([^"]*)"$/, function(message) {
  registerPage.isRegisterComplete().should.be.true;
});


//My Account page
Then(/^I see the newly edited info retained in the Customer info fields "([^"]*)" "([^"]*)" "([^"]*)"$/, function (gender, fName, lName) {
  myAccountPage.verifyChanges(gender, fName, lName);
});

Then(/^I should see the "([^"]*)" header$/, function (header) {
  myAccountPage.correctHeaderDisplayed(header);
});

Then(/^I should see the new address block and its name headers "([^"]*)" "([^"]*)"$/, function(fName, lName) {
  myAccountPage.addressVerifyPart1(fName, lName);
});

//Video Games
Then('I see the Video Game header on the page', function() {
  videoGamesPage.onCorrectPage();
});

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
