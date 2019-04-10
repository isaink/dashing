let express = require('express');
let router = express.Router();
const db = require('../db/queries/portfolio-Q');


router.get('/:provider_id', db.getPortfolioForSingleProvider );


module.exports = router;
