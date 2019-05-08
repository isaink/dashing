const passport = require("passport");
const { db } = require('../db/connector'); //connecting to the database

module.exports = () => {
    passport.serializeUser((user, done) => {
        delete user.password_digest //removing the password digest
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        db.one("SELECT * FROM users WHERE email = ${email}", {
            email: user.email
        }).then(user => {
            delete user.password_digest //removing the password digest
            done(null, user);
        }).catch(err => {
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



// XAV ME:
// const passport = require("passport");
// const  db  = require('../db/connector.js');
//
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
//   passport.deserializeUser((user, done) => {
//      console.log('deserializeUser', user);
//
//     db.one("SELECT * FROM users WHERE username = ${username}", {
//       username: user.username
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
