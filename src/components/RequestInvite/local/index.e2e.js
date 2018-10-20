describe("RequestInvite: ", function() {
  beforeEach(function() {
    cy.visit("/");
  });
  it("header", function() {
    cy.getByTestId("entry").should("contain", "Broccoli & Co.");
  });
});
