import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Phase3Apis from "../support/apis/phase3-apis";
let jobTitleID: any;
let employeeID: any;
let employeeNumber: any;
let employeeFirstName: any;
let employeeMiddleName: any;
let employeeLastName: any;
let vacancyID: any;
let candidateID: any;

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

Given("I am on empty home page", () => {
  cy.loginOrangeHRM();
});

// When("I type and submit in the board name", () => {
//   cy.get("[data-cy=first-board]").type('new board{enter}');
// });

// Then("I should be redirected to the board detail", () => {
//   cy.location("pathname").should('match', /\/board\/\d/);
// });
