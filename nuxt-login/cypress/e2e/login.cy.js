describe('Login Page', () => {
    it('Logs in with valid credentials', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="email-input"]').should('be.visible').type('test@example.com');
      cy.get('[data-cy="submit-button"]').click();
      cy.url().should('include', '/');
    });
  
    it('Shows social login options', () => {
      cy.visit('http://localhost:3000/');
      cy.get('button').contains('Continue with Google').should('be.visible');
      cy.get('button').contains('Continue with Facebook').should('be.visible');
      cy.get('button').contains('Continue with Apple').should('be.visible');
    });
  });
  