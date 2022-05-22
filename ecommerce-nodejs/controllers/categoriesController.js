const categoriesModel = require("../models/categoriesModel")

module.exports={
  getAll:async function(req, res, next) {
    try{
      const documents = await categoriesModel.find()
      res.status(200).json(documents);
    }catch(e){
      next(e)
    }
  },
  create: async function(req, res, next) {
    try{
      console.log(req.body)
      const producto = new categoriesModel({
        name:req.body.name,
      })
      const document = await producto.save()
      res.status(201).json(document)
    }catch(e){
      next(e)
    }
  },
  delete: async function(req, res, next) {
    try{
      const document = await categoriesModel.deleteOne({_id:req.params.id})
      res.status(200).json(document)
    }catch(e){
      next(e)
    }
  },
  update:async function(req, res, next) {
    console.log(req.params.id,req.body)
    try{
      const document = await categoriesModel.updateOne({_id:req.params.id},req.body)
      res.status(200).json(document)
    }catch(e){
      next(e)
    }
  }
}
