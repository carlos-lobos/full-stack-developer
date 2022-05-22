var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

const validateToken = (req,res,next) => { req.app.validateToken(req,res,next) }

/* GET Logged-in User . */
// TEST: curl 'http://localhost:3000/users/' -H "x-access-token:..."
router.get('/', validateToken, usersController.getLoggedIn);

/* POST Register a User */
// TEST: curl -X POST 'http://localhost:3000/users/register' -d "name=Carlos" -d "email=carlos.lobos@hotmail.com" -d "password=soyyo"
router.post('/register', usersController.register);

/* POST Login a User */
// TEST: curl -X POST 'http://localhost:3000/users/' -d "email=carlos.lobos@hotmail.com" -d "password=soyyo"
// TEST: curl -X POST 'http://localhost:3000/users/' -d "email=carlos.lobos@hotmail.com" -d "password=soyyonuevamente"
router.post('/', usersController.login);

/* PUT Change Password for a Logged-In User */
// TEST: curl -X PUT 'http://localhost:3000/users/changepasswd' -d "email=carlos.lobos@hotmail.com" -d "password=soyyonuevamente" -H "x-access-token:..."
router.put('/changepasswd', validateToken, usersController.changepasswd);

module.exports = router;
