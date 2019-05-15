const db = require("../connector.js");

// GET --> Get all provider -->  /providers
const getAllUsers = (req, res, next) => {
  db.any(
    "SELECT * FROM users JOIN skills_provider ON users.id = skills_provider.id"
  )
    .then(providers => {
      res.status(200).json({
        status: "success",
        message: "Got all Users.",
        providers: providers
      });
    })
    .catch(err => {
      res.status(400).json({
        status: "error",
        message: " 🤣 Na nana na nah. You didn't get your User!😝 ",
        err
      });
      next();
    });
};
const getEducationProviders = (req, res, next) => {

  let sql = `SELECT *
    FROM users
    JOIN skills_provider ON users.id = skills_provider.id
    WHERE education = 'true'`
if(req.query.first_name) {
  sql = sql.concat(`AND lower(first_name)  LIKE '%${req.query.first_name.toLowerCase()}%'`)
}
if(req.query.last_name) {
  sql = sql.concat(`AND lower(last_name)  LIKE '%${req.query.last_name.toLowerCase()}%'`)
}
if(req.query.service_id) {
  sql = sql.concat(`AND service_id = ${req.query.service_id}`)
}
console.log(req.query);
  db.any(sql)
    .then(providers => {
      res.status(200).json({
        status: "success",
        message: "Got all Education Providers.",
        providers: providers
      });
    })
    .catch(err => {
      console.log('WHAT THE ERRRRR', err)
      res.status(400).json({
        status: "error",
        message: " 🤣 Na nana na nah. You didn't get your Providers!😝 ",
        err
      });
    });
};

// PATCH -> Edit user account -> /influers/user/:id
const updateUser = (req, res, next) => {
  db.none(
    "UPDATE users SET first_name=${first_name}, last_name=${last_name}, email=${email}, password_digest=${password_digest}, avatar=${avatar}, borough=${borough}, phone_number=${phone_number}, website_link=${website_link}, type=${type} WHERE id=${id}",
    {
      id: Number(req.params.id),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
      borough: req.body.borough,
      phone_number: req.body.phone_number,
      website_link: req.body.website_link,
      type: req.body.type
    }
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "User Updated"
      });
    })
    .catch(err => {
      console.log("Error updating provider: ", err);
      return next(err);
    });
};

// DELETE -> Delete a Provider -> `/provider/:id
const deleteUser = (req, res, next) => {
  let id = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=$1", id)
    .then(provider => {
      res.status(200).json({
        status: "Success",
        message: "User Deleted"
      });
    })
    .catch(err => {
      console.log("Error deleting user: ", err);
      return next(err);
    });
};

const getUserInfo = (req, res, next) => {
  db.one(
    "SELECT * FROM users WHERE users.id = ${id}",
    {
      id: Number(req.params.id)
    }
  )
    .then(info => {
      res.status(200).json({
        status: "success",
        message: "Got complete info for provider",
        info: info
      });
    })
    .catch(err => next(err));
};

// router.get('/bySkill/:skill_id', getProvidersBySkill);
const getProvidersBySkill = (req, res, next) => {
  db.any(
    `SELECT
      DISTINCT  email,
      first_name,
      last_name,
      avatar,
      borough,
      phone_number,
      users.id provider_id,
      website_link,
      bio,
      availability,
      services.name services,
      skills.id skill_id
    FROM skills_provider
    JOIN skills ON skills.id = skills_provider.skill_id
    JOIN users ON users.id = skills_provider.user_id
    JOIN services ON services.id = skills.service_id
    WHERE skills.id = $[skill_id]`,
    {
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
};

// router.get('/byService/:service_id', getProvidersByService);
// http://localhost:3100/providers/byService/1?skill_id=1&borough=Brooklyn
const getProvidersByService = (req, res, next) => {
  console.log("REQ.QUERY", req.query);
  let sql = `SELECT
  DISTINCT
  first_name,
  last_name,
  avatar,
  borough,
  bio,
  availability,
  email,
  phone_number,
  users.id provider_id,
  website_link,
  services.name services,
  skills.id skill_id
  FROM skills_provider
  JOIN skills ON skills.id = skills_provider.skill_id
  JOIN users ON users.id = skills_provider.user_id
  JOIN services ON services.id = skills.service_id
  WHERE services.id = $[service_id]`;

  // if (req.query.skill_id && req.query.borough) {
  //   sql += `AND skills.id = $[skill_id] AND borough= $[borough]`
  // } else
  if (req.query.skill_id) {
    sql += `AND skills.id = $[skill_id]`;
  }
  if (req.query.borough) {
    sql += `AND borough= $[borough]`;
  }

  db.any(sql, {
    service_id: Number(req.params.service_id),
    skill_id: Number(req.query.skill_id),
    borough: req.query.borough
  })
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

    const getProviderServices = (req, res, next) => {
      db.any(
        "SELECT services_provider.user_id, services_provider.service_id, services.name AS servicesName, array_agg(skills.name) AS skills FROM users JOIN services_provider ON services_provider.user_id = users.id JOIN services ON services_provider.service_id = services.id JOIN skills ON skills.service_id = services.id WHERE users.id = 1 GROUP BY services_provider.user_id, services_provider.service_id, services.name",
        {
          id: Number(req.params.id)
        }
      )
        .then(info => {
          res.status(200).json({
            status: "success",
            message: "Got complete services for provider",
            info: info
          });
        })
        .catch(err => next(err));
    };
};

module.exports = {
  getAllUsers,
  getEducationProviders,
  updateUser,
  deleteUser,
  getUserInfo,
  getProvidersBySkill,
  getProvidersByService,
  // getProviderServices
};