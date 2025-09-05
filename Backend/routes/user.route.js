const express = require("express");
const router = express.Router();
const { contect } = require("../controller/user.controller"); 

router.post("/contact", contect);

module.exports = router;
