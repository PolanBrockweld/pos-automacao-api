const alunos = [];

const resolvers = {
  Query: {
    alunos: () => alunos,
    aluno: (_, { id }) => alunos.find(a => a.id === id),
  },
  Mutation: {
    criarAluno: (_, { nome, email }) => {
      const aluno = { id: String(alunos.length + 1), nome, email };
      alunos.push(aluno);
      return aluno;
    },
  },
};

module.exports = resolvers;