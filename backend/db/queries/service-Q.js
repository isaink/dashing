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
};

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

// router.get('services/skills/:service_id', db.getSkillsByServiceId );     // http://localhost:3100/services/:service_id
const getSkillsByServiceId = (req, res, next) => {
  let serviceId = parseInt(req.params.service_id);
  db.any(
    // `SELECT songs.id AS song_id, title, img_url, user_id, username, genre_id FROM songs JOIN genres ON songs.genre_id = genres.id JOIN users ON users.id = songs.user_id WHERE users.id = $1 GROUP BY genres.id, users.id, songs.id`, [userId]
    `SELECT *, skills.id AS skill_id, skills.name AS skill_name, services.name AS service_name FROM skills JOIN services ON services.id=skills.service_id WHERE service_id = $1`, [serviceId]
  )
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Skills by service id!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: " 🤣 Na nana na nah. You didn't get your Skills by service id!😝 "
    })
  })
}

// router.get('services/locations/:service_id', db.getSkillsByServiceId );     // http://localhost:3100/services/:service_id
const getLocationsByServiceId = (req, res, next) => {
  let serviceId = parseInt(req.params.service_id);
  db.any(
    // `SELECT *, skills.id AS skill_id, skills.name AS skill_name, services.name AS service_name FROM skills JOIN services ON services.id=skills.service_id WHERE service_id = $1`, [serviceId]
  )
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Skills by service id!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: " 🤣 Na nana na nah. You didn't get your Skills by service id!😝 "
    })
  })
}

const getAllSkillsJoinService = (req, res, next) => {
  db.any("SELECT skills.name AS skill_name, skills.id AS skill_id, skills.*, services.name AS service_name FROM skills JOIN services ON services.id = skills.service_id")
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Got All Skills!"
      });
    })
    .catch(err => next(err));
};





module.exports = {
  getAllServices,
  getServiceById,
  getLocationsByServiceId, //to put location dropdown with skill dropdown
  getSkillsByServiceId,
  getAllSkillsJoinService,
}
