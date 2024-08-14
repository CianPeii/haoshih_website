import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const EditProduct = () => {
  const { vid, pid } = useParams();
  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const fetchProductInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3200/vendor/theProduct/${pid}`
        );
        setProductInfo(response.data);
      } catch (error) {
        console.error("Error fetching Products Data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductInfo();
  }, [pid]);

  if (loading) return <p>Loading...</p>;

  console.log(productInfo);

  return (
    <Form
      // noValidate
      // validated={validated}
      // onSubmit={handleSubmit}
      className="my-5"
    >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="text-end">
          立即上架
        </Form.Label>
        <Col sm="8" className="d-flex align-items-center">
          {/* <Form.Control
            type="radio"
            name="is_show"
            value={1}
            id="is_show_true"
          /> */}
          <input
            type="radio"
            value={1}
            name="is_show"
            id="is_show_true"
            checked={productInfo.is_show ? "checked" : ""}
          />
          &nbsp;<label htmlFor="is_show_true">是</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Form.Control
            type="radio"
            name="is_show"
            value={0}
            id="is_show_false"
            /> */}
          <input
            type="radio"
            value={0}
            name="is_show"
            id="is_show_false"
            checked={!productInfo.is_show ? "checked" : ""}
          />
          &nbsp;<label htmlFor="is_show_false">否</label>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="productName" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          品牌名稱
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            placeholder={productInfo.name}
            name="name"
            // value={stallData.brand_name}
            // onChange={handleInputChange}
            // isInvalid={brandNameError}
          />
          <Form.Text muted>字數限20字以內</Form.Text>
          <Form.Control.Feedback type="invalid">
            請輸入20字以內
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="productQuantity" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          商品數量
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="number"
            name="quantity"
            placeholder={productInfo.quantity}
            max="250"
            style={{ width: "8rem" }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="productPrice" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          商品價格
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="number"
            name="price"
            placeholder={productInfo.price}
            style={{ width: "8rem" }}
            // value={stallData.tag2}
            // onChange={handleInputChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="productContent" className="mb-3">
        <Form.Label column sm="2" className="text-end">
          商品介紹
        </Form.Label>
        <Col sm="8">
          <Form.Control
            as="textarea"
            rows={10}
            placeholder={productInfo.content}
            name="content"
            // value={stallData.content}
            // onChange={handleInputChange}
            // isInvalid={contentError}
          />
          <Form.Text muted>字數限250字以內</Form.Text>
          <Form.Control.Feedback type="invalid">
            請輸入250字以內商品介紹
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="productImages" className="mb-5">
        <Form.Label column sm="2" className="text-end">
          商品照
        </Form.Label>
        <Col sm="10">
          <div className="d-flex flex-wrap gap-3">
            {/* {renderImageUpload("brand_img01")}
          {renderImageUpload("brand_img02")}
          {renderImageUpload("brand_img03")}
          {renderImageUpload("brand_img04")}
          {renderImageUpload("brand_img05")} */}
          </div>
          <Form.Text muted>最多可上傳五張，檔案類型限PNG或JPG</Form.Text>
        </Col>
      </Form.Group>

      <Row>
        <Col sm="8">
          <div className="d-flex justify-content-center">
            <Button
              className="me-5 bg-white"
              variant="bg-white border border-2 c-gray rounded-pill px-4 py-2"
              type="button"
              onClick={() => {
                alert("確定要取消變更嗎？");
                // navigate(`/vendor/${stallProfile.vid}/vendorInfo`);
              }}
            >
              取消變更
            </Button>
            <Button
              className="ms-5"
              variant=" bg-blueGray text-white rounded-pill px-4 py-2"
              type="submit"
            >
              儲存變更
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default EditProduct;
