Feature: Candidate Management

@employee
  Scenario Outline: Successfully adding a new candidate
    Given the user is on the PIM page and clicks the "+Add" button
    When provides the basic candidate information, uploads the resume, additional details and  clicks the "Save" button
    Then the screen should show the previously entered candidate information
