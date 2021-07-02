// ***********************************************************
// This file is used for any commands related to Bestsellers section under Books.
// ***********************************************************

// Returns the title of the Bestseller at the given index
Cypress.Commands.add("getBestsellerTitleByIndex", (index) => {
  cy.get("div.count").contains(index).parents("div.topX-row").find("h3.product-info-title > a");
});

// Select item from B&N Top 100 Bestsellers by the given index
Cypress.Commands.add("selectItemFromTop100", (index) => {
  cy.get("div.count").contains(index).parents("div.topX-row").find("h3.product-info-title > a").click({ force: true });
});
