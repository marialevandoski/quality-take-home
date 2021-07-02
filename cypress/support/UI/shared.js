// ***********************************************************
// This file is for commands that are shared across all or
// many pages in the application
// ***********************************************************

// Searches for the given searchString using the search bar
Cypress.Commands.add("searchByText", (searchString) => {
  cy.get("input[placeholder='Search by Title, Author, Keyword or ISBN']").type(searchString);
  cy.get("button.rhf-search-btn").click();
});
