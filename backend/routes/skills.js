const express = require("express");
const router = express.Router();
const {
  getAllSkills,
  getOneSkill,
  addOneSkill,
  deleteOneSkill,
  getAllSkillsByServiceIdProviderId
} = require("../db/queries/skills-Q.js");

router.get("/", getAllSkills);
router.get("/:id", getOneSkill);
router.get("/:provider_id/:service_id", getAllSkillsByServiceIdProviderId);
router.post("/", addOneSkill);
router.delete("/:id", deleteOneSkill);

module.exports = router;
