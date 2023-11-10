// This file for shared helper in system
export default class SharedHelper {
  // Extract ID from URL
  static extractIDFromURL() {
    return new Promise((resolve, reject) => {
      cy.url().then((url) => {
        const id = url.split("/").pop();
        cy.log(`The ID from redirected URL is: ${id}`);
        resolve(id); // Resolve the promise with the extracted ID
      });
    });
  }

  static checkLoadingSpinnerIsExist(isExist: boolean) {
    cy.get(".oxd-loading-spinner-container").should(
      isExist ? "exist" : "not.exist"
    );
  }
// Validate Table Row Function
  static validateTableRow(columnHeader: string, expectedValue: any) {
    cy.get(".oxd-table-header")
      .contains(columnHeader)
      .invoke("index")
      .then((columnIndex) => {
        cy.get(".oxd-table-body")
          .find(".oxd-table-card")
          .each((elem) => {
            cy.wrap(elem)
              .find(".oxd-table-row.oxd-table-row--with-border")
              .find(".oxd-table-cell")
              .eq(columnIndex)
              .invoke("text")
              .then((cell) => {
                if (cell.trim() == expectedValue.trim()) {
                  expect(
                    cell.trim(),
                    `Found the row with ${columnHeader}= ${expectedValue}`
                  ).to.equal(expectedValue);
                }
              });
          });
      });
  }
}
