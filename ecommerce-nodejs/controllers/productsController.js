const productsModel = require("../models/productsModel")

module.exports={
  getAll:async function(req, res, next) {
    try{
      const documents = await productsModel.find()
                              .populate("category")
                              .select("code name price description")
                              .sort({name:1})
      res.status(200).json(documents);
    }catch(e){
      next(e)
    }
  },
  getById: async function(req, res, next) {
    console.log(req.params.id)
    try{
      const document = await productsModel.findById(req.params.id)
                            .populate("category")
                            .select("code name price description")
                            .sort({name:1})
      res.status(200).json(document);
    }catch(e){
      next(e)
    }
  },
  getFeatured:async function(req, res, next) {
    try{
      const documents = await productsModel.find({featured:true})
                              .populate("category")
                              .select("code name price description")
                              .sort({name:1})
      res.status(200).json(documents);
    }catch(e){
      next(e)
    }
  },
  create: async function(req, res, next) {
    try{
      console.log(req.body)
      const producto = new productsModel({
        code:req.body.code,
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        featured:req.body.featured
      })
      const document = await producto.save()
      res.status(201).json(document)
    }catch(e){
      next(e)
    }
  },
  delete: async function(req, res, next) {
    try{
      const document = await productsModel.deleteOne({_id:req.params.id})
      res.status(200).json(document)
    }catch(e){
      next(e)
    }
  },
  update:async function(req, res, next) {
    console.log(req.params.id,req.body)
    try{
      const document = await productsModel.updateOne({_id:req.params.id},req.body)
      res.status(200).json(document)
    }catch(e){
      next(e)
    }
  }
}
