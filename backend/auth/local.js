const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport"); 
const helpers = require("./helpers");

const { db } = require('./../db/connector'); //connecting to the database

passport.use(
  new LocalStrategy({passReqToCallback: true},
    (req, email, password, done) => {
        if(req.originalUrl === "/provider/login"){ 
            return db.one("SELECT * FROM users WHERE email = ${email} AND type='provider' ", {
                email: email
            }).then(provider => {
                if (!helpers.comparePass(password, provider.password_digest)) {
                    return done(null, false);
                } else {
                    return done(null, provider);
                };
            }).catch(err => {
                return done(err);
            });
        } else if (req.originalUrl === "/client/login"){ 
            return db.one("SELECT * FROM users WHERE email = ${email} AND type='client'", {
                email: email
            }).then(client => {
                if (!helpers.comparePass(password, client.password_digest)) {
                    return done(null, false);
                } else {
                    return done(null, client);
                }
            })
            .catch(err => {
                return done(err);
            });       
        }
    })
);

init();

module.exports = passport;