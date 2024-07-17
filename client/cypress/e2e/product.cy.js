describe('view products', () => {
    beforeEach(() => {
        cy.login('marco.tulio@ufmg.br', 'password123');
        cy.visit('/estoque/visualizar');
        cy.get('div[name="stock-container"]').first().contains('Ver estoque').click();
    });
  
    it('should display the stock information', () => {
      cy.get('h4').contains('Livraria').should('be.visible');
      cy.get('span').contains('livros').should('be.visible');
      cy.get('p').contains('Descrição').should('be.visible');
    });
  
    it('should display the members', () => {
      cy.get('#members').children().should('have.length.at.least', 1);
    });
  
    it('should allow adding a new product', () => {
      cy.contains('Cadastrar novo produto').click();
      cy.get('input[name="name"]').type('Engenharia de software moderna');
      cy.get('input[name="category"]').type('livro');
      cy.get('textarea[name="description"]').type('Engenharia de Software Moderna.');
      cy.get('input[name="amount"]').type(40000);
      cy.get('input[name="price"]').type(100.90);
      cy.get('button[type="submit"]').click();
  
      cy.get('div[name="prod"]').should('contain', 'Engenharia de software moderna');
    });
  
    it('should allow deleting a product', () => {
      cy.get('div[name="prod"]').first().contains('Excluir').click();
      cy.contains('button', 'Sim, quero exclui-lo!').click();
  
      cy.get('div[name="prod"]').should('have.length.lessThan', 1);
    });
  });
  