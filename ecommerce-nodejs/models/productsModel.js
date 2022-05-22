const mongoose = require("../config/mongodb")
const errorMessage = require('../util/errorMessage')

const productSchema = new mongoose.Schema({
    code:{
        type:Number,
        required:[true,errorMessage.GENERAL.required],
        index:true,
        unique:true,
        min:[1,errorMessage.GENERAL.min]
    },
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.required],
        minLength:[3,errorMessage.GENERAL.minlength],
        maxLength:[100,errorMessage.GENERAL.maxlength],
        index:true
    },
    price:{
        type:Number,
        required:[true,errorMessage.GENERAL.required],
        min:[0,errorMessage.GENERAL.min]
    },
    description:{
        type:String,
        minLength:[10,errorMessage.GENERAL.minlength],
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"cn_categories"
    },
    featured:{ // Productos destacados
        type:Boolean,
        required:[true,errorMessage.GENERAL.required],
        index:true,
    },
})

// cn: curso node
module.exports = mongoose.model("cn_products",productSchema)
