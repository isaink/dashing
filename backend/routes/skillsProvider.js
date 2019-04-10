const express = require('express');
const router = express.Router();
const db = require ('../db/queries/skillsProvider-Q');


router.get('/', getAll, db.getAll );


module.exports = router;
