const express = require("express");
const router = express.Router();
const UserController = require('../../controllers/usersControllers');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", UserController.register)
