/// <reference types="cypress" />

describe("Form submission errors", () => {
    it("Validate" ,() => {       
        cy.visit('https://demo.cubecart.com/cc6/index.php');
        cy.contains('Register');
        cy.get('[href="https://demo.cubecart.com/cc6/register.html"]').click()
        cy.get('#register_submit').click()
        cy.log("Recaptcha shown at this step");        
    })

    it("Add TV to Basket", () => {
        cy.visit('https://demo.cubecart.com/cc6/index.php');
        cy.AddTV()
        cy.ViewBasket()
        cy.VerifyProductAdded('Sony KDL-32HX753 3D TV')     
    })

    it('Add two items to Basket',() => {
        cy.visit('https://demo.cubecart.com/cc6/index.php');
        cy.AddTV()
        cy.AddGlasses()
        cy.ViewBasket()
        cy.VerifyProductAdded('Sony KDL-32HX753 3D TV')  
        cy.VerifyProductAdded('3D Glasses TDG-BR200/W')  
    })

    it('Verify grand total',() => {
        cy.visit('https://demo.cubecart.com/cc6/index.php');
        cy.AddTV()
        cy.AddGlasses()
        cy.ViewBasket()
        cy.get('tfoot > :nth-child(3) > .text-right').should('contain.text',"£112.79") //GST
        cy.get(':nth-child(4) > .text-right').should('contain.text', "£676.74") //Total
    })
})