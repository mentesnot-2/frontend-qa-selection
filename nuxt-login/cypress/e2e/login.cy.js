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
  
    it('should show an error if the email field is empty and submit button is clicked', () => {
      cy.get('button[data-test="submit-btn"]').click();
      cy.get('p[data-test="error-email"]').should('contain.text', 'Email cannot be empty');
    });
  
    it('should show an error if an invalid email is entered', () => {
      cy.get('input[data-test="email-input"]').type('invalid-emailllllll');
      cy.get('button[data-test="submit-btn"]').click();
      cy.get('p[data-test="error-email"]').should('contain.text', 'Please enter a valid emai');
    });
  

  });
  