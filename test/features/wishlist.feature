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
            Then the item should not be displayed on the shopping cart page


        Scenario Outline: Change quantity of list item

            When I load the wishlist
            And I change the value of the list item's quantity <newVal>
            And I click the Update Wishlist button
            Then the quantity of the item retains the new value <newVal>

            Examples:
            |newVal|
            |"2"|


        Scenario: Email a Friend field validation error for not entering an email

            When I load the wishlist
            And I click the Email a Friend button
            And I click the Send Email button
            Then I should see a validation error message saying "Enter friend's email"


        Scenario: Email a Friend field validation error for not entering an email

            When I load the wishlist
            And I click the Email a Friend button
            And I clear the Your email address field
            And I click the Send Email button
            Then I should see a validation error message saying "Enter your email"

        
        Scenario Outline: Email a Friend field validation error for invalid friend email

            When I load the wishlist
            And I click the Email a Friend button
            And I enter an invalid friend email address <email>
            And I click the Send Email button
            Then I should see a validation error message saying "Wrong email" for the friend email

            Examples:
            |email|
            |"robert.hayesauticon.us"|
            |"robert.hayesauticonus"|

        
        Scenario Outline: Email a Friend field validation error for invalid personal email

            When I load the wishlist
            And I click the Email a Friend button
            And I enter a valid friend email address <emailF>
            And I enter an invalid personal email address <emailP>
            And I click the Send Email button
            Then I should see a validation error message saying "Wrong email" for the personal email

            Examples:
            |emailF| |emailP|
            |"robert.hayes@auticon.us"| |"robert.hayes+4auticon.us"|
            |"robert.hayes@auticon.us"| |"robert.hayes+4auticonus"|


        Scenario Outline: Email a Friend successfully send email without personal message

            When I load the wishlist
            And I click the Email a Friend button
            And I enter a valid friend email address <emailF>
            And I enter a valid personal email address <emailP>
            And I click the Send Email button
            Then I should see a message saying "Your message has been sent."

            Examples:
            |emailF| |emailP|
            |"robert.hayes@auticon.us"| |"robert.hayes+4@auticon.us"|


        Scenario Outline: Email a Friend successfully send email

            When I load the wishlist
            And I click the Email a Friend button
            And I enter a valid friend email address <emailF>
            And I enter a valid personal email address <emailP>
            And I enter a valid personal message "This is a test message."
            And I click the Send Email button
            Then I should see a message saying "Your message has been sent."

            Examples:
            |emailF| |emailP|
            |"robert.hayes@auticon.us"| |"robert.hayes+4@auticon.us"|


        Scenario: Add wishlist item to cart

            When I load the wishlist
            And I click the "Add to cart" checkbox of the listed item
            And I click the Add to Cart button
            Then the item should be displayed on the shopping cart page
            When I load the wishlist
            Then the item should no longer be displayed on the wishlist
            
        
        Scenario: Remove item from wishlist

            When I click the Video Games link
            And I click the heart button of a product
            And I load the wishlist
            And I click the "Remove" checkbox of the listed item
            And I click the Update Wishlist button
            Then the item should no longer be displayed on the wishlist