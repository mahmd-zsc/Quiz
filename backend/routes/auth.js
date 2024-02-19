let express = require("express");
const { createNewUser, test } = require("../controllers/authCtrl");
let router = express.Router();

router.post("/signup", createNewUser);
router.get("/signup", test);

module.exports = router;
