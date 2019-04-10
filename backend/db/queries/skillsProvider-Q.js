const { db } = require('../connector.js');


const getAll = (req, res, next) => {
  db.any('SELECT * FROM skills_provider')
    .then(info => {
      res.status(200)
          .json({
            status: 'success',
            message: 'got all info',
            info: info
          })
    })
    .catch(err=>{
      res.status(400)
          .json({
            status: 'error',
            message: 'did not get info'
          })
          next();
    })
}

module.exports = {
getAll
}
