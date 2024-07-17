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

Cypress.Commands.add('login', (email, password) => {
    // Visit the login page
    cy.visit('/login'); // Replace with your actual login route
  
    // Fill out the email and password fields
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
  
    // Submit the login form
    cy.get('form').submit();
  
    // Ensure the user is redirected after login
    cy.url().should('not.include', '/login'); // Adjust based on your app's behavior after login
});