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

const getSkillsForProvider = (req, res, next) => {
  db.many("SELECT skill_id, provider_id, price_min, price_max, education, skills.service_id, array_agg(skills.name) AS skills FROM skills_provider JOIN skills ON skills.id = skills_provider.skill_id WHERE skills_provider.provider_id =${id} GROUP BY skills_provider.skill_id, skills_provider.provider_id, skills_provider.price_min, skills_provider.price_max, education, skills.service_id ",
  {
    id: Number(req.params.id)
  })
  .then( data => {
    res.status(200).json({
      status: 'success',
      message: 'Got all skills for this provider',
      data: data

    });
  })
  .catch(err => next(err))
}

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


module.exports = { getAllSkills, getOneSkill, addOneSkill, deleteOneSkill, getSkillsForProvider };
