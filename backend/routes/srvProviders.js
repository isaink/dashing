const express = require('express');
const router = express.Router();
const { getAllProByServ, getProvBySvcAndBoro} = require('../db/queries/srvProviders-Q')

router.get("/:id", getAllProByServ)
router.get("/:id/:location", getProvBySvcAndBoro)


module.exports = router;
