const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening');
});

// Express is an HTTP server
// It receives and processes requests, sending a response

// With GraphQL, express will pass data to GraphQL, which then directs itself
// back to express, who sends it to the client
