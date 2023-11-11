// This POM Foe "Recruitment" tab
import SharedHelper from "../helpers/shared-helper";
class RecruitmentTab {
  // get all "RecruitmentTab" selectors
  static elements = {
    CandidateNameInput: () => cy.get('[placeholder="Type for hints..."]'),
    employeeAutoComplete: () => cy.get(".oxd-autocomplete-option"),
    searchButton: () => cy.get('[type="submit"]').contains("Search"),
    viewCandidate: () =>
      cy.get(".oxd-icon-button.oxd-table-cell-action-space").eq(0),
    markInterviewPassed: () =>
      cy.get('[type="button"]').contains("Mark Interview Passed"),
    markInterviewFailed: () =>
      cy.get('[type="button"]').contains("Mark Interview Failed"),
    saveButton: () => cy.get('[type="submit"]').contains("Save"),
    titleAssertion: () => cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title"),
    statusAssertion: () => cy.get(".oxd-text.oxd-text--p.oxd-text--subtitle-2"),
  };

  // all action needed created by functions
  static searchForCandidateName(employeeName: any) {
    cy.intercept(
      "/web/index.php/api/v2/recruitment/candidates?candidateName**"
    ).as("candidateName");
    this.elements
      .CandidateNameInput()
      .eq(0)
      .type(employeeName, { force: true });
    cy.wait("@candidateName");
    this.elements
      .employeeAutoComplete()
      .contains(employeeName)
      .click({ force: true });
    this.elements.searchButton().click({ force: true });
  }

  static viewCandidateDetails() {
    this.elements.viewCandidate().click({ force: true });
  }

  static markInterviewPassed() {
    cy.intercept("web/index.php/api/v2/recruitment/candidates/**").as(
      "candidate"
    );
    this.elements.markInterviewPassed().click({ force: true });
    SharedHelper.checkLoadingSpinnerIsExist(false);
    this.elements.titleAssertion().should("contain", "Mark Interview Passed");
    SharedHelper.checkLoadingSpinnerIsExist(false);
    this.elements.saveButton().click({ force: true });
    SharedHelper.checkLoadingSpinnerIsExist(false);
    cy.wait("@candidate");
  }

  static markInterviewFailed() {
    cy.intercept("web/index.php/api/v2/recruitment/candidates/**").as(
      "candidate"
    );
    this.elements.markInterviewFailed().click({ force: true });
    SharedHelper.checkLoadingSpinnerIsExist(false);
    this.elements.titleAssertion().should("contain", "Mark Interview Failed");
    SharedHelper.checkLoadingSpinnerIsExist(false);
    this.elements.saveButton().click({ force: true });
    SharedHelper.checkLoadingSpinnerIsExist(false);
    cy.wait("@candidate");
  }

  static passedstatusAssertion() {
    this.elements
      .statusAssertion()
      .should("contain", "Status: Interview Passed");
  }
  static failedstatusAssertion() {
    this.elements
      .statusAssertion()
      .should("contain", "Status: Interview Failed");
  }
  static CheckbuttonsExistingForPassedStatus() {
    cy.contains("button", "Reject").should("exist");
    cy.contains("button", "Schedule Interview").should("exist");
    cy.contains("button", "Offer Job").should("exist");
  }
  static CheckbuttonsExistingForFailedStatus() {
    cy.contains("button", "Reject").should("exist");
  }
}
export default RecruitmentTab;
