const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'registration',
  password: 'mypass',
  port: 5432, // Default PostgreSQL port
});

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    date: String!
    month:String!
    year:String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(username: String!, password: String! , date: String! month: String , year:String:): User!
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      client.release();

      return result.rows;
    },
  },
  Mutation: {
    createUser: async (_, { username, password , date , month , year}) => {
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO users (username, password,day, month , year) VALUES ($1, $2 ,$3 , $4 , $5) RETURNING *',
        [username, password, day , month , year]
      );
      client.release();

      return result.rows[0];
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const port = 4000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
  });
};

startServer().catch((err) => console.error('Error starting server:', err));