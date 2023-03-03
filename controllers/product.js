const Product = require("../models/Product");

exports.add = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const newProduct = new Product({ name, description, price, image });
    await newProduct.save();
    res.status(200).send({ msg: "Product added successfully", newProduct });
  } catch (error) {
    res.status(400).send({ msg: "cannot add product!!!", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const listProducts = await Product.find();
    res.status(200).send({ msg: "This is the list of product", listProducts });
  } catch (error) {
    res.status(400).send({ msg: "cannot get all product!!!", error });
  }
};

exports.getOne = async (req, res) => {
  try {
    const productToGet = await Product.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "I get the product", productToGet });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "cannot get the product with this id !!!", error });
  }
};

exports.deleteProduct = async (req,res) => {
    try {
        const{_id}= req.params;
        await Product.findOneAndDelete({_id})
        res.status(200).send({msg : "Product deleted"})
    } catch (error) {
        res.status(400).send({msg : "cannot delete this Product", error})      
    }
}


exports.editProduct= async (req, res) => {
    try {
      const {_id} = req.params;
        const result =
        await Product.updateOne({_id},{$set:{...req.body}})
        res.status(200).send({msg : "product updated successfully" })
    } catch (error) {
      res.status(400).send({msg: "cannot update product!!!", error})  
    }
}

