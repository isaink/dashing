const  db  = require('../connector.js');

// GET --> Get all provider -->  /providers
const getAllProviders = (req, res, next) => {
  db.any('SELECT providers.id, name, email, password, avatar, borough, phone_number, website_link, bio, service_id, skill_id, price_min, price_max, education  FROM providers JOIN skills_provider ON providers.id = skills_provider.id')
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
const getAllEducationProviders = (req, res, next) => {
  db.any("SELECT providers.id, name, email, password, avatar, borough, phone_number, website_link, bio, service_id, skill_id, price_min, price_max, education  FROM providers JOIN skills_provider ON providers.id = skills_provider.id WHERE education = 'true'")
  .then(providers => {
    res.status(200).json({
      status: 'success',
      message: 'Got all Education Providers.',
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


const getProviderInfo = (req, res, next) => {
  db.one('SELECT providers.id, bio, providers.name AS providerName, avatar, email, borough, phone_number, website_link FROM providers WHERE providers.id = ${id}', {
    id: Number(req.params.id)
  })
  .then(info => {
    res.status(200).json({
      status: 'success',
      message: 'Got complete info for provider',
      info: info
    })
  })
  .catch(err => next(err));
};



// router.get('/bySkill/:skill_id', getProvidersBySkill);
const getProvidersBySkill= (req, res, next) => {
  db.any(
    `SELECT
      DISTINCT providers.name provider,
      avatar,
      borough,
      email,
      phone_number,
      providers.id provider_id,
      website_link,
      services.name services,
      skills.id skill_id
    FROM skills_provider
    JOIN skills ON skills.id = skills_provider.skill_id
    JOIN providers ON providers.id = skills_provider.provider_id
    JOIN services ON services.id = skills.service_id
    WHERE skills.id = $[skill_id]`, {
      // service_id: Number(req.params.service_id),
      skill_id: Number(req.params.skill_id)
    }
  )
  .then(data => {
    res.status(200).json({
      status: "Success",
      message: "Got all providers by this service and skill",
      data: data
    });
  })
  .catch(err => {
    res.status(400).json({
      status: "Failure",
      message: "Failed to get all services/skills by this provider"
    });
  });

}

// router.get('/byService/:service_id', getProvidersByService);
// http://localhost:3100/providers/byService/1?skill_id=1&borough=Brooklyn
const getProvidersByService= (req, res, next) => {
  console.log('REQ.QUERY', req.query);
  let sql = `SELECT
    DISTINCT providers.name provider,
    avatar,
    borough,
    email,
    phone_number,
    providers.id provider_id,
    website_link,
    services.name services,
    skills.id skill_id
  FROM skills_provider
  JOIN skills ON skills.id = skills_provider.skill_id
  JOIN providers ON providers.id = skills_provider.provider_id
  JOIN services ON services.id = skills.service_id
  WHERE services.id = $[service_id]`

  // if (req.query.skill_id && req.query.borough) {
  //   sql += `AND skills.id = $[skill_id] AND borough= $[borough]`
  // } else
  if (req.query.skill_id) {
    sql += `AND skills.id = $[skill_id]`
  }
  if (req.query.borough) {
    sql += `AND borough= $[borough]`
  }

  db.any(sql, {
      service_id: Number(req.params.service_id),
      skill_id: Number(req.query.skill_id),
      borough: req.query.borough
    }
  )
  .then(data => {
    res.status(200).json({
      status: "Success",
      message: "Got all providers by this service and skill",
      data: data
    });
  })
  .catch(err => {
    res.status(400).json({
      status: "Failure",
      message: "Failed to get all services/skills by this provider"
    });
  });

}

const getProviderServices = (req, res, next) => {
  db.any('SELECT services_provider.provider_id, services_provider.service_id, services.name AS servicesName, array_agg(skills.name) AS skills FROM providers JOIN services_provider ON services_provider.provider_id = providers.id JOIN services ON services_provider.service_id = services.id JOIN skills ON skills.service_id = services.id WHERE providers.id =${id} group by services_provider.provider_id, services_provider.service_id, services.name', {
    id: Number(req.params.id)
  }).then(info => {
    res.status(200).json({
      status: 'success',
      message: 'Got complete services for provider',
      info: info
    })
  })
  .catch(err => next(err));
 };


module.exports = {
  getAllProviders,
  getProviderInfo,
  getAllEducationProviders,
  getProviderServices,
  createProvider,
  logoutProvider,
  loginProvider,
  isLoggedIn,
  updateProvider,
  deleteProvider,

  getProvidersBySkill,
  getProvidersByService,
}
