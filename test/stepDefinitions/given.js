import { Given} from 'cucumber';
import footerSection from '../pageobjects/footer.page';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/registration.page';
import myAccountPage from '../pageobjects/myaccount.page';
import videoGamesPage from '../pageobjects/videogames.page';


//Generic basic login for tests
Given('I am logged in', function() {
  loginPage.loginBasic();
});

//Generic function to access the homepage
Given('I am on the site homepage', function() {
  footerSection.loadHomepage();
});

//Login page
Given('I am on the login page', function() {
  loginPage.open();
  browser.getTitle().should.equal('Your store. Login');
});

//Registration page
Given('I am on the register page', function() {
  registerPage.open();
  browser.getTitle().should.equal('Your store. Register');
});

//My account page
Given('I am logged into the site', function() {
  loginPage.isLogoutShowing.should.be.true;
})

Given('I am on the My account page', function() {
  myAccountPage.loadMyAccountPage();
});


//Video Games Page
Given('I am on the homepage', function() {
  videoGamesPage.open();
  browser.getTitle().should.equal('Your store');
});