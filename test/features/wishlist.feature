Feature: Using the Wishlist page

    As a user on the website
    I want to add items to my Wishlist
    Because I want to keep track of desired products

    Background:

        Given I am logged in

        Scenario: Adding an item to the wishlist

            When I click the Video Games link
            And I click the heart button of a product
            And I load the wishlist
            Then the product should be displayed on the wishlist


        s