describe('Login Form', () => {
    beforeEach(() => {
      cy.visit('/'); // Adjust URL to your login page
    });
  
    it('should display validation error when email is empty', () => {
      cy.get('[data-cy="email-input"]').clear();
      cy.get('[data-cy="submit-btn"]').click();
      cy.get('[data-cy="error-email"]').should('contain.text', 'Email cannot be empty');
    });
  
    it('should display validation error when email is invalid', () => {
      cy.get('[data-cy="email-input"]').type('invalid-email');
      cy.get('[data-cy="submit-btn"]').click();
      cy.get('[data-cy="error-email"]').should('contain.text', 'Please enter a valid email');
    });
  
    it('should redirect to signup page on valid email submission', () => {
      const validEmail = 'test@example.com';
      cy.get('[data-cy="email-input"]').type(validEmail);
      cy.get('[data-cy="submit-btn"]').click();
      cy.url().should('include', '/SignupPage');
      cy.url().should('include', `email=${encodeURIComponent(validEmail)}`);
    });
  
    it('should navigate to dashboard on Google login click', () => {
        cy.get('[data-cy="google-login"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('[data-cy="welcome-text"]').should('contain', 'Welcome to Aladia');
      });
    
      it('should navigate to dashboard on Facebook login click', () => {
        cy.get('[data-cy="facebook-login"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('[data-cy="welcome-text"]').should('contain', 'Welcome to Aladia');
      });
    
      it('should navigate to dashboard on Apple login click', () => {
        cy.get('[data-cy="apple-login"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('[data-cy="welcome-text"]').should('contain', 'Welcome to Aladia');
      });
  });
  