
const express = require('express')
const route = express.Router()
const costumerController = require("../controller/controller")
route.post("/register", costumerController.costumerRegistration)





module.exports = route