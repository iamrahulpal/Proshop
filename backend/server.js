import express from "express";
import dotenv from "dotenv"; //it protects the sensitive infromation to be exposed
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express(); //Initialized express app

app.get("/", (req, res) => {
  //(Created Route)if we get request to '/' than run the funtion that takes req and res object
  res.send("API is running.."); //(takind res object) sending msg to client side
});

app.get("/api/products", (req, res) => {
  //(Created Route)if we get request to '/api/product' than run the funtion product.js file that takes req and res object
  res.json(products); //(takind res.json object) sending products to client side
});

app.get("/api/products/:id", (req, res) => {
  //(Created Route)if we get request to '/api/product' than run the funtion product.js file that takes req and res object
  const product = products.find((p) => p._id === req.params.id); //comparing req id to product id and pushing the single product
  res.json(product); //(takind res.json object) sending single products to client side
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
