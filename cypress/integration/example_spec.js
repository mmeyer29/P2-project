
describe('index', function () {
	it('.should() - assert that <title> is correct', function () {
		// https://on.cypress.io/visit
		cy.visit('http://127.0.0.1:8080')
		cy.title().should('include', 'Star Wars DMV')
		//   ↲               ↲            ↲
		// subject        chainer      value
		cy.get('h1').should('have.text', 'Star Wars DMV')
    cy.get('h2').should('have.text', 'The best registrations in the Galaxy!')
    //cy.get('form').should('contain.text', 'Enter a Vehicle')
	})
});
