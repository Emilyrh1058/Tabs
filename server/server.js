<<<<<<< HEAD
const express = require('express');
<<<<<<< HEAD
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
=======
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
>>>>>>> develop
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
<<<<<<< HEAD
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
=======
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: authMiddleware 
>>>>>>> develop
});
=======
// const express = require('express');
// const {ApolloServer} = require('apollo-server-express');
// const path = require('path');

// const {typeDefs, resolvers} = require('./schemas');
// const {authMiddleware} = require('./utils/auth');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });
>>>>>>> develop

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

<<<<<<< HEAD
// Serve up static assets
<<<<<<< HEAD
app.use('/images', express.static(path.join(__dirname, '../client/images')));

=======
>>>>>>> develop
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
=======
// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }
>>>>>>> develop

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

<<<<<<< HEAD
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> develop
=======
// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });
>>>>>>> develop
