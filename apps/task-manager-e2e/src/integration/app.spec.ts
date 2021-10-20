import { getTitle } from '../support/app.po';

describe('task-manager', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getTitle().contains('Task Manager Login');

    cy.get('p[id="username"]').contains('Username');
    cy.get('input[name="username"]').should('be.empty');

    cy.get('p[id="password"]').contains('Password');
    cy.get('input[name="password"]').should('be.empty');

    cy.get('button[id="loginBtn"]').contains('Login');
  });
});
