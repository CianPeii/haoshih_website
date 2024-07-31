import React from "react";
import { Form, Button, Image, InputGroup } from "react-bootstrap";

const ShopList = () => {
  return (
    <>
      <tr>
        <td>
          <Form.Check type="checkbox" />
        </td>
        <td>
          <Image
            className="img-w100"
            src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/326709/ba0a4f1dfb7aad9e.jpg"
            thumbnail
            style={{ width: "100px" }}
          />
          <span className="ml-2">商品名字1</span>
        </td>
        <td>NT$ 999</td>
        <td>
          <InputGroup style={{ width: "120px" }}>
            <Button variant="outline-secondary">-</Button>
            <Form.Control
              type="text"
              value="12"
              className="text-center border-secondary"
            />
            <Button variant="outline-secondary">+</Button>
          </InputGroup>
        </td>
        <td>NT$ 240</td>
      </tr>
    </>
  );
};
export default ShopList;
