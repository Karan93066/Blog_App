const express = require("express");
const { adminLogin,login,signup } = require("../controller/adminController");
const router = express.Router();

router.post("/adminlogin", adminLogin);
// router.post("/login", login);
// router.post("/signup", signup);

module.exports = router;