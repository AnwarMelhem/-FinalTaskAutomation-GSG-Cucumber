import GenericHelper from "../helpers/generic-helper";
 export default class Phase2Apis {
// API for add events
  static addEvents(): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: `/web/index.php/api/v2/claim/events`,
        body: {
          name: `New types${GenericHelper.genericRandomNumber()}`,
          description: "Description",
          status: true,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// API for delete event
  static deleteEvent(eventID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/claim/events`,
        body: {
          ids: [eventID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// API for add expense Types 
  static addExpenseTypes(): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "POST",
        url: `/web/index.php/api/v2/claim/expenses/types`,
        body: {
          name:`New types${GenericHelper.genericRandomNumber()}`,
          description: "Description",
          status: true,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
// API for delete expense Types 
  static deleteExpenseType(typeID: number): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.request({
        method: "DELETE",
        url: `/web/index.php/api/v2/claim/expenses/types`,
        body: {
          ids: [typeID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  }
}
