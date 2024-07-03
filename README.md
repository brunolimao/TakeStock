# TakeStock - Escopo do Sistema

Esse sistema fornece uma interface para que usuários consigam cadastrar e gerenciar produtos do seu estoque. O software conta como suas principais funcionalidades:
- Login
- Criar produtos
- Gerenciar o estoque
- Análises/estatísticas do estoque
- Compartilhamento de estoque entre membros de uma equipe

# Membros da equipe e papel

- Bruno Lima de Oliveira - Back
- Guilherme Drumond Rosa - Back
- Ana Luisa Mendes dos Santos - Front
- Maria Clara de Arruda Ferreira - Front

# Tecnologias principais

- Node
- MySQL
- React
- Express
- Sequelize

# Backlog do Produto

- Como usuário, eu gostaria de me cadastrar
- Como usuário, eu gostaria de fazer login
- Como usuário, eu gostaria de cadastrar, editar, deletar e visualizar um estoque 
- Como dono de um estoque, eu gostaria de cadastrar, visualizar, editar e deletar um produto
- Como dono de um estoque, eu gostaria de convidar e remover usuários do meu estoque
- Como usuário, eu gostaria de filtrar os produtos de um estoque por categoria
- Como usuário, eu gostaria de visualizar análises/estatísticas do estoque  
- Como usuário, eu gostaria de aceitar ou recusar convites para um estoque
- Como dono de um estoque, eu gostaria de gerenciar permissões de visualização de análises/estatísticas do estoque  
- Como usuário, gostaria de baixar o estoque em csv
- Como usuário, gostaria de baixar as análises/estatísticas do estoque em pdf
- Como usuário, gostaria de deixar uma anotação sobre os produtos do estoque
- Como usuário, gostaria de sair do estoque
- Como usuário, eu gostaria de avaliar produtos do estoque
- Como usuário, eu gostaria de favoritar os produtos do estoque

# Backlog da Sprint

1- Como usuário, eu gostaria de me cadastrar
- Instalar MySQL e criar primeiras tabelas [Bruno]
- Instalar Node.js, Express, Sequelize [Guilherme]
- Instalar React [Ana]
- Criar lógica de cadastrar [Bruno]
- Criar a tela de cadastrar [Maria]
  
2- Como usuário, eu gostaria de fazer login
- Criar lógica de login [Guilherme]
- Criar lógica de perfil [Bruno]
- Criar a tela de login [Ana]
- Criar a tela de perfil [Maria]
  
3- Como usuário, eu gostaria de cadastrar, editar, deletar e visualizar um estoque
- Criar lógica de cadastrar um estoque [Guilherme]
- Criar lógica de editar um estoque [Bruno]
- Criar lógica de deletar um estoque [Guilherme]
- Criar lógica de visualizar um estoque [Bruno]
- Criar a tela de cadastro [Ana]
- Criar a tela de edição [Maria] 
- Criar a tela de deletar [Ana]
- Criar a tela de visualização [Maria]
  
4- Como dono de um estoque, eu gostaria de cadastrar, editar, visualizar e deletar um produto
- Criar lógica de cadastrar um produto [Guilherme]
- Criar lógica de editar um produto [Bruno]
- Criar lógica de deletar um produto [Guilherme]
- Criar lógica de visualizar um produto [Bruno]
- Criar a tela de cadastro [Maria]
- Criar a tela de edição [Ana]
- Criar a tela de deletar [Maria]
- Criar a tela de visualização [Ana] 
  
5- Como dono de um estoque, eu gostaria de convidar e remover usuários do meu estoque
- Criar lógica de convite de usuários [Guilherme]
- Criar lógica de remover usuários [Bruno]
- Criar a tela de gerenciamento de usuários [Ana]
  
6- Como usuário, eu gostaria de aceitar ou recusar convites para um estoque
- Criar lógica de aceitar convites para um estoque [Guilherme]
- Criar lógica de recusar convites para um estoque [Bruno]
- Criar a tela de gerenciamento de convites [Maria]
  
7- Como usuário, eu gostaria de filtrar os produtos de um estoque por categoria
- Criar lógica de filtro por categoria [Guilherme]
- Adaptar tela para filtrar por categoria [Ana]
  
8- Como usuário, eu gostaria de visualizar análises/estatísticas do estoque
- Criar lógica de análises/estatísticas do estoque [Bruno]
- Criar a tela de análises/estatísticas do estoque [Maria] 

# Arquitetura Hexagonal

Adotamos uma arquitetura hexagonal para que o domínio fique limpo de tecnologia, ou seja, ele não conhece os detalhes de implementação do banco e coisas do tipo. Para isso, criamos um diretório adaptors que contém os adaptadores de todas as entidades do sistema. Dessa forma, todas as rotas consomem as funções de adaptors para realizarem suas funcionalidades

# Backlog do Sprint (nova versão)

1- Como usuário, eu gostaria de me cadastrar
- Instalar MySQL e criar primeiras tabelas [Bruno]
- Instalar Node.js, Express, Sequelize [Guilherme]
- Criar lógica de cadastrar [Bruno]

2- Como usuário, eu gostaria de fazer login
- Criar lógica de login [Guilherme]
- Criar lógica de perfil [Bruno]

3- Como usuário, eu gostaria de cadastrar, editar, deletar e visualizar um estoque
- Criar lógica de cadastrar um estoque [Guilherme]
- Criar lógica de editar um estoque [Bruno]
- Criar lógica de deletar um estoque [Guilherme]
- Criar lógica de visualizar um estoque [Bruno]

4- Como dono de um estoque, eu gostaria de cadastrar, editar, visualizar e deletar um produto
- Criar lógica de cadastrar um produto [Guilherme]
- Criar lógica de editar um produto [Bruno]
- Criar lógica de deletar um produto [Guilherme]
- Criar lógica de visualizar um produto [Bruno]

5- Como dono de um estoque, eu gostaria de convidar e remover usuários do meu estoque
- Criar lógica de convite de usuários por email [Guilherme]
- Criar lógica de remover usuários [Bruno]

6- Como usuário, eu gostaria de aceitar ou recusar convites para um estoque
- Criar lógica de aceitar convites para um estoque [Guilherme]
- Criar lógica de recusar convites para um estoque [Bruno]

7- Como usuário, eu gostaria de filtrar os produtos de um estoque por categoria
- Criar lógica de filtro por categoria [Guilherme]

8- Como usuário, eu gostaria de visualizar análises/estatísticas do estoque
- Criar lógica de análises/estatísticas do estoque [Bruno]
  
