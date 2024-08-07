import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Form, Button, Image, InputGroup } from "react-bootstrap";
import { Buffer } from 'buffer';

const ShopList = forwardRef(({ productsData, onTotalChange, checkedProducts }, ref) => {
  const [localProductsData, setLocalProductsData] = useState(productsData);

  useEffect(() => {
    setLocalProductsData(productsData);
  }, [productsData]);

  useEffect(() => {
    // 监听 checkedProducts 的变化
    onTotalChange(localProductsData.filter(product => checkedProducts.has(product.pid)).map(product => product.pid));
  }, [checkedProducts, localProductsData, onTotalChange]);

  const handleAmountChange = (pid, increment) => {
    setLocalProductsData(prevData => {
      const updatedData = prevData.map(product => {
        if (product.pid === pid) {
          const newAmount = product.amount + increment;
          if (newAmount >= 1 && newAmount <= product.quantity) {
            return { ...product, amount: newAmount };
          }
        }
        return product;
      });
      const total = updatedData.reduce((total, product) => total + (product.amount * product.price), 0);
      onTotalChange(total);
      return updatedData;
    });
  };

  const handleCheckChange = (pid, e) => {
    if (e.target.checked) {
      checkedProducts.add(pid);
    } else {
      checkedProducts.delete(pid);
    }
    onTotalChange(checkedProducts);
  };

  const calculateTotal = () => {
    if (localProductsData) {
      return localProductsData.reduce((total, product) => total + (product.amount * product.price), 0);
    }
    return 0;
  };

  useImperativeHandle(ref, () => ({
    calculateTotal,
  }));

  const clickDelete = (pid) => {
    if (window.confirm("確定要刪除此商品嗎？")) {
      setLocalProductsData(prevData => prevData.filter(product => product.pid !== pid));
    }
  };

  if (!localProductsData) {
    return <tr><td colSpan="5">Loading...</td></tr>;
  }

  return (
    <>
      {localProductsData.map((product, index) => {
        const imageData = product.img01;
        const base64String = Buffer.from(imageData.data).toString('base64');
        const imgSrc = `data:image/jpeg;base64,${base64String}`;

        return (
          <tr key={index}>
            <td className="text-center align-middle">
              <Form.Check
                type="checkbox"
                checked={checkedProducts.has(product.pid)}
                onChange={(e) => handleCheckChange(product.pid, e)}
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
                <Button variant="outline-secondary"
                  onClick={() => handleAmountChange(product.pid, -1)}
                  disabled={product.amount <= 1}
                >
                  -
                </Button>
                <Form.Control
                  type="text"
                  value={product.amount}
                  className="text-center border-secondary"
                  readOnly
                />
                <Button variant="outline-secondary"
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
              <i className="bi bi-trash3-fill c-blueGray"
                onClick={() => { clickDelete(product.pid) }}
                style={{ cursor: 'pointer' }}
              ></i>
            </td>
          </tr>
        );
      })}
    </>
  );
});

export default ShopList;
