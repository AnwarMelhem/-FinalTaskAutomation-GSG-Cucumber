// this file for all needed api in phase 1
import GenericHelper from "../helpers/generic-helper";
class Phase1Apis {
  // The API to link an employee with their job title and location was defined by this function.
  static linkEmployeeWithJobTitleAndLocation(
    jobTitleId: number,
    locationId: number,
    empNumber: number
  ): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "PUT",
        url: `/web/index.php/api/v2/pim/employees/${empNumber}/job-details`,
        body: {
          jobTitleId: jobTitleId,
          locationId: locationId,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// The API to link employee with salary amount was defined by this function.
  static linkEmployeeWithSalaryAmount(
    empNumber: number
  ): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: `/web/index.php/api/v2/pim/employees/${empNumber}/salary-components`,
        body: {
          salaryComponent: `${GenericHelper.genericRandomNumber()}`,
          salaryAmount: `${GenericHelper.genericRandomNumber()}`,
          currencyId: "EUR",
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// The API to delete job title was defined by this function.
  static deleteJobTitle(jobTitleID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/admin/job-titles`,
        body: {
          ids: [jobTitleID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// The API to delete location was defined by this function.
  static deleteLocation(LocationID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/admin/locations`,
        body: {
          ids: [LocationID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// The API to delete report was defined by this function.
  static deleteReport(ReportID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/pim/reports/defined
        `,
        body: {
          ids: [ReportID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
}

export default Phase1Apis;
