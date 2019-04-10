const  db  = require('../connector.js');


const getAllServices = (req, res, next) => {
  db.any('SELECT * FROM services')
  .then(services => {
    res.status(200).json({
      status: 'success',
      message: 'Got all Services.',
      body: services
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: " 🤣 Na nana na nah. You didn't get your Services!😝 ",
      err
    })
    next();
  })
}


const getServiceById = (req, res, next) => {
  let serviceId = parseInt(req.params.service_id);
  db.one('SELECT services.id AS service_id, name FROM services WHERE services.id = $1', [serviceId])
  .then(services => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You got your single Service.',
      body: services
    })
  }).catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: "🤣 Na nana na nah. You didn't get your single Service!😝 "
    })
    console.log(err);
    next();
  })
}



module.exports = {
  getAllServices,
  getServiceById,

}
