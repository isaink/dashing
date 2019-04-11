const  db  = require("../connector.js");

const getAllSkills = (req, res, next) => {
  db.any("SELECT * FROM skills")
    .then(data => {
      res.status(200).json({
        status: "success",
        skills: data,
        message: "Got All Skills!"
      });
    })
    .catch(err => next(err));
};

const getOneSkill = (req, res, next) => {
  let id = parseInt(req.params.id);
  db.one("SELECT * FROM skills WHERE id=$1", id)
    .then(data => {
      res.status(200).json({
        status: "success",
        skills: data,
        message: "Got One Skill!"
      });
    })
    .catch(err => next(err));
};

const addOneSkill = (req, res, next) => {
  db.none(
    "INSERT INTO skills (name, service_id) VALUES (${name}, ${service_id})",
    req.body
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        skills: data,
        message: "Added A New Skill!"
      });
    })
    .catch(err => next(err));
};

const deleteOneSkill = (req, res, next) => {
  let id = parseInt(req.params.id);
  db.result("DELETE FROM skills WHERE id=$1", id)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "This Skill Has Been Deleted!",
        result: result
      });
    })
    .catch(err => next(err));
};

const getAllSkillsByServiceIdProviderId = (req, res, next) => {
  let providerId = parseInt(req.params.provider_id);
  let serviceId = parseInt(req.params.service_id);
  db.any('SELECT skills.name AS skill_name FROM skills JOIN services_provider ser_p ON ser_p.service_id=skills.service_id JOIN providers ON providers.id=ser_p.provider_id WHERE ser_p.provider_id = $1 AND skills.service_id = $2', [providerId, serviceId])
  .then(skills => {
    console.log('SKILLS', skills);
    res.status(200)
    .json({
      status: 'success',
      message: 'You got your this provider s Skills by Service id.',
      body: skills
    })
  }).catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: "🤣 Na nana na nah. You didn't get the Skills belonging to this Provider and this Service!😝 "
    })
  })
}


module.exports = { getAllSkills, getOneSkill, addOneSkill, deleteOneSkill, getAllSkillsByServiceIdProviderId };
