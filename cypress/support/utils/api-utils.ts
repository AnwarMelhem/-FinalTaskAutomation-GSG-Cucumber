import { ICreateAddJobTitlePayload } from "../apis/payload/add-job-title-payload";
import { ICreateAddJobTitleResponse } from "../apis/response/add-job-title-response";
import { ICreateLocationPayload } from "../apis/payload/add-location-payload";
import { ICreateLocationResponse } from "../apis/response/add-location-response";
import { ICreateEmployeePayload } from "../apis/payload/add-employee-payload";
import { ICreateEmployeeResponse } from "../apis/response/add-employee-response";
import { IDeleteEmployeePayload } from "../apis/payload/delete-employee-payload";
import { IDeleteEmployeeResponse } from "../apis/response/delete-employee-response";
import { ICreateLoginDetailsPayload } from "../apis/payload/create-login-details-payload";
import { ICreateLoginDetailsResponse } from "../apis/response/create-login-details-response";
// this utils for API
declare global {
  namespace Cypress {
    interface Chainable {
      addJobTitle: (
        requestURL: string,
        userPayload: ICreateAddJobTitlePayload
      ) => Chainable<ICreateAddJobTitleResponse>;
      addLocation: (
        requestURL: string,
        userPayload: ICreateLocationPayload
      ) => Chainable<ICreateLocationResponse>;
      addEmployee: (
        requestURL: string,
        userPayload: ICreateEmployeePayload
      ) => Chainable<ICreateEmployeeResponse>;
      deleteEmployee: (
        requestURL: string,
        userPayload: IDeleteEmployeePayload
      ) => Chainable<IDeleteEmployeeResponse>;
      createLoginDetails: (
        requestURL: string,
        userPayload: ICreateLoginDetailsPayload
      ) => Chainable<ICreateLoginDetailsResponse>;
    }
  }
}
// Command for add job title
Cypress.Commands.add(
  "addJobTitle",
  (
    requestURL: string,
    userPayload: ICreateAddJobTitlePayload
  ): Cypress.Chainable<any> => {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: requestURL,
        body: userPayload,
        headers: {
          "Content-Type": "application/json",
        },
      }).its("body");
    });
  }
);
// Command for add location
Cypress.Commands.add(
  "addLocation",
  (
    requestURL: string,
    userPayload: ICreateLocationPayload
  ): Cypress.Chainable<any> => {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: requestURL,
        body: userPayload,
        headers: {
          "Content-Type": "application/json",
        },
      }).its("body");
    });
  }
);
// Command for add employee
Cypress.Commands.add(
  "addEmployee",
  (
    requestURL: string,
    userPayload: ICreateEmployeePayload
  ): Cypress.Chainable<any> => {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: requestURL,
        body: userPayload,
        headers: {
          "Content-Type": "application/json",
        },
      }).its("body");
    });
  }
);
// Command for delete employee
Cypress.Commands.add(
  "deleteEmployee",
  (
    requestURL: string,
    userPayload: IDeleteEmployeePayload
  ): Cypress.Chainable<any> => {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: requestURL,
        body: userPayload,
        headers: {
          "Content-Type": "application/json",
        },
      }).its("body");
    });
  }
);
// Command for create login details
Cypress.Commands.add(
  "createLoginDetails",
  (
    requestURL: string,
    userPayload: ICreateLoginDetailsPayload
  ): Cypress.Chainable<any> => {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: requestURL,
        body: userPayload,
        headers: {
          "Content-Type": "application/json",
        },
      }).its("body");
    });
  }
);
