const express = require("express");
const router = express.Router();
const {
  getAllSkills,
  getOneSkill,
  addOneSkill,
  deleteOneSkill,
  getSkillsForProvider
} = require("../db/queries/skills-Q.js");

router.get("/providers/:id", getSkillsForProvider)
router.get("/", getAllSkills);
router.get("/:id", getOneSkill);
router.post("/", addOneSkill);
router.delete("/:id", deleteOneSkill);


module.exports = router;
