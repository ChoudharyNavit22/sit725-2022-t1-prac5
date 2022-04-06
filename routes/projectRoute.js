var express = require("express");
var router = express.Router();
let controller = require("../controller");

router.get('/', (req, res) => {
    controller.projectController.retrieveProjects(req,res)
})

router.post('/', (req, res) => {
    controller.projectController.createProjects(req,res)
})


module.exports = router;