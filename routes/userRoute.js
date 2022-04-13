var express = require("express");
var router = express.Router();
let controller = require("../controller");

router.get('/', (req, res) => {
    controller.userController.getUser(req,res)
})

router.get('/create', (req, res) => {
    controller.userController.getUser(req,res)
})

module.exports = router;