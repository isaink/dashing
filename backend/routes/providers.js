var express = require('express');
var router = express.Router();

const {
    getAllUsers,
    getEducationProviders,
    updateUser,
    deleteUser,
    getUserInfo,
    getProvidersBySkill,
    getProvidersByService,

} = require('../db/queries/provider-Q');


//Getting Routes...
router.get('/', getAllUsers);
router.get('/education', getEducationProviders)
router.get('/singleProvider/:id', getUserInfo);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

router.get('/bySkill/:skill_id', getProvidersBySkill);
router.get('/byService/:service_id', getProvidersByService);

module.exports = router;