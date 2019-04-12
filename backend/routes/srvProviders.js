const express = require('express');
const router = express.Router();
const { getAllProByServ } = require('../db/queries/srvProviders')

router.get("/:id", getAllProByServ)


module.exports = router; 
