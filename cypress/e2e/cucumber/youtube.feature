Feature: duckduckgo.com

    Scenario: visiting the frontpage
        When I visit "youtube.com"
        Then I should see a search bar
        Then I should see shorts section
        Then Enter "pewdepie" into the search bar
