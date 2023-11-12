Feature: Managing Candidate Statuses

  Scenario: Admin Mark Candidate Interview Result To Passed
    Given Admin on dashboard home page
    When Admin clicks on Recruitment tab
    And Admin search for candidate
    And Admin view candidate details
    And Admin mark interview passed
    Then Candidate status should be "Interview Passed"
    And Three button should be displayed for admin

  Scenario: Admin Mark Candidate Interview Result To Failed
    Given Admin on dashboard home page
    When Admin clicks on Recruitment tab
    And Admin search for candidate
    And Admin view candidate details
    And Admin mark interview failed
    Then Candidate status should be "Interview Failed"
    And One button should be displayed for admin

    
