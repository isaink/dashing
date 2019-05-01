var express = require('express');
var router = express.Router();

const {
    getAllProviders,
    getAllEducationProviders,
    getProviderInfo,
    getProviderServices,
    // createProvider,
    // logoutProvider,
    // loginProvider,
    // isLoggedIn,
    updateProvider,
    deleteProvider,
    getProvidersBySkill,
    getProvidersByService,

} = require('../db/queries/provider-Q');

// const passport = require("../auth/local");
// const { loginRequired } = require("./../auth/helpers");

//Getting Routes...
router.get('/', getAllProviders);
router.get('/education', getAllEducationProviders)
router.get('/:id', getProviderInfo);
router.get('/services/:id', getProviderServices)
router.patch('/:id', updateProvider);
router.delete('/:id', deleteProvider);

router.get('/bySkill/:skill_id', getProvidersBySkill);
router.get('/byService/:service_id', getProvidersByService);


// Routes for user AUTH...

// router.post('/new', createProvider);
// router.post("/login", passport.authenticate("local", {}), loginProvider);``
// router.get("/isLoggedIn", isLoggedIn);
// router.post("/logout", loginRequired, logoutProvider);

module.exports = router;
