const express = require("express");
const router = express.Router();
let { createUser, loginUser } = require("../controller/userController");

router.post("/signup", createUser);
router.post("/login", loginUser);
module.exports = router;
