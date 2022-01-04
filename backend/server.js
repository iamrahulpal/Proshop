const express = require("express");
const products = require("./data/products");

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

app.listen(5000, console.log("Server running on port 5000"));
