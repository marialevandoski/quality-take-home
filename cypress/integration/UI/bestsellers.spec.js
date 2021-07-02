describe("Barnes & Noble UI Bestsellers Tests", () => {
  before(() => {
    cy.visit("https://www.barnesandnoble.com/b/books/_/N-1fZ29Z8q8");
  });

  it("TC#3 - Verifies user can select top item from B&N Top 100 and go to its product page", () => {
    cy.get("h1 > span").contains("B&N Top 100: Book Bestsellers");
    cy.getBestsellerTitleByIndex(1).invoke('text').then((bestseller) => {
      cy.selectItemFromTop100(1);
      cy.getProductTitle().invoke('text').then((productTitle) => {
        expect(bestseller).to.equal(productTitle);
      });
    });
  });
});
