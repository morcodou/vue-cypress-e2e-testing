
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        getByDataCy(name: string): Cypress.Chainable<JQuery<HTMLElement>>;
        getLinkByHref(name: string): Cypress.Chainable<JQuery<HTMLElement>>;
    }
  }
  
  Cypress.Commands.add('getByDataCy', (name) => cy.get(`[data-cy=${name}]`));
  Cypress.Commands.add('getLinkByHref', (link) => cy.get(`a[href="${link}"]`));
  
  //
  // -- This is a child command --
  // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
  
  
  // ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

