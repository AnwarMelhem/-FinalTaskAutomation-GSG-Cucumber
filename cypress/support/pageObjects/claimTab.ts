class ClaimTab {
  // get all "Claim" selectors
  static elements = {
    submitClaim: () => cy.get('[type="button"]').contains(" Submit Claim "),
    submitClaimTitlePage: () =>
      cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title"),
    selectDropdownlist: () => cy.get(".oxd-select-text--after"),
    dropdownDiv: () => cy.get(".oxd-select-option").children(),
    remarkTextArea: () =>
      cy.get(
        ".oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical"
      ),
    createButton: () => cy.get('[type="submit"]').contains("Create"),
    addButton: () => cy.get('[type="button"]').contains("Add").eq(0),
    dateBikerInput: () => cy.get('[placeholder="yyyy-mm-dd"]'),
    amountInutField: () => cy.get(".oxd-input.oxd-input--active"),
    saveButton: () => cy.get('[type="submit"]').contains("Save"),
    submitButton: () => cy.get('[type="button"]').contains("Submit"),
    employeeNameInputForSearch: () =>
      cy.get('[placeholder="Type for hints..."]'),
    employeeAutoComplete: () => cy.get(".oxd-autocomplete-option"),
    searchButton: () => cy.get('[type="submit"]').contains("Search"),
    viewDetailsButton: () =>
      cy.get('[type="button"]').contains("View Details"),
    approveButton: () => cy.get('[type="button"]').contains("Approve"),
    rejectButton: () => cy.get('[type="button"]').contains("Reject"),
    backButton: () => cy.get('[type="button"]').contains("Back"),
    assignClaim:()=> cy.get('[type="button"]').contains("Assign Claim")
  };
  // all action needed created by functions
  static clicksToSubmitClaim() {
    cy.intercept("/web/index.php/claim/submitClaim").as("submitClaim");
    this.elements.submitClaim().click({ force: true });
    cy.wait("@submitClaim");
  }

  static assertionForSubmitClaimTitlePage() {
    this.elements
      .submitClaimTitlePage()
      .should("contain", "Create Claim Request");
  }
  static clicksToSelectEventDropdown(eventName: string) {
    this.elements.selectDropdownlist().eq(0).click({ force: true });
    this.elements.dropdownDiv().contains(eventName).click({ force: true });
  }
  static clicksToSelectCurrencyDropdown() {
    this.elements.selectDropdownlist().eq(1).click({ force: true });
    this.elements
      .dropdownDiv()
      .contains("Saudi Arabia Riyal")
      .click({ force: true });
  }
  static fillRemarkTextArea() {
    this.elements.remarkTextArea().type("Claim Remark Data");
  }
  static clicksToCreateButton() {
    cy.intercept("/web/index.php/claim/submitClaim/**").as("submitClaim");
    this.elements.createButton().click({ force: true });
    cy.wait("@submitClaim");
  }

  static clicksToAddButton() {
    this.elements.addButton().click({ force: true });
  }
  static AddExpense(expenseName: string, date: any, amount: any) {
    this.elements.selectDropdownlist().click({ force: true });
    this.elements.dropdownDiv().contains(expenseName).click({ force: true });
    this.elements.dateBikerInput().type(date);
    this.elements.amountInutField().eq(5).type(amount, { force: true }),
      this.elements.saveButton().click({ force: true });
  }
  static AddExpenseInAdminPortal(expenseName: string, date: any, amount: any) {
    this.elements.selectDropdownlist().click({ force: true });
    this.elements.dropdownDiv().contains(expenseName).click({ force: true });
    this.elements.dateBikerInput().type(date);
    this.elements.amountInutField().eq(6).type(amount, { force: true }),
      this.elements.saveButton().click({ force: true });
  }
  static clicksToSubmitButton() {
    this.elements.submitButton().click({ force: true });
  }
  static searchForEmployeeName(employeeName: any) {
    cy.intercept("/web/index.php/api/v2/claim/employees/**").as("submitClaim");
    cy.intercept("web/index.php/api/v2/pim/employees?nameOrId**").as(
      "nameOrId"
    );
    this.elements
      .employeeNameInputForSearch()
      .eq(0)
      .type(employeeName, { force: true });
    cy.wait("@nameOrId");
    this.elements
      .employeeAutoComplete()
      .contains(employeeName)
      .click({ force: true });
    this.elements.searchButton().click({ force: true });
    cy.wait("@submitClaim");
  }
  static fillEmployeeName(employeeName: any){
    cy.intercept("/web/index.php/api/v2/claim/employees/**").as("submitClaim");
    cy.intercept("web/index.php/api/v2/pim/employees?nameOrId**").as(
      "nameOrId"
    );
    this.elements
      .employeeNameInputForSearch()
      .eq(0)
      .type(employeeName, { force: true });
    cy.wait("@nameOrId");
    this.elements
      .employeeAutoComplete()
      .contains(employeeName)
      .click({ force: true });
  }
  static clicksToViewDetailsButton() {
   
    this.elements.viewDetailsButton().click({ force: true });
  
  }
  static clicksToApproveButton() {
    this.elements.approveButton().click({ force: true });
  }
  static clicksToBackButton() {
    this.elements.backButton().click({ force: true });
  }

  static clicksToRejectButton() {
    this.elements.rejectButton().click({ force: true });
  }

  static clicksToAssignClaim(){
  this.elements.assignClaim().click({ force: true });
  }
}

export default ClaimTab;
