Feature: Navigating the footer section

    As a user on the website
    I want to navigate the footer section
    Because I want to access everything that can be accessed from that section

    Background:

        Given I am logged in
        And I am on the site homepage

        # Scenario Outline: Clicking the Information links

            # When I click the <link> Information link
            # Then the page with the url <url> should load

            # Examples:
            # |link| |url|
            # |"Sitemap"| |"https://auticontraining.azurewebsites.net/sitemap"|
            # |"Shipping & returns"| |"https://auticontraining.azurewebsites.net/shipping-returns"|
            # |"Privacy notice"| |"https://auticontraining.azurewebsites.net/privacy-notice"|
            # |"Conditions of Use"| |"https://auticontraining.azurewebsites.net/conditions-of-use"|
            # |"About us"| |"https://auticontraining.azurewebsites.net/about-us"|
            # |"Contact us"| |"https://auticontraining.azurewebsites.net/contactus"|


        # Scenario Outline: Clicking the Customer service links

            # When I click the <link> Customer service link
            # Then the page <link> with the url <url> should load

            # Examples:
            # |link| |url|
            # |"Search"| |"https://auticontraining.azurewebsites.net/search"|
            # |"News"| |"https://auticontraining.azurewebsites.net/news"|
            # |"Blog"| |"https://auticontraining.azurewebsites.net/blog"|
            # |"Recently viewed products"| |"https://auticontraining.azurewebsites.net/recentlyviewedproducts"|
            # |"Compare products list"| |"https://auticontraining.azurewebsites.net/compareproducts"|
            # |"New products"| |"https://auticontraining.azurewebsites.net/newproducts"|


        # Scenario Outline: Clicking the My account links

            # When I click the <link> My account link
            # Then the page with the url <url> should load

            # Examples:
            # |link| |url|
            # |"My account"| |"https://auticontraining.azurewebsites.net/customer/info"|
            # |"Orders"| |"https://auticontraining.azurewebsites.net/order/history"|
            # |"Addresses"| |"https://auticontraining.azurewebsites.net/customer/addresses"|
            # |"Shopping cart"| |"https://auticontraining.azurewebsites.net/cart"|
            # |"Wishlist"| |"https://auticontraining.azurewebsites.net/wishlist"|
            # |"Apply for vendor account"| |"https://auticontraining.azurewebsites.net/vendor/apply"|

        
        # Scenario Outline: Clicking the Follow us links

        #     When I click the <link> Follow us link
        #     Then the page with the url <url> should load in a separate tab

        #     Examples:
        #     |link| |url|
        #     |"Facebook"| |"https://www.facebook.com/nopCommerce"|
        #     |"Twitter"| |"https://twitter.com/nopCommerce"|
        #     |"YouTube"| |"https://www.youtube.com/user/nopCommerce"|


        Scenario: Subscription email validation

            When I click the "Subscribe" button under "Newsletter"
            Then I should see the validation error message "Enter valid email"

        
        Scenario Outline: Successful email subscription

            When I enter a valid email address into the newsletter email field <email>
            And I click the "Subscribe" button under "Newsletter"
            Then I should see the validation message saying that a verification email has been sent

            Examples:
            |email|
            |"robert.hayes+4@auticon.us"|