import React from "react";
import { Form, Button, Image, InputGroup } from "react-bootstrap";
import { Buffer } from 'buffer';

const ShopList = ({ productsData, selectedProducts, onProductCheckChange, onProductAmountChange, onProductDelete  }) => {
  console.log(productsData);
  
  const handleAmountChange = (pid, increment) => {
    const product = productsData.find(p => p.pid === pid);
    if (product) {
      const newAmount = product.amount + increment;
      if (newAmount >= 1 && newAmount <= product.quantity) {
        onProductAmountChange(pid, newAmount);
      }
    }
  };

  const clickDelete = (pid) => {
    if (window.confirm("確定要刪除此商品嗎？")) {
      onProductDelete(pid);  // 調用從父組件傳下來的刪除函數
    }
  };

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
            <td className="text-center align-middle">
              <Form.Check
                type="checkbox"
                checked={selectedProducts.has(product.pid)}
                onChange={() => onProductCheckChange(product.pid, !selectedProducts.has(product.pid))}
              />
            </td>
            <td className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="overflow-hidden rounded"
                  style={{ width: "100px", height: "100px" }}
                >
                  <Image
                    src={imgSrc}
                    alt="商品圖片"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <span className="ms-3">{product.name}</span>
              </div>
            </td>
            <td className="text-center align-middle">NT$ {product.price}</td>
            <td className="text-center align-middle">
              <InputGroup className="mx-auto" style={{ width: "120px" }}>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleAmountChange(product.pid, -1)}
                  disabled={product.amount <= 1}
                >
                  -
                </Button>
                <Form.Control
                  type="text"
                  value={product.amount}
                  className="text-center border-secondary"
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => handleAmountChange(product.pid, 1)}
                  disabled={product.amount >= product.quantity}
                >
                  +
                </Button>
              </InputGroup>
            </td>
            <td className="text-center align-middle">
              NT$ {product.amount * product.price}
            </td>
            <td className="text-center align-middle">
              <i
                className="bi bi-trash3-fill c-blueGray"
                onClick={() => { clickDelete(product.pid) }}
                style={{ cursor: 'pointer' }}
              ></i>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ShopList;