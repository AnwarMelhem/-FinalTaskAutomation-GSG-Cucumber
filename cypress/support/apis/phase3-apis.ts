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
      cy.api({
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
      cy.api({
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
      cy.api({
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
  // API for Add New Employee
  static addNewEmployee(
    firstName: string,
    middleName: string,
    LastName: string
  ): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "POST",
        url: "/web/index.php/api/v2/pim/employees",
        body: {
          firstName: `${firstName}${GenericHelper.genericRandomNumber()}`,
          middleName: `${middleName}${GenericHelper.genericRandomNumber()}`,
          lastName: `${LastName}${GenericHelper.genericRandomNumber()}`,
          empPicture: null,
          employeeId: `${GenericHelper.genericRandomNumber()}`,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
  // Create Login Details API Request
  static createLoginDetails(
    empNumber: number,
    username: string,
    password: string
  ) {
    cy.api({
      method: "POST",
      url: "/web/index.php/api/v2/admin/users",
      body: {
        empNumber: empNumber,
        password: password,
        status: true,
        userRoleId: 2,
        username: username,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }
  // API for Delete Employee
  static deleteEmployee(employeeID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "DELETE",
        url: `/web/index.php/api/v2/pim/employees`,
        body: {
          ids: [employeeID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
  // API for Add New Candidate
  static addNewCandidate(
    firstName: string,
    middleName: string,
    LastName: string,
    vacancyId: number
  ): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "POST",
        url: "/web/index.php/api/v2/recruitment/candidates",
        body: {
          firstName: `${firstName}${GenericHelper.genericRandomNumber()}`,
          middleName: `${middleName}${GenericHelper.genericRandomNumber()}`,
          lastName: `${LastName}${GenericHelper.genericRandomNumber()}`,
          email: GenericHelper.generateRandomEmail(),
          contactNumber: "55555",
          keywords: null,
          comment: "Note",
          dateOfApplication: GenericHelper.currentDate(),
          consentToKeepData: false,
          vacancyId: vacancyId,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        response.body.data.firstName;
        response.body.data.middleName;
        response.body.data.lastName;
      });
    });
  }
  // API for Delete Candidate
  static deleteCandidate(candidateID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "DELETE",
        url: `/web/index.php/api/v2/recruitment/candidates`,
        body: {
          ids: [candidateID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }

  static shortlistCandidate(CandidateID: any) {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "PUT",
        url: `/web/index.php/api/v2/recruitment/candidates/${CandidateID}/shortlist`,
        body: { note: null },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
  static sheduleInterviewCandidate(
    CandidateID: any,
    interviewerEmpNumber: number,
    interviewName: string
  ) {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "POST",
        url: `/web/index.php/api/v2/recruitment/candidates/${CandidateID}/shedule-interview`,
        body: {
          interviewName: interviewName,
          interviewDate: GenericHelper.currentDate(),
          interviewTime: null,
          note: null,
          interviewerEmpNumbers: [interviewerEmpNumber],
        },
      }).then((response) => {
        console.log(response);
      });
    });
  }
}
