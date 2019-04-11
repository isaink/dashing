const  db  = require('../connector.js');


const getAllSkillsforProvider = (req, res, next) => {
  db.any('SELECT * FROM skills_provider WHERE provider_id=${id}', {id: Number(req.params.id)})
    .then(data => {
      res.status(200)
          .json({
            status: 'success',
            message: 'got all data',
            data: data
          })
    })
    .catch(err=>{
      res.status(400)
          .json({
            status: 'failure',
            message: 'did not get info'
          })
          next();
    })
};

const addSkillForProvider = (req, res, next) => {
  db.none('INSERT INTO skills_provider(skill_id, provider_id, price_min, price_max, education) VALUES(${skill_id},${provider_id},${price_min},${price_max},${education})', {skill_id: Number(req.body.skill_id), provider_id: Number(req.body.provider_id), price_min: Number(req.body.price_min), price_max: Number(req.body.price_max), education: req.body.education })
  .then(()=>{
    res.status(200)
        .json({
          status: 'success',
          message:'added skill for provider'
        })
  })
  .catch(err => {
    res.status(400)
        .json({
          status:'failure',
          message: 'unable to add skill for provider'
        })
  })
}

module.exports = {
getAllSkillsforProvider,
addSkillForProvider
}
