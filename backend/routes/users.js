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