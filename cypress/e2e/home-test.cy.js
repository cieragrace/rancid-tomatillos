describe('Main Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',{fixture: cypress/fixtures/homeView.json})
      cy.visit('http://localhost:3000/')
    })
  
    it('should have find a movie:', () => {
        cy.get('div')
          .find('.whereFormWillBe')
          .should('have.text', 'Find A Movie:')
    })

    it('Should see the title of the application', () => {
      cy.get('.logoPic')
        .should('have.attr','src','../images/Tomatillo Logo.png')
    })
    it('Should have a search bar', () => {
        cy.get('#findMovie').should('be.visible')
      })

  })


