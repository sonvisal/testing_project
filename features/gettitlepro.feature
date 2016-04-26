@fixture
Feature: Get title product the Web

  As a human
  I want to Get title product the web
  So I can Get title  product
  @watch
  Scenario:Get title product the Web
  	Given I have visited page product "Rich-Body-Lotion"
    Then I see image fo product
    When I can check image url
    Then I can see image found or not
  @watch
  Scenario:Get title Clarins Body-Lift-Cellulite-Control the Web
    Given I have visited page product "Clarins-Body-Lift-Cellulite-Control"
    Then I see image fo product
    When I can check image url
    Then I can see image found or not

  @watch
  Scenario:Get title Clarins Mythos-Zippo-Fragrances-for-men the Web
    Given I have visited page product "Mythos-Zippo-Fragrances-for-men"
    Then I see image fo product
    When I can check image url
    Then I can see image found or not

  @watch
  Scenario:Get title Clarins CLARINS-AZZARO-DECIBEL-TESTER
    Given I have visited page product "CLARINS-AZZARO-DECIBEL-TESTER"
    Then I see image fo product
    When I can check image url
    Then I can see image found or not

  @watch
  Scenario:Get title  COFINLUX-CAFE-ESPRESSO-P.F-EDT-TESTER
    Given I have visited page product "COFINLUX-CAFE-ESPRESSO-P.F-EDT-TESTER"
    Then I see image fo product
    When I can check image url
    Then I can see image found or not