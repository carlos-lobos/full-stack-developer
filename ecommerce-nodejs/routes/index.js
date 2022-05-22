var express = require('express');
var router = express.Router();

const productsController = require("../controllers/productsController")

/* GET home page. */
// TEST: curl 'http://localhost:3000/'
router.get('/', productsController.getFeatured);

module.exports = router;
