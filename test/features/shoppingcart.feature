Feature: Making a transaction

    As a user on the site
    I want to complete a transaction via the shopping cart
    Because I want to make a purchase

    Background:

        Given I am logged in
        And the shopping cart is empty

        Scenario Outline: Attempt to purchase an out of stock item
        
            When I load the video games page
            And I attempt to add an item <item> to the shopping cart
            Then I see a popup message saying Out of stock at the top of the screen

        Examples:
        |item|
        |"Animal Crossing"|


        Scenario: Add an item to the shopping cart

            When i load the video games page
            And I attempt to add an item <item> to the shopping cart
            Then I see a confirmation message at the top of the screen
            When I load the shopping cart
            Then I should see the item on the shopping cart page


        # Scenario Outline: Purchasing an item

        # When I load the video games page
        # And I attempt to add an item <item> to the shopping cart
        # Then I see a confirmation message at the top of the screen
        # When I go to my shopping cart
        # And I complete the checkout flow
        # And I go to the Orders tab in My account
        # Then I should see the order displayed with status pending

        # Examples:
        # |item|
        # # |"Animal Crossing"|
        # # |"Call of Duty"|
        # # |"Mario Kart"|
        # |"Avengers"|
