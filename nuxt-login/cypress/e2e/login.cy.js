describe('Login Page', () => {

    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('http://localhost:3000'); // Adjust URL as needed
      cy.wait(5000);
    });
  
    it('should display the login form correctly', () => {
      // Check if the logo is present
      cy.get('img[alt="Aladia Logo"]').should('be.visible');
  
      // Check if the email input and submit button are visible
      cy.get('input[data-test="email-input"]').should('be.visible');
      cy.get('button[data-test="submit-btn"]').should('be.visible');
  
      // Check if the third-party login buttons are visible
      cy.get('img[alt="Google"]').should('be.visible');
      cy.get('img[alt="Facebook"]').should('be.visible');
      cy.get('img[alt="Apple"]').should('be.visible');
    });
  
    // it('should show an error if the email field is empty and submit button is clicked', () => {
    //   cy.get('button[data-test="submit-btn"]').click();
    //   cy.get('p[data-test="error-email"]').should('contain.text', 'Email cannot be empty');
    // });
  
    it('should show an error if an invalid email is entered', () => {
      cy.get('input[data-test="email-input"]').type('invalid-emaillll');
      cy.get('button[data-test="submit-btn"]').click();
      cy.get('p[data-test="error-email"]').should('contain.text', 'Please enter a valid emai');
    });
  
    // it('should not show an error if a valid email is entered', () => {
    //   cy.get('input[data-test="email-input"]').type('test@example.com');
    //   cy.get('button[data-test="submit-btn"]').click();
    // cy.wait(5000);
  
    //   // Ensure redirection to the Signup page with the email passed as query param
    //   cy.url().should('include', '/SignupPage');
    //   cy.url().should('include', 'email=test%40example.com');
    // });
  
    // it('should redirect to dashboard on Google login button click', () => {
    //   cy.get('button[data-test="google-login"]').click();
    //   cy.url().should('include', '/dashboard');
    // });
  
    // it('should redirect to dashboard on Facebook login button click', () => {
    //   cy.get('button[data-test="facebook-login"]').click();
    //   cy.url().should('include', '/dashboard');
    // });
  
    // it('should redirect to dashboard on Apple login button click', () => {
    //   cy.get('button[data-test="apple-login"]').click();
    //   cy.url().should('include', '/dashboard');
    // });
  });
  