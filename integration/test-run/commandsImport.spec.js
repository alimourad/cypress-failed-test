/// <reference types="cypress" />

import beneficiarioFactory from '../../factories/beneficiarioFactory'
import loginPage from '../../pages/loginPage'

describe('not working', () => {

    let url = 'https://qualivendas.qualicorp.com.br/#/login'
    var loginpage = new loginPage()

    it('first test case',() => {

        var beneficiario = beneficiarioFactory.dadosBeneficiario()

        cy.visit(url)

        //ACEITAR COOKIES
        cy.log('LGPD - COOKIES')
        cy.get('button[data-test-id=lgpd-aceite]').click()

        //LOGIN
        cy.log('LOGIN')
        loginpage.form()
        loginpage.submit()
        
        cy.get('button[data-test-id=criar-proposta]', {timeout: 10000, log: false }).should('be.visible')

        cy.get('input[data-test-id=test]').type(beneficiario.cpf)
        cy.get('input[data-test-id=test]').type(beneficiario.email)
        cy.get('input[data-test-id=test]').type(beneficiario.name)
        cy.get('input[data-test-id=test]').type(beneficiario.celular)


    })

})
