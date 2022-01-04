import React, { useState, useEffect } from "react"; //removed import product.js from frontend and now connecting with backend and we use useEffect hook for make a request
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]); //it uses setProducts beacuse conventionally cant defined as components

  useEffect(() => {
    // when upper command executed instantlly this sectin gets fire off whatever in it
    const fetchProducts = async () => {
      //created a asynchronous funtion
      const { data } = await axios.get("/api/products"); // await(wait) till get req of products and the provide res.data i.e. {data}
      setProducts(data); // since useState array is empty thats why on webstie it show only one line latets products now we are providing the data
    };

    fetchProducts(); //calling that asynchronous function
  }, []); //that empty array is used on in case of failure of a fucntion

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
