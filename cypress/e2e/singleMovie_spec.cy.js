describe('Single Movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/724495')
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", {fixture: '../fixtures/singleMovie.json'})
})

  // it("Should open home page and verify the URL", () => {
  //   cy.visit('http://localhost:3000/movies/724495')
  //   cy.url().should("include", "movies")
  // })

  it('should have a img', () => {
    cy.get('.moviePic')
  })

  it('should have a title', () => {
    cy.get('.title').contains('The Woman King')
  })

  it('should have a unordered list', () => {
    cy.get('.list')
  })

  it('should show an overview of the movie', () => {
    cy.get('.sum').contains('.story of the Agojie')
  })
})

