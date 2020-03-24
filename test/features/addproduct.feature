Feature: Add a Product

    As a user on the website
    I want to have Admin access
    Because I want to add a product to the site

    Background:

        Given I am logged in as an admin user

        # Scenario: Access Admin page
 
        #     When I click the Admin link at the top of the page
        #     Then I should be redirected to the Admin page


        # Scenario: Access Add new product CMS

        #     When I click the Admin link at the top of the page
        #     And I click the Catalog menu option in the sidebar
        #     And I click the Products link in the Catalog menu
        #     And I click the Add new button
        #     Then I should be dredirected to the Add new product CMS page

        
        Scenario: Add new product

            When I click the Admin link at the top of the page
            And I click the Catalog menu option in the sidebar
            And I click the Products link in the Catalog menu
            And I click the Add new button
            And I enter a Product Name
            And I enter a Short Description
            And I enter a Full Description
            And I enter an SKU
            And I select an option from Categories
            And I enter a Price
            And I select a Tax Category
            And I enter data in the Shipping section
            And I select an Inventory method
            And I click the Save and Continue Edit button
            Then I should see a success message at the top of the page
            When I upload an image
            And I click the Save button
            And I load the correct products page
            Then I should see the new product displayed on the page