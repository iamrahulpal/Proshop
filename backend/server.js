import express from "express";
import dotenv from "dotenv"; //it protects the sensitive infromation to be exposed
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

connectDB();

const app = express(); //Initialized express app

app.get("/", (req, res) => {
  //(Created Route)if we get request to '/' than run the funtion that takes req and res object
  res.send("API is running.."); //(takind res object) sending msg to client side
});

app.use("/api/products", productRoutes); //we were fetching from but since we migrate the element calling from her eto productRoutes so we here we just redirecting the call

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
