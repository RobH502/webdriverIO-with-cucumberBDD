Feature: registering an account

    As a user on the registration page
    I want to register a new account
    Because I want to login to the site

    Background:

        Given I am on the register page

    # Scenario Outline: Performing account registration with passing test data as data table

    #     When I input a gender <gender>
    #     And I input a first name and last name <firstName> <lastName>
    #     And I input a birth date <day> <month> <year>
    #     And I input an email and password <password>
    #     And I click the Register button
    #     Then I should see "Your registration completed"

    #     Examples:
    #     |gender| |firstName| |lastName| |day| |month| |year| |password|
    #     |"male"| |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Password1234"|


    Scenario: Field validation

        When I click the Register button
        Then I should see validation messages for all of the required fields
        