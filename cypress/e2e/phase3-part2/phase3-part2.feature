Feature: Managing Candidate Statuses 
  Scenario: Verify that the admin can upload a txt file for Application Initiated status candidate
    Given Admin on dashboard home page
    When Admin clicks on Recruitment tab
    And Admin search for candidate
    And Admin view candidate details
    And Admin enable edit candidate switch
    And Admin upload a txt file to the Resume section
    And Admin Clicks on candidates navigate tab
    And Admin search for candidate
    Then Admin download the uploaded file
    And verify dawnloaded data content matches the uploaded data

