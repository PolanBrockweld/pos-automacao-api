const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

const appPromise = server.start().then(() => {
  server.applyMiddleware({ app });
  return app;
});

module.exports = appPromise;