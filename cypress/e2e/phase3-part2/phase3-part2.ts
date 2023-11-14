import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Phase3Apis from "../../support/apis/phase3-apis";
import Dashboard from "../../support/pageObjects/dashoboard";
import RecruitmentTab from "../../support/pageObjects/recruitmentTab";
import SharedHelper from "../../support/helpers/shared-helper";

let jobTitleID: any;
let employeeID: any;
let employeeNumber: any;
let employeeFirstName: any;
let employeeMiddleName: any;
let employeeLastName: any;
let vacancyID: any;
let candidateID: any;
let candidatefirstName: any;
let candidateMiddleName: any;
let candidateLastName: any;
let fileName: "Resume.txt";
let interviewId: any;

beforeEach(() => {
  cy.fixture("employeeInfo").as("EmpInfo");
  cy.loginOrangeHRM();
  cy.get("@EmpInfo").then((data: any) => {
    Phase3Apis.addNewEmployee(
      data.firstName,
      data.middleName,
      data.lastName
    ).then((employeeResponse) => {
      employeeID = employeeResponse.body.data.employeeId;
      employeeNumber = employeeResponse.body.data.empNumber;
      employeeFirstName = employeeResponse.body.data.firstName;
      employeeMiddleName = employeeResponse.body.data.middleName;
      employeeLastName = employeeResponse.body.data.lastName;
      Phase3Apis.addJobTitle()
        .then((jobTitleResponse) => {
          jobTitleID = jobTitleResponse.body.data.id;
        })
        .then(() => {
          Phase3Apis.addVacancy(employeeNumber, jobTitleID)
            .then((vacanyResponse) => {
              vacancyID = vacanyResponse.body.data.id;
            })
            .then(() => {
              Phase3Apis.addNewCandidate(
                data.firstName,
                data.middleName,
                data.lastName,
                vacancyID
              ).then((CandidateResponse) => {
                candidateID = CandidateResponse.body.data.id;
                candidatefirstName = CandidateResponse.body.data.fistName;
                candidateMiddleName = CandidateResponse.body.data.middleName;
                candidateLastName = CandidateResponse.body.data.lastName;
              });
            });
        });
    });
  });
  cy.logoutOrangeHRM();
});

Given("Admin on dashboard home page", () => {
  cy.loginOrangeHRM();
});

When("Admin clicks on Recruitment tab", () => {
  Dashboard.clicksToRecruitmentTab();
});

When("Admin search for candidate", () => {
  RecruitmentTab.searchForCandidateName(`${candidateLastName}`);
});
When("Admin view candidate details", () => {
  RecruitmentTab.viewCandidateDetails();
  SharedHelper.checkLoadingSpinnerIsExist(false);
});

When("Admin enable edit candidate switch", () => {
  RecruitmentTab.enableEditButton();
});
When("Admin upload a txt file to the Resume section", () => {
  RecruitmentTab.attachFile("cypress/fixtures/Resume.txt");
  RecruitmentTab.assetionNameFile("Resume.txt");
  RecruitmentTab.clicksToSaveButton();
});

When("Admin Clicks on candidates navigate tab", () => {
  RecruitmentTab.clicksToCandidatesNavigateTab();
});
Given("Admin Shortlisted candidate", () => {
  Phase3Apis.shortlistCandidate(candidateID);
});
Given("Admin shedule Interview for Candidate", () => {
  Phase3Apis.sheduleInterviewCandidate(
    candidateID,
    employeeNumber,
    `${employeeFirstName} ${employeeMiddleName} ${employeeLastName}`
  ).then((Interviewresponse: any) => {
    interviewId = Interviewresponse.body.data.id;
  });
});
Given(`Admin changed candidate interview to "passed"`, () => {
  Phase3Apis.passedInterview(candidateID, interviewId);
});
Given(`Admin changed candidate interview to "jobed Offer"`, () => {
  Phase3Apis.jobOffered(candidateID);
});
Given(`Admin changed candidate interview to "Hired"`, () => {
  Phase3Apis.hiredCandidate(candidateID);
});
Then(`Admin download the uploaded file`, () => {
  RecruitmentTab.clicksToDawnloadButton();
});

Then("verify dawnloaded data content matches the uploaded data", () => {
  RecruitmentTab.verifyContentFile("Resume.txt");
});

afterEach(() => {
  Phase3Apis.deleteEmployee(employeeNumber);
  Phase3Apis.deleteJobTitle(jobTitleID);
  Phase3Apis.deleteVacancy(vacancyID);
  Phase3Apis.deleteCandidate(candidateID);
});
