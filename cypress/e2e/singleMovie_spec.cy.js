describe('Single Movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/724495')
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", {fixture: '../fixtures/singleMovie.json'})
})

  it("Should open home page and verify the URL", () => {
    cy.visit('http://localhost:3000/movies/724495')
    cy.url().should("include", "movies")
  })

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
    cy.get('.sum').contains('story of the Agojie')
  })

  it('should have a release date', () => {
    cy.get('.released').contains('2022-09-15')
  })

  it('should list the genres for the selected movie', () => {
    cy.get('.genre').contains('Drama')
  })

  it('should show the movies runtime', () => {
    cy.get('.duration').contains('135')
  })

  it('should display the films tagline', () => {
    cy.get('.tagLine').contains('Her reign begins')
  })

  it('should have a button to take the user back home', () => {
    cy.get('.homeButton').contains('Back to Home')
  })
})

