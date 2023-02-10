describe('Single Movie', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", {fixture: '../fixtures/singleMovie.json'})
})

  it("Should open home page and verify the URL", () => {
    cy.visit('http://localhost:3000/movies/724495')
    cy.url().should("include", "movies")
  })

  // it('should find have a movie poster displayed', () => {
  //   cy.get('.title').should('have.text', "The Woman King")
  // })
})

