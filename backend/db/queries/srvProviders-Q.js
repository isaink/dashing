const db = require("../connector");

const getAllProByServ = (req, res, next) => {
  db.any(
    "SELECT DISTINCT users.id AS user_id, users.first_name AS Provider, services.name AS Services, email, avatar, borough, phone_number, website_link FROM users JOIN services_provider ON users.id = services_provider.user_id JOIN services ON services.id = providers.service_id Where services.id=${id}",
    {
      id: Number(req.params.id)
    }
  ).then(data => {
      res.status(200).json({
        status: "Success",
        message: "Got all providers by this service.",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        status: "Failure",
        message: "Failed to get all services by this provider"
      });
    });
};

const getProvBySvcAndBoro = (req, res, next) => {
  db.any(
    "SELECT * FROM users WHERE service_id = ${service_id} AND borough = ${borough}", {
      service_id: Number(req.params.id),
      borough: req.params.location}
  )
  .then(data => {
    res.status(200).json({
      status: "Success",
      message: "Got all providers by this service and borough",
      data: data
    });
  })
  .catch(err => {
    res.status(400).json({
      status: "Failure",
      message: "Failed to get all services by this provider"
    });
  });
};

module.exports = { getAllProByServ, getProvBySvcAndBoro };
