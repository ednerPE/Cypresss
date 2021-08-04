/// <reference types="cypress" />




it('goToLoginPage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    
    cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    
})


it('Assertions', () => {
        
       cy.get('h1')
       .should('have.text', 'Dashboard')
       cy.get('#MP_link')
       .should('be.enabled')
       .should('be.visible')

})
