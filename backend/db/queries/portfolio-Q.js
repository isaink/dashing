const  db  = require('../connector.js');


const getPortfolioForSingleProvider = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.many('SELECT img, user_id, body, skill_id FROM portfolio WHERE user_id = $1', [userId])
  .then(portfolio => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You got the Portfolio for this single Provider.',
      body: portfolio
    })
  }).catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: "🤣 Na nana na nah. You didn't get the Portfolio belonging to this Provider!😝 "
    })
    console.log(err);
    next();
  })
}


module.exports = {
  getPortfolioForSingleProvider,

}
