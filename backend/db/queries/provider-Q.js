const { db } = require('../connector.js');


const getAllProviders = (req, res, next) => {
  db.any('SELECT * FROM providers')
  .then(providers => {
    res.status(200).json({
      status: 'success',
      message: 'Got all Providers.',
      providers: providers
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: " 🤣 Na nana na nah. You didn't get your Providers!😝 ",
      err
    })
    next();
  })
}


module.exports = {
  getAllProviders,

}
