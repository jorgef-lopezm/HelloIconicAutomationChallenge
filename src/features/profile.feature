Feature: Book Store Application Login
  
  Scenario Outline: As a user, I get redirected to login when I click on the login button
    
    Given I am on the profile page
    When I click on the button login
    Then I expect that the url is login

  Scenario Outline: As a user, I can see username abd password fields and login and new user button
    
    Given I am on the login page
    When I login with tomsmith2 and SuperSecretPa$$word1
    Then I expect elements for profile page exist

  Scenario Outline: As a user, I can see username abd password fields and login and new user button
    
    Given I am on the profile page
    Then I expect to see my books on the books list