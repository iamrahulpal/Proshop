import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET/api/products
// @access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    //(Created Route)if we get request to '/api/product' than run the funtion product.js file that takes req and res object
    const products = await Product.find({});

    res.json(products); //(takind res.json object) sending products to client side
  })
);

// @desc Fetch single products
// @route GET/api/products/:id
// @access Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //(Created Route)if we get request to '/api/product' than run the funtion product.js file that takes req and res object
    const product = await Product.findById(req.params.id); //comparing req id to product id and pushing the single product

    if (product) {
      res.json(product); //(takind res.json object) sending single products to client side
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
