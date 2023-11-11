import GenericHelper from "../helpers/generic-helper";
export default class Phase3Apis {
  // API for Add Job Title
  static addJobTitle(): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "POST",
        url: `/web/index.php/api/v2/admin/job-titles`,
        body: {
          title: `New types${GenericHelper.genericRandomNumber()}`,
          description: "Description",
          specification: null,
          note: "Note",
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// API for Delete Job Title
  static deleteJobTitle(JobTitleID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/admin/job-titles`,
        body: {
          ids: [JobTitleID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
  // API for Add Vacancy
  static addVacancy(
    employeeID: number,
    jobTitleID: number
  ): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: `/web/index.php/api/v2/recruitment/vacancies`,
        body: {
          name: `Vacancy${GenericHelper.genericRandomNumber()}`,
          jobTitleId: jobTitleID,
          employeeId: employeeID,
          numOfPositions: 5,
          description: "Description",
          status: true,
          isPublished: true,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
  // API for Delete Vacancy
  static deleteVacancy(vacancyID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/admin/job-titles`,
        body: {
          ids: [vacancyID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
}
