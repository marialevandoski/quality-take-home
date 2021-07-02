// ***********************************************************
// This support/index.js is processed and
// loaded automatically before your test files.
//
// For each new support file added, add a line here to import
// those commands for use in your tests.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./UI/shared";
import "./UI/books/bestsellers";
import "./UI/products/productPage";

// returning false here prevents Cypress from failing the test
Cypress.on("uncaught:exception", () => {
  return false;
});
