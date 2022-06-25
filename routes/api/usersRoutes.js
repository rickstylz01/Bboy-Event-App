const express = require("express");
const router = express.Router();
const UserController = require('../../controllers/usersControllers');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", UserController.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", UserController.login);

module.exports = router;
