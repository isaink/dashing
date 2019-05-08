const db  = require('../connector.js');  //connecting to the database
const authHelpers = require("./../../auth/helpers");

// GET -> Get info for user logged by email
const getUserbyEmail = (req, res, next) => {
    const gmailId = Number(req.params.id);
    db.one('SELECT * FROM users WHERE "email" = gmail=$1', [gmailId])
    .then((user) => {
        res.status(200).json({
        status: 'Success',
        message: 'Got info for the user logged',
        info: user
        })
    }).catch(err => {
    console.log("Error retrieving info from the user logged: ", err)
    return next(err)
    })
};

// POST -> Create a user  -> USER AUTH
const createUser = (req, res, next) => {
    const hash = authHelpers.createHash(req.body.password);
    db.none(
      "INSERT INTO users (first_name, last_name, password_digest, email, phone_number, type) VALUES (${first_name}, ${last_name}, ${password_digest}, ${email}, ${phone_number}, ${type})",
      { first_name: req.body.first_name, last_name: req.body.last_name, password_digest: hash, email: req.body.email, phone_number: req.body.phone_number, type: req.body.type}
    ).then(() => {
        res.status(200).json({
          message: "Registration successful."
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
          message: err
        });
    });
};

// LOG OUT USER for ** USER AUTH **
const logoutUser = (req, res, next) => {
    req.logout();
    res.status(200).send("log out success");
};

// LOG IN USER for ** USER AUTH **
const loginUser = (req, res)=> {
    res.json(req.user);
};

// IS LOGGED IN for ** USER AUTH **
const isLoggedIn = (req, res) => {
    if (req.user) {
      res.json(req.user);
    } else {
      res.json({ user: null });
    }
};

// PATCH -> Edit user account -> /influers/user/:id
const updateUser = (req, res, next) => {
    db.none('UPDATE users SET first_name=${first_name}, last_name=${last_name}, email=${email}, profile_pic=${profile_pic} WHERE id=${id}', {
        id: Number(req.params.id),
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email: req.body.email,
        profile_pic: req.body.profile_pic,
    }).then(() => {
        res.status(200).json({
            status: 'Success',
            message: 'User Updated'
        })
    }).catch(err => {
        console.log("Error updating user: ", err)
        return next(err)
    })
};

// DELETE -> Delete a user -> `/influers/user/:id
const deleteUser = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.result('DELETE FROM users WHERE id=$1', userId)
    .then((user)=> {
        res.status(200).json({
            status: 'Success',
            message: 'User Deleted'
        })
    }).catch(err => {
        console.log("Error deleting user: ", err)
        return next(err)
    })
};

module.exports = { 
    getUserbyEmail,
    createUser,
    logoutUser,
    loginUser,
    isLoggedIn, 
    updateUser, 
    deleteUser, 
}