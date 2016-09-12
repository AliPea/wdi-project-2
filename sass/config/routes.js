const express = require('express');
const router  = express.Router();

const staticsController = require("../controllers/staticsController");

router.route("/")
  .get(staticsController.home);

module.exports = router;
