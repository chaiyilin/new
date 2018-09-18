describe("RequestInvite: ", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/");
  });
  it("header", function() {
    cy.getByTestId("entry").should("contain", "Broccoli & Co.");
  });
});
