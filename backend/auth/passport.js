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