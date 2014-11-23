Feature: Gamekapocs search

  Scenario: Find Far cry news
    Given I am on Gamekapocs
    When I click on Logo
    When I search for "far cry"
    Then I see a link to "/hir/42534/far_cry_4_kesik_a_javitas"