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
    #     And I input an email address
    #     And I input a password <password>
    #     And I click the Register button
    #     Then I should see "Your registration completed"

    #     Examples:
    #     |gender| |firstName| |lastName| |day| |month| |year| |password|
    #     |"male"| |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Password1234"|


    # Scenario: Field validation error messages

    #     When I click the Register button
    #     Then I should see validation messages for all of the required fields


    # Scenario Outline: Unequal passwords validation error message
    
    #     When I input a first name and last name <firstName> <lastName>
    #     And I input a birth date <day> <month> <year>
    #     And I input an email address
    #     And I input non-matching passwords <password1> <password2> into the password fields
    #     And I click the Register button
    #     Then I should see a validation message saying that the two passwords do not match

    #     Examples:
    #     |gender| |firstName| |lastName| |day| |month| |year| |password1| |password2|
    #     |"male"| |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Password1234"| |"Password1232"|
    

    # Scenario Outline: Invalid password validation error message

    #     When I input a first name and last name <firstName> <lastName>
    #     And I input a birth date <day> <month> <year>
    #     And I input an email address
    #     And I input an invalid password <password>
    #     Then I should see a validation message saying that the entered password is invalid

    #     Examples:
    #     |firstName| |lastName| |day| |month| |year| |password|
    #     |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Test"|
    

    # Scenario Outline: Attempting to register with previously existing email

    #     When I input a first name and last name <firstName> <lastName>
    #     And I input a birth date <day> <month> <year>
    #     And I input an existing email address
    #     And I input a password <password>
    #     And I click the Register button
    #     Then I should see a validation message saying "The specified email already exists"

    #     Examples:
    #     |firstName| |lastName| |day| |month| |year| |password|
    #     |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Test1234"|


    Scenario Outline: Attempting to register with previously existing email

        When I input a first name and last name <firstName> <lastName>
        And I input a birth date <day> <month> <year>
        And I input an invalid email address <email>
        And I input a password <password>
        And I click the Register button
        Then I should see a validation message saying "Wrong email"

        Examples:
        |firstName| |lastName| |day| |month| |year| |password| |email|
        |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Test1234"| |"robert.hayes@auticonus"|
        |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Test1234"| |"robert.hayesauticon.us"|
        |"Test"| |"Testing"| |"12"| |"December"| |"1990"| |"Test1234"| |"robert.hayesauticonus"|