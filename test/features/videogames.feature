Feature: loading video games page

    As a user on the website
    I want to click the video games option
    Because I want to load the video games page

    Background:

        Given I am on the homepage

    Scenario Outline: Login to the site
        When I go to the login page
        When I login with email and password <email> <password> into the text box
        Then I should see the logout link

        Examples:
        |email| |password|
        |"robert.hayes+4@auticon.us"| |"PotterMalfoy22"|

    Scenario: Click the Video Games link

        When I click the Video Games link
        Then I see the correct header "Video Games" on the page


    Scenario Outline: Select the primary two Video Game dropdown options

        When I hover over the "Video Games" option
        And I click a menu option <menuOpt>
        Then I see the correct header <menuOpt> on the page

        Examples:
        |menuOpt|
        |"Xbox One"|
        |"Nintendo Switch"|


    Scenario Outline: Select each option in the Xbox One sub-menu

        When I hover over the "Video Games" option
        And I hover over the "Xbox One" option
        And I click an Xbox One sub-menu option <menuOpt>
        Then I see the correct header <menuOpt> on the page

        Examples:
        |menuOpt|
        |"Xbox One Consoles"|
        |"Xbox One Games"|
        |"Xbox One Accessories"|

    
    Scenario Outline: Select each option in the Nintendo Switch sub-menu

        When I hover over the "Video Games" option
        And I hover over the "Nintendo Switch" option
        And I click a Nintendo Switch sub-menu option <menuOpt>
        Then I see the correct header <menuOpt> on the page

        Examples:
        |menuOpt|
        |"Nintendo Switch Consoles"|
        |"Nintendo Switch Games"|
        |"Nintendo Switch Accessories"|