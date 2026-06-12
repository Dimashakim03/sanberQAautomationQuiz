describe('OrangeHRM Login Feature', () => {
  let loginData;

  before(() => {
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    cy.visitLoginPage();
    cy.url().should('include', '/auth/login');
  });

  it('TC01 - Login berhasil dengan username dan password valid', () => {
    cy.login(loginData.validUsername, loginData.validPassword);
    cy.assertDashboardVisible();
  });

  it('TC02 - Login gagal dengan username valid dan password salah', () => {
    cy.login(loginData.validUsername, loginData.invalidPassword);
    cy.assertInvalidCredentialMessage();
    cy.url().should('include', '/auth/login');
  });

  it('TC03 - Login gagal dengan username salah dan password valid', () => {
    cy.login(loginData.invalidUsername, loginData.validPassword);
    cy.assertInvalidCredentialMessage();
    cy.url().should('include', '/auth/login');
  });

  it('TC04 - Login gagal saat username kosong dan password diisi', () => {
    cy.inputPassword(loginData.validPassword);
    cy.clickLogin();
    cy.get('input[name="username"]').parents('.oxd-input-group').within(() => {
      cy.contains('span', 'Required').should('be.visible');
    });
    cy.url().should('include', '/auth/login');
  });

  it('TC05 - Login gagal saat username diisi dan password kosong', () => {
    cy.inputUsername(loginData.validUsername);
    cy.clickLogin();
    cy.get('input[type="password"]').parents('.oxd-input-group').within(() => {
      cy.contains('span', 'Required').should('be.visible');
    });
    cy.url().should('include', '/auth/login');
  });

  it('TC06 - Login gagal saat username dan password kosong', () => {
    cy.clickLogin();
    cy.contains('span', 'Required').should('have.length.at.least', 1);
    cy.url().should('include', '/auth/login');
  });

  it('TC07 - Field password harus dalam kondisi masked', () => {
    cy.get('input[type="password"]').should('exist');
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');
  });

  it('TC08 - Login gagal dengan username dan password karakter khusus yang tidak valid', () => {
    cy.login(loginData.specialCharUsername, loginData.specialCharPassword);
    cy.assertInvalidCredentialMessage();
    cy.url().should('include', '/auth/login');
  });
});
