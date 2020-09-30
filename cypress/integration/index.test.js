describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("shows the header", () => {
    cy.findByText("Welcome to the challenge")
  })
})
