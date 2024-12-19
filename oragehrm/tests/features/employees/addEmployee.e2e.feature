Feature: Register Employee

  @employee_e2e
  Scenario: Validate previous created employee
    Given user is located in page Add Employee
    When inserts general information, login details and clicks on save button
    Then registered employee should be present in Persona Details page with corresponding information
    And should be present in employee list page
