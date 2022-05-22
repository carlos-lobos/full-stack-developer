var express = require('express');
var router = express.Router();

const productsController = require("../controllers/productsController")

const validateToken = (req,res,next) => { req.app.validateToken(req,res,next) }

// TEST: curl 'http://localhost:3000/products/'
router.get('/', productsController.getAll);
// TEST: curl 'http://localhost:3000/products/62483460b9c271062634e9dc'
router.get('/:id', productsController.getById);
// TEST: curl -X POST 'http://localhost:3000/products' -d "code=1" -d "name=Skua 150"   -d "price=200000" -d "description=Moto Motomel Skua 150cc" -d "category=624ebe2bc5906d4f3476cbc2" -d "featured=false" -H "x-access-token:..." // Moto On-Off
//       curl -X POST 'http://localhost:3000/products' -d "code=2" -d "name=Sirius 150" -d "price=250000" -d "description=Moto Motomel Sirius 150cc" -d "category=624ebdde4b869bbf4480d5a7" -d "featured=false" -H "x-access-token:..." // Moto Street
//       curl -X POST 'http://localhost:3000/products' -d "code=3" -d "name=Sirius 190" -d "price=350000" -d "description=Moto Motomel Sirius 190cc" -d "category=624ebdde4b869bbf4480d5a7" -d "featured=true" -H "x-access-token:..." // Moto Street
//       curl -X POST 'http://localhost:3000/products' -d "code=4" -d "name=Skua 250 Adventure" -d "price=500000" -d "description=Moto Motomel Skua 250cc ADVENTURE" -d "category=624ebe2bc5906d4f3476cbc2" -d "featured=true" -H "x-access-token:..." // Moto On-Off
router.post('/', validateToken, productsController.create);
// TEST: curl -X DELETE 'http://localhost:3000/products/624833fab9c271062634e9da' -H "x-access-token:..."
router.delete('/:id', validateToken, productsController.delete);
// TEST: curl -X PUT 'http://localhost:3000/products/6248375afe47d000a320dcab' -d "price=190000" -H "x-access-token:..."
router.put('/:id', validateToken, productsController.update);
module.exports = router;
