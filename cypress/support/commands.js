// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('AddTV', () => {
    cy.contains('Sale Items').click()
    cy.contains('Add to Basket').click()
    cy.get('#option_1').select("No Thanks!")
    cy.get('.small-12 > .button').click()
  })
  Cypress.Commands.add('AddGlasses', () => {
    cy.contains('Sale Items').click()
    cy.get('.button.button.small.postfix')
    .eq(2)
    .click()
    cy.get('#option_2').select("Black")
    cy.get('.small-12 > .button').click()
  })
  Cypress.Commands.add('ViewBasket', () => {
    cy.wait(500)
    cy.get('#basket-summary').click()
    cy.get('#basket-detail > .box-basket-content > .pad > .thinpad-top > .button').click()
  })
  Cypress.Commands.add('VerifyProductAdded', (productName) => {
    cy.contains(productName).should('be.visible')
  })

