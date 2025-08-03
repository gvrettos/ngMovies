describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('nav').contains('Home');
    cy.get('nav').contains('Movies');
    cy.get('nav').contains('Admin');
    cy.get('.content').find('h2').contains('James Bond movies')
    cy.get('.content').find('h3').contains('Highest rated movies')
  })
})
