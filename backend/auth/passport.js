const passport = require("passport");

const  db  = require('../db/connector.js');



module.exports = () => {
  passport.serializeUser((user, done) => {
     console.log('serializeUser', user);
    // done(null, user.username);
    done(null, {
      id: user.id,
      username: user.username,
    })
  });

  passport.deserializeUser((user, done) => {
     console.log('deserializeUser', user);

    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: user.username
    })
      .then(user => {
        // done(null, user.username);
        done(null, {
            id: user.id,
            username: user.username,
        })
      })
      .catch(err => {
        done(err, null);
      });
  });
};




// ORIGINAL:
// module.exports = () => {
//   passport.serializeUser((user, done) => {
//      console.log('serializeUser', user);
//     // done(null, user.username);
//     done(null, {
//       id: user.id,
//       username: user.username,
//     })
//   });
//
//   passport.deserializeUser((username, done) => {
//      console.log('deserializeUser', username);
//
//     db.one("SELECT * FROM users WHERE username = ${username}", {
//       username: username.username
//     })
//       .then(user => {
//         // done(null, user.username);
//         done(null, {
//             id: user.id,
//             username: user.username,
//         })
//       })
//       .catch(err => {
//         done(err, null);
//       });
//   });
// };
