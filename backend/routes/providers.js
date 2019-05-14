var express = require('express');
var router = express.Router();

const {
    getAllUsers,
    getEducationProviders,
    getUserInfo,
    // getProviderServices,
    // createProvider,
    // logoutProvider,
    // loginProvider,
    // isLoggedIn,
    updateUser,
    deleteUser,
    getProvidersBySkill,
    getProvidersByService,

} = require('../db/queries/provider-Q');

// const passport = require("../auth/local");
// const { loginRequired } = require("./../auth/helpers");

//Getting Routes...
router.get('/', getAllUsers);
router.get('/education', getEducationProviders)
router.get('/singleProvider/:id', getUserInfo);
// router.get('/services/:id', getProviderServices)
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

router.get('/bySkill/:skill_id', getProvidersBySkill);
router.get('/byService/:service_id', getProvidersByService);


// Routes for user AUTH...

// router.post('/new', createProvider);
// router.post("/login", passport.authenticate("local", {}), loginProvider);``
// router.get("/isLoggedIn", isLoggedIn);
// router.post("/logout", loginRequired, logoutProvider);

module.exports = router;
