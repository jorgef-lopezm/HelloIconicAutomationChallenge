Feature: Book Store Application Login

  Scenario: As a user, I can see username abd password fields and login and new user button

    Given I am on the login page
    When I click on the button login menu
    Then I expect elements for login page exist

  Scenario: As a user, if I click on New User I get redirected to register page

    Given I am on the login page
    When I click on the button new user
    Then I expect that the url is register

  Scenario: As a user, I can login to my account

    Given I am on the login page
    When I login with tomsmith and SuperSecretPa$$word1
    Then I should see the displayed username tomsmith
