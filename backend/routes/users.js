
var express = require('express');
var router = express.Router();

const {
    createUser,
    logoutUser,
    loginUser,
    isLoggedIn,
} = require('../db/queries/user-Q');

const passport = require("../auth/local");
const { loginRequired } = require("./../auth/helpers");

// Routes for user AUTH...
router.post('/new', createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);``
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;






// let express = require('express');
// let router = express.Router();
// const db = require('../db/queries/usersQueries');
//
// const passport = require("../auth/local");
// const { loginRequired } = require("../auth/helpers");
//
//
//
// router.get('/', db.getAllUsers );     // http://localhost:3000/users
// router.get('/singleUser/:user_id', db.getSingleUser);
//
// //auth login:
// // router.post("/new", db.createUser, passport.authenticate("local", {}), db.loginUser);
// router.get("/isLoggedIn", db.isLoggedIn);
//
// router.post("/new", db.createUser);
// router.post("/login", passport.authenticate("local", {}), db.loginUser);
// router.post("/logout", loginRequired, db.logoutUser);
//
// router.delete('/:user_id', db.deleteSingleUser);   // DELETE   http://localhost:3000/users/1
//
// module.exports = router;
