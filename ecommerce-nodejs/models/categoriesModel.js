const mongoose = require("../config/mongodb")
const errorMessage = require('../util/errorMessage')

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.required],
        minLength:[3,errorMessage.GENERAL.minlength],
        maxLength:[100,errorMessage.GENERAL.maxlength],
    }
});

// cn: curso node
module.exports = mongoose.model("cn_categories", categorySchema)
