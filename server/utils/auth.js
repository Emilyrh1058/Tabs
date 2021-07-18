// const jwt = require('jsonwebtoken');

// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

<<<<<<< HEAD
module.exports = {
<<<<<<< HEAD
  authMiddleware: function ({ req }) {
=======
  authMiddleware: function({ req }) {
>>>>>>> develop
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
<<<<<<< HEAD
      token = token.split(' ').pop().trim();
=======
      token = token
        .split(' ')
        .pop()
        .trim();
>>>>>>> develop
    }
=======
// module.exports = {
//   authMiddleware: function({ req }) {
//     // allows token to be sent via req.body, req.query, or headers
//     let token = req.body.token || req.query.token || req.headers.authorization;

//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token
//         .split(' ')
//         .pop()
//         .trim();
//     }
>>>>>>> develop

//     if (!token) {
//       return req;
//     }

//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log('Invalid token');
//     }

<<<<<<< HEAD
    return req;
  },
<<<<<<< HEAD
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

//regex for phone ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
=======
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
>>>>>>> develop
=======
//     return req;
//   },
//   signToken: function({ username, email, _id }) {
//     const payload = { username, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   }
// };
>>>>>>> develop
