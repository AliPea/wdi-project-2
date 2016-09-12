const express    = require("express");
const router     = express.Router();
const expressJWT = require("express-jwt");

const authentications = require("../controllers/authentications");
const activities      = require("../controllers/activities");

router.route("/register").post(authentications.register);
router.route("/login").post(authentications.login);



// const activities = require("../controllers/activities");
// router.route("/activities")
// .get(activities.index);
// // .post(activities.create);
// router.route("/activities/:id")
// .get(activities.show);
// // .put(activities.update)
// // .delete(activities.delete);

module.exports = router;
