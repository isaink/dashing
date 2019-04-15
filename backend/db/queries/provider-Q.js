const  db  = require('../connector.js');

// GET --> Get all provider -->  /providers
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
};


// POST -> Create a Provider [USER AUTH]  ->  /provider/:id
const createProvider = (req, res, next) => {
  // const hash = authHelpers.createHash(req.body.password);
  db.none('INSERT INTO providers ( name, email, password)' +
  ' VALUES(${name}, ${email}, ${password} )',
  { name: req.body.name, email: req.body.email, password: req.body.password})
  .then(() => {
      res.status(200).json({
          status: 'Success',
          message: "Registration successful."
      })
  }).catch(err => {
    res.status(500)
    .json({
      message: "Error adding a new provider 😝: ",
      err
    });
  });
};

// LOG OUT USER for ** USER AUTH **
const logoutProvider = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
};

// LOG IN USER for ** USER AUTH **
const loginProvider = (req, res)=> {
  res.json(req.user);
};

// IS LOGGED IN for ** USER AUTH **
const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ user: null });
  }
};

// PATCH -> Edit user account -> /influers/user/:id
const updateProvider = (req, res, next) => {
  db.none('UPDATE providers SET name=${name}, email=${email}, password=${password}, avatar=${avatar}, borough=${borough}, phone_number=${phone_number}, website_link=${website_link} WHERE id=${id}', {
      id: Number(req.params.id),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
      borough: req.body.borough,
      phone_number: req.body.phone_number,
      website_link: req.body.website_link
  }).then(() => {
      res.status(200).json({
          status: 'Success',
          message: 'Provider Updated'
      })
  }).catch(err => {
      console.log("Error updating provider: ", err)
      return next(err)
  })
};

// DELETE -> Delete a Provider -> `/provider/:id
const deleteProvider = (req, res, next) => {
  let id = parseInt(req.params.id);
  db.result('DELETE FROM providers WHERE id=$1', id)
  .then(provider => {
      res.status(200).json({
          status: 'Success',
          message: 'Provider Deleted'
      })
  }).catch(err => {
      console.log("Error deleting provider: ", err)
      return next(err)
  })
};


const getSingleProvider = (req, res, next) => {
  db.any('SELECT providers.id, providers.name, email, borough, phone_number, website_link, services_provider.service_id, services_provider.provider_id, services.id, services.name, skills.id, skills.service_id, skills.name FROM providers JOIN services_provider ON services_provider.provider_id = providers.id JOIN services ON services_provider.service_id = services.id JOIN skills ON skills.service_id = services.id WHERE provider_id = ${id}', {
    id: Number(req.params.id)
  })
  .then(info => {
    res.status(200).json({
      status: 'success', 
      message: 'Got complete infor for provider',
      info: info
    })
  })
  .catch(err => next(err));
};




module.exports = {
  getAllProviders,
  getSingleProvider,
  createProvider,
  logoutProvider,
  loginProvider,
  isLoggedIn,
  updateProvider,
  deleteProvider
}
