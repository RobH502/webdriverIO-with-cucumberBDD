Feature: Using the "My account" page and tabs

    As a user logged into an account
    I want to use the "My account" page and its tabs
    Because I want to edit certain account features

    Background:

        Given I am logged in
        And I am on the My account page

    # Scenario Outline: Verify that the correct headers appear when corresponding tabs are clicked

    #     When I click the <tab> tab
    #     Then I should see the <header> header

    #     Examples:
    #     |tab| |header|
    #     |"Addresses"| |"My account - Addresses"|
    #     |"Customer info"| |"My account - Customer info"|
    #     |"Orders"| |"My account - Orders"|
    #     |"Downloadable products"| |"My account - Downloadable products"|
    #     |"Back in stock subscriptions"| |"My account - Back in stock subscriptions"|
    #     |"Reward points"| |"My account - Reward points"|
    #     |"Change password"| |"My account - Change password"|
    #     |"My product reviews"| |"My account - My product reviews"|

    
    # Scenario Outline: Add a new address

    #     When I click the "Addresses" tab
    #     And I click the "Add New" button
    #     Then I should see the "My account - Add new address" header
    #     And I fill out the first name, last name, and email fields <fName> <lName> <email>
    #     And I select options from the Country and State fields <country> <state>
    #     And I fill out the City and Address 1 fields <city> <address 1>
    #     And I fill out the Zip postal code and Phone number fields <zipCode> <phoneNum>
    #     And I click the address Save button
    #     Then I should see the new address block and its name headers <fName> <lName>

    #     Examples:
    #     |fName| |lName| |email| |city| |address 1| |zipCode| |phoneNum| |country| |state|
    #     |"John"| |"Wayne"| |"robert.hayes+4@auticon.us"| |"Gotham"| |"11111 Test Rd"| |"11111"| |"1111111111"| |"United States"| |"California"|



    Scenario Outline: Delete an address

        When I click the "Addresses" tab
        And I add a new address <fName> <lName> <email> <city> <address 1> <zipCode> <phoneNum> <country> <state>
        And I click the Delete button on an existing address and accept the alert
        Then the address is no longer displayed on the page <fName> <lName>

        Examples:
        |fName| |lName| |email| |city| |address 1| |zipCode| |phoneNum| |country| |state|
        |"Testing"| |"Deletion"| |"robert.hayes+4@auticon.us"| |"Gotham"| |"11111 Test Rd"| |"11111"| |"1111111111"| |"United States"| |"California"|


    # Scenario Outline: Change customer info items

    #     When I click the <gender> radio option
    #     And I edit the entry in the "First name" field <fName>
    #     And I edit the entry in the "Last name" field <lName>
    #     And I click the "Save" button
    #     And I click the Log out button
    #     And I login to the site
    #     And I load the My account page
    #     Then I see the newly edited info retained in the Customer info fields <gender> <fName> <lName>

    #     Examples:
    #     |gender| |fName| |lName|
    #     |"female"| |"Roy"| |"Wilson"|


    # Scenario Outline: Change to new password

    #     When I click the "Change password" tab
    #     And I fill out the old and new password <oldPassword> <newPassword> fields
    #     And I click the "Change Password" button
    #     Then I see the message "Password was changed"
    #     When I click the Log out button
    #     And I login to the site with new password <newPassword>
    #     Then I should see the logout link
        
    #     Examples:
    #     |oldPassword| |newPassword|
    #     |"PotterMalfoy18"| |"PotterMalfoy17"|

