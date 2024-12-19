Feature: Login Orange Page

  Scenario Outline: 'successful login with valid credentials'
    Given user open browser and navigate to orange web "<url>"
    When enters "<username>" and "<password>" and press login
    Then should be redirected to the dashboard page and shows "<userValue>"

    Examples:
      | url         | username | password | userValue |
      | /auth/login | Admin    | admin123 | Dashboard |
