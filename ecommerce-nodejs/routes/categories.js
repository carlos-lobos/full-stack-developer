var express = require('express');
var router = express.Router();

const categoriesController = require("../controllers/categoriesController")

const validateToken = (req,res,next) => { req.app.validateToken(req,res,next) }

// TEST: curl 'http://localhost:3000/categories/'
router.get('/', categoriesController.getAll);
// TEST: curl -X POST 'http://localhost:3000/categories' -d "name=Moto Street" -H "x-access-token:..."
//       curl -X POST 'http://localhost:3000/categories' -d "name=Moto Urbana" -H "x-access-token:..."
//       curl -X POST 'http://localhost:3000/categories' -d "name=Moto ON-OFF" -H "x-access-token:..."
//       curl -X POST 'http://localhost:3000/categories' -d "name=Moto Scooter" -H "x-access-token:..."
//       curl -X POST 'http://localhost:3000/categories' -d "name=Moto Utilitario" -H "x-access-token:..."
router.post('/', validateToken, categoriesController.create);
module.exports = router;
