describe('login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');
  });

  it('should allow typing into email and password fields', () => {
    cy.get('input[name="email"]').type('marco.tulio@ufmg.br');
    cy.get('input[name="password"]').type('password123');
    
    cy.get('input[name="email"]').should('have.value', 'marco.tulio@ufmg.br');
    cy.get('input[name="password"]').should('have.value', 'password123');
  });

  it('should submit the form', () => {
    cy.get('input[name="email"]').type('marco.tulio@ufmg.br');
    cy.get('input[name="password"]').type('password123');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('not.include', '/login');
  });
});
