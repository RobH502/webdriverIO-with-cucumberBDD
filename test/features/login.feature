Feature: performing a login

    As a user on the login page
    I want to login
    Because I want to access my account

    Background:
    
        Given I am on the login page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with email and password <email> <password> into the text box
        Then I should see the logout link

        Examples:
        |email| |password|
        |"robert.hayes+4@auticon.us"| |"PotterMalfoy22"|



    Scenario: Logout of the site

        When I login to the site
        And I click the Log out button
        Then I should not see the Log out link on the page
        And I should see the Login link on the page