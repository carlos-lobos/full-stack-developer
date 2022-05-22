const mongoose = require("../config/mongodb")
const errorMessage = require('../util/errorMessage')
const bcrypt = require("bcrypt")

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.required],
    },
    email:{
        type:String,
        unique:true,
        required:[true,errorMessage.GENERAL.required],
    },
    password:{
        type:String,
        required:[true,errorMessage.GENERAL.required],
    },
    rol:{
        type:String,
        enum:["admin","user","edit"],
        default:"user"
    }
})
usersSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})
module.exports = mongoose.model("cn_users",usersSchema)
