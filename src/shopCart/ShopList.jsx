import React from "react";
import { Form, Button, Image, InputGroup } from "react-bootstrap";

const ShopList = () => {
  return (
    <tr>
      <td className="text-center align-middle">
        <Form.Check type="checkbox" />
      </td>
      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="overflow-hidden rounded"
            style={{ width: "100px", height: "100px" }}
          >
            <Image
              src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/326709/ba0a4f1dfb7aad9e.jpg"
              alt="商品圖片"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <span className="ms-3">商品名字1</span>
        </div>
      </td>
      <td className="text-center align-middle">NT$ 999</td>
      <td className="text-center align-middle">
        <InputGroup className="mx-auto" style={{ width: "120px" }}>
          <Button variant="outline-secondary">-</Button>
          <Form.Control
            type="text"
            value="12"
            className="text-center border-secondary"
          />
          <Button variant="outline-secondary">+</Button>
        </InputGroup>
      </td>
      <td className="text-center align-middle">NT$ 240</td>
    </tr>
  );
};

export default ShopList;
