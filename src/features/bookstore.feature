Feature: Book Store Application Login

  Scenario Outline: As a user, I can see the search bar, book lists and filter dropdown

    Given I am on the bookstore page
    When I click on the button bookstore menu
    Then I expect elements for bookstore page exist

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the bookstore page
    When I set <title> to the search bar input field
    Then I should see the displayed text <author> on books item list

    Examples:
      | title                               | author               |
      | Git Pocket Guide                    | Richard E. Silverman |
      | Learning JavaScript Design Patterns | Addy Osmani          |
      | Understanding ECMAScript 6          | Nicholas C. Zakas    |

  Scenario: As a user, I can filter the amount of rows from the book list

    Given I am on the bookstore page
    When I select 5 rows from the rows dropdown
    Then I should see 5 book items displayed