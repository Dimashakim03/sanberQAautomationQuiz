Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

Cypress.Commands.add('inputUsername', (username) => {
  cy.get('input[name="username"]').clear().type(username);
});

Cypress.Commands.add('inputPassword', (password) => {
  cy.get('input[name="password"]').clear().type(password);
});

Cypress.Commands.add('clickLogin', () => {
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('login', (username, password) => {
  cy.inputUsername(username);
  cy.inputPassword(password);
  cy.clickLogin();
});

Cypress.Commands.add('assertDashboardVisible', () => {
  cy.url().should('include', '/dashboard');
  cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Dashboard');
});

Cypress.Commands.add('assertInvalidCredentialMessage', () => {
  cy.get('.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
});

Cypress.Commands.add('assertRequiredMessage', () => {
  cy.contains('span', 'Required').should('be.visible');
});
