const express = require('express');
const router = express.Router();
const db = require ('../db/queries/skillsProvider-Q');


router.get('/provider/:id', db.getAllSkillsforProvider );
router.post('/new', db.addSkillForProvider)


module.exports = router;
