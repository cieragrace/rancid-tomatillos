describe('Main Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',)
      cy.visit('http://localhost:3002/')
    })
  
    it('this should pass', () => {
        cy.get('div')
          .find('.whereFormWillBe')
          .should('have.text', 'Find A Movie:')
    })

    it('Should see the title of the application', () => {
      cy.get('.logoPic')
        .should('have.attr','src','../images/Tomatillo Logo.png')
    })


    
  })


