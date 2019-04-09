let express = require('express');
let router = express.Router();
// const db = require('../db/queries/provider-Q');
let { getAllProviders } = require ('../db/queries/provider-Q');


router.get('/', getAllProviders );     // http://localhost:3100/users
// router.post('/', db.postNewProvider);


module.exports = router;
