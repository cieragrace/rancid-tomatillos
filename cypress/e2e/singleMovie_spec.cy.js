describe('Single Movie', () => {
  // let movies
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", {fixture: '../fixtures/singleMovie.json'})
  
    // cy.get('.card').first().click()
    // cy.visit('http://localhost:3000/')
})

  it("Should open home page and verify the URL", () => {
    cy.visit('http://localhost:3000/movies/724495')
    cy.url().should("include", "movies")
  })

  it('should find have a movie poster displayed', () => {
    cy.get('h3').should('include', "release_date")
  })
})


  // it('should render the title', () => {
  //   cy.get('#main').click()
  // })