describe("Barnes & Noble UI Search Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.barnesandnoble.com");
  });

  it("TC#1 - Verifies results are returned for valid search", () => {
    const searchText = "Introduction to Software Testing";
    cy.searchByText(searchText);
    cy.get("h1.result-show > span").contains(searchText);
    cy.get("div.product-shelf-grid").should("be.visible").and("be.not.empty");
  });

  it("TC#2 - Verifies empty page state when there are no search results", () => {
    cy.searchByText("asdfasdfasdfasdfasdfasdf");
    cy.get("div.no-search-msg > p").contains("Sorry, we couldn't find what you're looking for.");
  });
});
