//inserir comandos comuns da página de login

class LoginPage {

    form(){
        cy.get('input[data-test-id=usuario]', { timeout: 1000}).should('exist').type('test')
        cy.get('input[data-test-id=password]').should('exist').type('test', {sensitive: true})
    }

    submit(){
        cy.get('button[data-test-id=entrar]').should('exist').click()
    }

}

export default LoginPage;