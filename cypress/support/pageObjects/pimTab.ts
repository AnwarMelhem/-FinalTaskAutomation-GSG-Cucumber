// This POM Foe "PIM" tab
class PimTab {
  // get all "PIM" selectors
  static elements = {
    reportsTabNavigation: () => cy.get(".oxd-topbar-body-nav-tab"),
    addButton: () => cy.get('[type="button"]'),
    addReportTitle: () => cy.get(".oxd-text.oxd-text--h6"),
    reportNameFiled: () => cy.get('[placeholder="Type here ..."]'),
    selectionCriteria: () => cy.get(".oxd-select-text.oxd-select-text--active"),
    selectButtonForselectionCriteria: () => cy.get(".oxd-select-text--after"),
    dropdownDiv: () => cy.get(".oxd-select-dropdown").children(),
    addSlectedCriteria: () => cy.get(".oxd-icon-button.orangehrm-report-icon"),
    selectDisplayFieldGroup: () =>
      cy.get(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow"),
    selectDisplayField: () =>
      cy.get(".oxd-select-text.oxd-select-text--active"),
    addDisplayFields: () =>
      cy.get(".oxd-icon-button.orangehrm-report-icon").eq(1),
    toggle: () => cy.get(".oxd-switch-input"),
    saveButton: () => cy.get('[type="submit"]'),
    recordsFound: () => cy.get(".oxd-text.oxd-text--span.oxd-text--count"),
    headerCell: () => cy.get(".rgHeaderCell"),
    rowTabel: () => cy.get(".rgRow .rgCell"),
    reportName: () => cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title"),
  };
  // all action needed created by functions
  static clicksToRebortsTabNavigation() {
    this.elements
      .reportsTabNavigation()
      .eq(3)
      .should("contain", "Reports")
      .click({ force: true });
  }
  static clicksToAddButton() {
    this.elements.addButton().contains("Add").click({ force: true });
  }

  static assertionForAddReport() {
    this.elements.addReportTitle().should("contain", "Add Report");
  }

  static fillReportName(name: string) {
    this.elements.reportNameFiled().type(name);
  }

  static clicksToselectionCriteriaDropdownList() {
    this.elements.selectionCriteria().click({ force: true });
  }

  static selectCriteria(criteriaType: string, criteriaName: string, clickIndex: number) {
    this.elements.selectButtonForselectionCriteria().eq(0).click();
    this.elements.dropdownDiv().contains(criteriaType).click({ force: true });
    this.elements.addSlectedCriteria().eq(0).click({ force: true });
    this.elements.selectButtonForselectionCriteria().eq(clickIndex).click({ force: true });
    this.elements.dropdownDiv().contains(criteriaName).click({ force: true });
}

  static selectPersonalDisplayFieldGroup() {
    this.elements.selectDisplayFieldGroup().eq(4).click();
    this.elements.dropdownDiv().contains("Personal").click();
  }
  static selectPersonalDisplayField() {
    this.elements.selectDisplayField().eq(5).click();
    this.elements.dropdownDiv().contains("Employee First Name").click();
  }
  static addDisplayField() {
    this.elements.addDisplayFields().click({ force: true });
  }

  static activatePersonalToggle() {
    this.elements.toggle().click({ force: true });
  }

  static selectJobDisplayFieldGroup() {
    this.elements.selectDisplayFieldGroup().eq(4).click();
    this.elements.dropdownDiv().contains("Job").click();
  }
  static selectJobDisplayField() {
    this.elements.selectDisplayField().eq(5).click();
    this.elements.dropdownDiv().contains("Job Title").click();
  }
  static activateJobToggle() {
    this.elements.toggle().eq(1).click({ force: true });
  }
  static selectSalaryDisplayFieldGroup() {
    this.elements.selectDisplayFieldGroup().eq(4).click();
    this.elements.dropdownDiv().contains("Salary").click();
  }
  static selectSalaryDisplayField() {
    this.elements.selectDisplayField().eq(5).click();
    this.elements.dropdownDiv().contains("Amount").click();
  }
  static activateSalaryToggle() {
    this.elements.toggle().eq(2).click({ force: true });
  }

  static clicksToSaveButton() {
    this.elements.saveButton().click({ force: true });
  }

  static assertionForNumberOfRecorsFound(numberOfEmployee:number) {
    this.elements.recordsFound().should("contain", `(${numberOfEmployee}) Records Found`);
  }

  static confirmTheCorrectnessOfTheHeaders() {
    this.elements.headerCell().eq(0).should("contain", "Personal");
    this.elements.headerCell().eq(1).should("contain", "Job");
    this.elements.headerCell().eq(2).should("contain", "Salary");
  }

  static validateTheValuesForEmployeeRowReport(
    rowNumber: number,
    firstName: any,
    jobTitle: any,
    amount: any
  ) {
    const startIndex = (rowNumber - 1) * 3; // Calculate the starting index for each row

    this.elements.rowTabel().eq(startIndex).should("contain", firstName);
    this.elements
      .rowTabel()
      .eq(startIndex + 1)
      .should("contain", jobTitle);
    this.elements
      .rowTabel()
      .eq(startIndex + 2)
      .should("contain", amount);
  }

  static verifyTheReportName(reportName: any) {
    this.elements.reportName().should("contain", reportName);
  }
}
export default PimTab;




// This for my previous code i changed it 
/////////////////////////////////////////////
//   static validateTheValuesForFirstEmoloyeeRow(firstName:any, jobTitle:any,amount:any){
//     this.elements.rowTabel().eq(0).should('contain',firstName)
//     this.elements.rowTabel().eq(1).should('contain',jobTitle)
//     this.elements.rowTabel().eq(2).should('contain',amount)
//   }

//   static validateTheValuesForSecondEmoloyeeRow(firstName:any, jobTitle:any,amount:any){
//     this.elements.rowTabel().eq(3).should('contain',firstName)
//     this.elements.rowTabel().eq(4).should('contain',jobTitle)
//     this.elements.rowTabel().eq(5).should('contain',amount)
//   }

//   static validateTheValuesForThiredEmoloyeeRow(firstName:any, jobTitle:any,amount:any){
//     this.elements.rowTabel().eq(6).should('contain',firstName)
//     this.elements.rowTabel().eq(7).should('contain',jobTitle)
//     this.elements.rowTabel().eq(8).should('contain',amount)
// }
/////////////////////////////////////////////
// PimTab.validateTheValuesForFirstEmoloyeeRow(
//   firstEmployeeFirsrName,
//   jobTitleTitle,
//   firstEmployeeSalary
// );
/////////////////////////////////////////////
// PimTab.validateTheValuesForSecondEmoloyeeRow(
//   secondEmployeeFirsrName,
//   jobTitleTitle,
//   secondEmployeeSalary
// );
/////////////////////////////////////////////
// PimTab.validateTheValuesForThiredEmoloyeeRow(
//   thirdEmployeeFirsrName,
//   jobTitleTitle,
//   thirdEmployeeSalary
// );

  // static selectJobTitle(JobTitleName: any) {
  //   this.elements.selectButtonForselectionCriteria().eq(0).click();
  //   this.elements.dropdownDiv().contains("Job Title").click({ force: true });
  //   this.elements.addSlectedCriteria().eq(0).click({ force: true });
  //   this.elements
  //     .selectButtonForselectionCriteria()
  //     .eq(2)
  //     .click({ force: true });
  //   this.elements.dropdownDiv().contains(JobTitleName).click({ force: true });
  // }
  // static selectLocation(JobTitleName: any) {
  //   this.elements.selectButtonForselectionCriteria().eq(0).click();
  //   this.elements.dropdownDiv().contains("Location").click({ force: true });
  //   this.elements.addSlectedCriteria().eq(0).click({ force: true });
  //   this.elements
  //     .selectButtonForselectionCriteria()
  //     .eq(3)
  //     .click({ force: true });
  //   this.elements.dropdownDiv().contains(JobTitleName).click({ force: true });
  // }
  // PimTab.selectJobTitle(jobTitleTitle);
  // PimTab.selectLocation(locationName);