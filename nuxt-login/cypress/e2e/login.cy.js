describe('Login Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Adjust URL to your login page
    });
  
    it('should display validation error when email is empty', () => {
      cy.get('[data-test="email-input"]').clear();
      cy.get('[data-test="submit-btn"]').click();
      cy.get('[data-test="error-email"]').should('contain.text', 'Email cannot be empty');
    });
  
    it('should display validation error when email is invalid', () => {
      cy.get('[data-test="email-input"]').type('invalid-email');
      cy.get('[data-test="submit-btn"]').click();
      cy.get('[data-test="error-email"]').should('contain.text', 'Please enter a valid email');
    });
  
    // it('should redirect to signup page on valid email submission', () => {
    //   const validEmail = 'test@example.com';
    //   cy.get('[data-test="email-input"]').type(validEmail);
    //   cy.get('[data-test="submit-btn"]').click();
    //   cy.url({ timeout: 10000 }).should('include', '/SignupPage');
    //   cy.url().should('include', `email=${encodeURIComponent(validEmail)}`);
    // });
  
    // it('should navigate to dashboard on Google login click', () => {
    //   cy.get('[data-test="google-login"]').click();
    //   cy.url({ timeout: 10000 }).should('include', '/dashboard'); // Increase timeout
    //   cy.get('[data-test="welcome-text"]').should('contain', 'Welcome to Aladia');
    // });
      // it('should navigate to dashboard on Facebook login click', () => {
      //   cy.get('[data-test="facebook-login"]').click();
      //   cy.url().should('include', '/dashboard');
      //   cy.get('[data-test="welcome-text"]').should('contain', 'Welcome to Aladia');
      // });
    
      // it('should navigate to dashboard on Apple login click', () => {
      //   cy.get('[data-test="apple-login"]').click();
      //   cy.url().should('include', '/dashboard');
      //   cy.get('[data-test="welcome-text"]').should('contain', 'Welcome to Aladia');
      // });
  });
  