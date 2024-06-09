import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import {readFile} from 'node:fs/promises';
import { authMiddleware, handleLogin } from './auth.js';
import { resolvers } from './resolver.js'

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

const typeDefs = await readFile('./schema.graphql', 'utf8')

const apolloSever = new ApolloServer({typeDefs, resolvers})
await apolloSever.start();
app.use('/graphql', apolloMiddleware(apolloSever));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQl endpoint: http://localhost:${PORT}/graphql`)
});
