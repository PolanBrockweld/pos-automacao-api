const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Aluno {
    id: ID!
    nome: String!
    email: String!
  }

  type Query {
    alunos: [Aluno]
    aluno(id: ID!): Aluno
  }

  type Mutation {
    criarAluno(nome: String!, email: String!): Aluno
  }
`;

module.exports = typeDefs;