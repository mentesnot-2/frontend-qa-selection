describe('Login Page', () => {
  it('Logs in with valid email and redirects to SignupPage', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="email-input"]').type('test@example.com');
    cy.get('[data-cy="enter-button"]').click();
    cy.url({ timeout: 10000 }).should('include', '/SignupPage');
  });
  it('Shows error when email is empty', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="enter-button"]').click();
    cy.get('[data-cy="error-email"]').should('contain.text', 'Email cannot be empty');
  });
  it('Shows error for invalid email format', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="email-input"]').type('invalidemail');
    cy.get('[data-cy="enter-button"]').click();
    cy.get('[data-cy="error-email"]').should('contain.text', 'Please enter a valid email');
  });
  it('Shows social login options', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').contains('Continue with Google').should('be.visible');
    cy.get('button').contains('Continue with Facebook').should('be.visible');
    cy.get('button').contains('Continue with Apple').should('be.visible');
  });
});
