const express = require('express');
const router = express.Router();
const db = require ('../db/queries/skillsProvider-Q');


router.get('/', db.getAll );


module.exports = router;
