const usersModel = require("../models/usersModels")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports={
    getLoggedIn:async function(req, res, next) {
        console.log(req.get('x-access-token'))
        return res.status(200).json(jwt.decode(req.get('x-access-token')))
    },
    register:async function(req, res, next) {
        try{
            console.log(req.body)
            const userExist = await usersModel.findOne({email:req.body.email})
            if(userExist){
                return res.status(401).json({message:"El Email "+req.body.email+" ya existe"})
            }
            const user = new usersModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            const document = await user.save()
            res.status(201).json(document)
        }catch(e){
            console.log(e)
            next(e)
        }
    },
    login:async function(req, res, next) {
        try{
            const user = await usersModel.findOne({email:req.body.email})
            if(!user){
                res.status(401).json({message:"El Email "+req.body.email+" es incorrecto"})
                return;
            }
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload = {userId:user._id}
                const token = jwt.sign(payload,req.app.get("secretKey"),{expiresIn:"1h"})
                return res.status(200).json({token})
            }else{
                return res.status(401).json({message:"La contraseña es incorrecta"})
            }
        }catch(e){
            console.log(e)
            next(e)
        }
    },
    changepasswd:async function(req, res, next) {
        console.log(req.body)
        try{
            let user = await usersModel.findOne({email:req.body.email})
            if(!user){
                return res.status(404).json({message:"El Email "+req.body.email+" no existe"})
            }
            console.log(user)
            user.password = req.body.password
            const document = await user.save()
            res.status(201).json(document)
        }catch(e){
            next(e)
        }
      }
}