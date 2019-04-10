let express = require('express');
let router = express.Router();
const db = require('../db/queries/service-Q');
// let { getAllServices } = require ('../db/queries/provider-Q');

router.get('/', db.getAllServices );     // http://localhost:3100/services
router.get('/:service_id', db.getServiceById );     // http://localhost:3100/services/:service_id


module.exports = router;
