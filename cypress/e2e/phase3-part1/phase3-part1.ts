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
//let employeeFullName=`${employeeFirstName} ${employeeMiddleName} ${employeeLastName}`

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
              )
                .then((CandidateResponse) => {
                  candidateID = CandidateResponse.body.data.id;
                  candidatefirstName = CandidateResponse.body.data.fistName;
                  candidateMiddleName = CandidateResponse.body.data.middleName;
                  candidateLastName = CandidateResponse.body.data.lastName;
                })
                .then(() => {
                  Phase3Apis.shortlistCandidate(candidateID).then(() => {
                    Phase3Apis.sheduleInterviewCandidate(
                      candidateID,
                      employeeNumber,
                      `${employeeFirstName} ${employeeMiddleName} ${employeeLastName}`
                    );
                  });
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
When("Admin mark interview passed", () => {
  RecruitmentTab.markInterviewPassed();
});
When("Admin mark interview failed", () => {
  RecruitmentTab.markInterviewFailed();
});
Then(`Candidate status should be "Interview Passed"`, () => {
  RecruitmentTab.passedstatusAssertion();
});
Then(`Candidate status should be "Interview Failed"`, () => {
  RecruitmentTab.failedstatusAssertion();
});
Then("Three button should be displayed for admin", () => {
  RecruitmentTab.CheckbuttonsExistingForPassedStatus();
});
Then("One button should be displayed for admin", () => {
  RecruitmentTab.CheckbuttonsExistingForFailedStatus();
});

afterEach(()=>{
  Phase3Apis.deleteJobTitle(jobTitleID);
  Phase3Apis.deleteVacancy(vacancyID);
  Phase3Apis.deleteEmployee(employeeNumber);
  Phase3Apis.deleteCandidate(candidateID);
})
