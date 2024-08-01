import React from "react";
import { Form, Button, Image, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Buffer } from 'buffer';

const ShopList = () => {
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/index/carts/1");
        setProductsData(response.data);
        console.log("Products Data:", response.data);
      } catch (error) {
        console.error("Error fetching Products Data:", error);
      }
    };

    fetchProductsData();
  }, []);

  if (!productsData) {
    return <tr><td colSpan="5">Loading...</td></tr>;
  }

  return (
    <>
      {productsData.map((product, index) => {
        const imageData = product.img01;
        const base64String = Buffer.from(imageData.data).toString('base64');
        const imgSrc = `data:image/jpeg;base64,${base64String}`;

        return (
          <tr key={index}>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>
              <Image
                className="img-w100"
                src={imgSrc}
                thumbnail
                style={{ width: "100px" }}
              />
              <span className="ml-2">{product.name}</span>
            </td>
            <td>NT$ {product.price}</td>
            <td>
              <InputGroup style={{ width: "120px" }}>
                <Button variant="outline-secondary">-</Button>
                <Form.Control
                  type="text"
                  value={product.amount}
                  className="text-center border-secondary"
                />
                <Button variant="outline-secondary">+</Button>
              </InputGroup>
            </td>
            <td>NT$ {product.amount * product.price}</td>
          </tr>
        );
      })}
    </>
  );
};

export default ShopList;
