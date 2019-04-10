const express = require('express');
const router = express.Router();
const { getAllSrvByPro } = require('../db/queries/srvProviders')

router.get('/:id', getAllSrvByPro)


module.exports = router; 