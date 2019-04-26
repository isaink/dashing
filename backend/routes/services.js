let express = require('express');
let router = express.Router();
const db = require('../db/queries/service-Q');

router.get('/', db.getAllServices );     // http://localhost:3100/services
router.get('/skills', db.getAllSkillsJoinService );     // http://localhost:3100/services/:service_id
router.get('/:service_id', db.getServiceById );     // http://localhost:3100/services/:service_id
router.get('/skills/:service_id', db.getSkillsByServiceId );     // http://localhost:3100/services/:service_id
router.get('/locations/:service_id', db.getLocationsByServiceId );     // http://localhost:3100/services/:service_id

// router.get("/:skill_id", db.getProvidersByServiceAndSkill);

module.exports = router;
