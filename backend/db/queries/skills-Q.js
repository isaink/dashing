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


module.exports = { getAllSkills, getOneSkill, addOneSkill, deleteOneSkill };
