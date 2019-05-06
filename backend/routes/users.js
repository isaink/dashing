let express = require('express');
let router = express.Router();
const db = require('../db/queries/usersQueries');

const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");



router.get('/', db.getAllUsers );     // http://localhost:3000/users
router.get('/singleUser/:user_id', db.getSingleUser);

//auth login:
// router.post("/new", db.createUser, passport.authenticate("local", {}), db.loginUser);
router.get("/isLoggedIn", db.isLoggedIn);

router.post("/new", db.createUser);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.post("/logout", loginRequired, db.logoutUser);

router.delete('/:user_id', db.deleteSingleUser);   // DELETE   http://localhost:3000/users/1

module.exports = router;






// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
