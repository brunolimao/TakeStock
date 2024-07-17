describe('register stock', () => {
    beforeEach(() => {
      cy.login('marco.tulio@ufmg.br', 'password123');
      cy.visit('/estoque/cadastro');
    });
  
    it('should display the registration form', () => {
      cy.get('form').should('be.visible');
    });
  
    it('should allow typing into fields', () => {
      cy.get('input[name="name"]').type('Livraria');
      cy.get('textarea[name="description"]').type('Descrição');
      cy.get('input[name="category"]').type('livros');
      
      cy.get('input[name="name"]').should('have.value', 'Livraria');
      cy.get('textarea[name="description"]').should('have.value', 'Descrição');
      cy.get('input[name="category"]').should('have.value', 'livros');
    });
  
    it('should submit the form', () => {
      cy.get('input[name="name"]').type('Livraria');
      cy.get('textarea[name="description"]').type('Descrição');
      cy.get('input[name="category"]').type('livros');
      
      cy.get('button[type="submit"]').click();
      
      cy.url().should('not.include', '/estoque/cadastro');
    });
  });

describe('stock view page', () => {
    
    beforeEach(() => {
        cy.login('marco.tulio@ufmg.br', 'password123');
        cy.visit('/estoque/visualizar'); // Change the path to your actual stocks list route
    });
  
    it('should allow viewing a stock', () => {
      cy.get('div[name="stock-container"]').first().contains('Ver estoque').click();
      
      cy.url().should('include', '/estoque/');
      cy.get('h3').should('be.visible');
    });
  
    it('should allow editing a stock', () => {
        cy.get('div[name="stock-container"]').first().contains('Editar').click();
    
        cy.url().should('include', '/estoque/editar/');
        cy.get('form').should('be.visible');
      });

      it('should open delete confirmation modal', () => {
        cy.get('div[name="stock-container"]').first().contains('Excluir').click();
    
        cy.get('[role="dialog"]').should('be.visible');
        cy.get('[role="dialog"]').contains('Tem certeza que deseja excluir esse estoque?').should('be.visible');
      });

      it('should cancel stock deletion', () => {
        cy.get('div[name="stock-container"]').first().contains('Excluir').click();
    
        cy.get('[role="dialog"]').contains('Não, quero mantê-lo.').click();
    
        cy.get('[role="dialog"]').should('not.exist');
      });
});  