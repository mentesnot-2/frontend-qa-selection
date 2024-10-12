describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Logs in with valid email and redirects to SignupPage', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="email-input"]').click();
    cy.get('[data-cy="enter-button"] > .gradient').click();
    cy.get('[data-cy="email-input"]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('It should show email cannot empty when email input field is empty', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="enter-button"] > .gradient').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('It should show please enter valid email error when incorrect email format entered', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="email-input"]').clear('j');
    cy.get('[data-cy="email-input"]').type('jdhhhhhhddd');
    cy.get('[data-cy="enter-button"] > .gradient').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('It should take us to signup page when correct email formated is entered', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="email-input"]').clear('us');
    cy.get('[data-cy="email-input"]').type('user@gmail.com');
    cy.get('[data-cy="enter-button"] > .gradient').click();
    /* ==== End Cypress Studio ==== */
  });
});
