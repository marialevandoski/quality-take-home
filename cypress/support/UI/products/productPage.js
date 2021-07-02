// ***********************************************************
// This file is used for any commands related to a single
// product's page.
// ***********************************************************

// Returns the title of the product
Cypress.Commands.add("getProductTitle", (index) => {
    cy.get("h1.pdp-header-title");
});
