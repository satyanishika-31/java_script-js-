import exp from 'express'
import { ProductModel } from '../models/productModal.js'
import { verifyToken } from '../middleware/verifyToken.js'
export const productApp = exp.Router()

//create product
productApp.post("/products", async (req, res) => {
    //get new product obj from req
    const newProduct = req.body

    //create new product document
    const newProductDocument = new ProductModel(newProduct)

    //save
    const result = await newProductDocument.save()
    console.log("result", result)

    //saved resource
    res.status(201).json({ message: "product created" })
})

//read all products
productApp.get("/products", async (req, res) => {
    //Read all products from db
    let productList = await ProductModel.find()

    //send response
    res.status(200).json({ message: "products list", payload: productList })
})

//Read product by productId
productApp.get('/products/:id', async (req, res) => {
    //read object id from req
    const pid = req.params.id

    //find product by id
    const productObj = await ProductModel.findById(pid)

    //if product not found
    if (!productObj) {
        return res.status(404).json({ message: "product not found" })
    }

    //send response
    res.status(200).json({ message: "product details", payload: productObj })
})

//update a product by id
productApp.put('/products/:id', async (req, res) => {
    //get modified product from req
    const modifiedProduct = req.body
    const pid = req.params.id

    //find product by id and update
    const updatedProduct = await ProductModel.findByIdAndUpdate(
        pid,
        { $set: { ...modifiedProduct } },
        { new: true, runValidators: true }
    )

    //send response
    res.status(200).json({ message: "product updated", payload: updatedProduct })
})

//delete a product by id
productApp.delete('/products/:id', async (req, res) => {
    //read id from req
    const pid = req.params.id
    //find product by id and delete
    let deleteproduct=await ProductModel.findByIdAndDelete(pid)
    if(!deleteproduct){
        return res.status(404).json({message:"product not found"})
    }

     
    //send response
    res.status(200).json({ message: "product deleted",payload:deleteproduct })
})


