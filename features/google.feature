Feature: Google for Cucumber
  In order to get more info about Cucumber
  As a BDDer
  I want to find Cucumber resources on Google

  Scenario: find cukes.info
    Given I am on Gamekapocs
    When I click on Logo
    When I search for "far cry"
    Then I see a link to "/hir/42534/far_cry_4_kesik_a_javitas"