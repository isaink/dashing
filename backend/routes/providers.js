var express = require('express');
var router = express.Router();

const {
    getAllProviders,
    getProviderInfo,
    getProviderServices,
    // createProvider,
    // logoutProvider,
    // loginProvider,
    // isLoggedIn,
    updateProvider,
    deleteProvider

} = require('../db/queries/provider-Q');

// const passport = require("../auth/local");
// const { loginRequired } = require("./../auth/helpers");

//Getting Routes...
router.get('/', getAllProviders);
router.get('/:id', getProviderInfo);
router.get('/services/:id', getProviderServices)
router.patch('/:id', updateProvider);
router.delete('/:id', deleteProvider);

// Routes for user AUTH...

// router.post('/new', createProvider);
// router.post("/login", passport.authenticate("local", {}), loginProvider);``
// router.get("/isLoggedIn", isLoggedIn);
// router.post("/logout", loginRequired, logoutProvider);

module.exports = router;
