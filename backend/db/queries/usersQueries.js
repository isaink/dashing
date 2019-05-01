const { db } = require('../index.js');

//=======================
const authHelpers = require("../../auth/helpers");

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);
  let queryString = 'INSERT INTO users';

  if ( !(req.body.karma_points) ) {
    queryString += "(username, password_digest) VALUES (${username}, ${password_digest}) RETURNING * "
  } else {
    queryString += "(username, password_digest) VALUES (${username}, ${password_digest}) RETURNING * "
  }

  db.one(
    queryString,
    // "INSERT INTO users (username, password_digest) VALUES (${username}, ${password})",
    { username: req.body.username, password_digest: hash }
  )
    .then((data) => {
      res.status(200).json({
        message: "Registration successful.",
        body: data
      });
    })
    .catch(err => {
       console.log(err, 'Log of err');
      res.status(500).json({
        message: "User already exists."
      });
      //  console.log(err);
      next();
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

//=======================
const getAllUsers = (req, res, next) => {
  db.any(
    'SELECT * FROM users'
  )
  .then(data => {
    res.status(200).json({
      status: 'success',
      users: data,
      message: 'All Users Received!'
    })
  })
  .catch(err => next(err));
}

// http://localhost:3000/users/2
const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.one('SELECT * FROM users WHERE id=$1', [userId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You got your Single User.',
      body: data
    })
  }).catch(err => next(err))
}

// http://localhost:3000/users/1
const deleteSingleUser = ( req, res, next ) => {
  let user_id = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE users.id =$1', [user_id])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'You DELETED this user.'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: 'You did NOT delete this User.'
    })
     console.log(err);
    next();
  })
}


module.exports = { createUser, logoutUser, loginUser, isLoggedIn, getAllUsers, getSingleUser, deleteSingleUser };
// module.exports = { getAllUsers, getSingleUser, getAllPostsBySingleUser, deleteSingleUser };
