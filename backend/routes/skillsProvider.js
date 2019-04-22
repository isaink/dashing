const express = require('express');
const router = express.Router();
const db = require('../db/queries/service-Q');


router.get('/provider/:id', getAllSkillsforProvider );
router.post('/new', db.addSkillForProvider)


module.exports = router;
