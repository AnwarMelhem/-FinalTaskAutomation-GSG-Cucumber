// This POM to dashboard section
export default class Dashboard {
  // Function to get main menue items
  static mainMenuItems() {
    return cy.get(".oxd-sidepanel-body");
  }
  // Function to clicks to "BIM" tab
  static clicksToBIMtab() {
    cy.intercept("/web/index.php/api/v2/pim/employees**").as("employees");
    cy.intercept("/web/index.php/api/v2/admin/job-titles**").as("jobTitles");
    cy.intercept("/web/index.php/api/v2/admin/employment-statuses**").as(
      "employmentStatuses"
    );
    cy.intercept("/web/index.php/api/v2/admin/subunits**").as("subunits");
    cy.intercept("/web/index.php/core/i18n/messages").as("messages");

    this.mainMenuItems().contains("PIM").click({ force: true });

    cy.wait([
      "@employees",
      "@jobTitles",
      "@employmentStatuses",
      "@subunits",
      "@messages",
    ]);
  }
  // Function to clicks to "BIM" tab
  static clicksToClaimTab() {
    cy.intercept("/web/index.php/api/v2/claim/**").as("claim");
    cy.intercept("/web/index.php/api/v2/leave/workweek**").as("leave");
    cy.intercept("/web/index.php/api/v2/leave/holidays**").as("holidays");

    this.mainMenuItems().contains("Claim").click({ force: true });

    cy.wait(["@claim", "@leave", "@holidays"]);
  }
}
