const express = require("express");
const route = express.Router();
const customerControllers = require("../Controllers/customerControllers")
const upload = require("../Midllewere/multer")

route.post("/registration",upload.single("photo"),customerControllers.registration)
route.post("/login",customerControllers.login)

module.exports = route