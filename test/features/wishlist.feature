Feature: Using the Wishlist page

    As a user on the website
    I want to add items to my Wishlist
    Because I want to keep track of desired products

    Background:

        Given I am logged in

        Scenario: Empty wishlist

            When I load the wishlist
            Then I should see a message saying "The wishlist is empty!"


        Scenario: Adding an item to the wishlist

            When I click the Video Games link
            And I click the heart button of a product
            Then a green notification bar appears saying "The product has been added to your wishlist"
            When I click the wishlist link in the success message
            Then the product should be displayed on the wishlist

        
        Scenario: Clicking "Update Wishlist" button without clicking the "Remove" checkbox first

            When I load the wishlist
            And I click the Update Wishlist button
            Then the wishlist item is still present

        
        Scenario: Clicking "Add to Cart" without clicking the "Add to cart" checkbox first

            When I load the wishlist
            And I click the Add to Cart button
            Then the wishlist item is still present
            When I go to my shopping cart
            Then the item is not displayed on the shopping cart page






            # And I click the "Add to cart" checkbox of the listed item
            
        