import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.css";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "axios-hooks";
import SubTitleYellow from "../../components/SubTitleYellow";

const EditStallProfile = (props) => {
  // 重新導向功能
  const navigate = useNavigate();
  // refetch功能
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:3200/vendor/info/${props.stallProfile.vid}`
  );
  const stallProfile = props.stallProfile;
  const [stallData, setStallData] = useState({
    logo_img: "",
    brand_name: "",
    brand_type: "",
    content: "",
    fb: "",
    ig: "",
    web: "",
    tag1: "",
    tag2: "",
    brand_img01: "",
    brand_img02: "",
    brand_img03: "",
    brand_img04: "",
    brand_img05: "",
  });

  // 表單是否已經被驗證
  const [validated, setValidated] = useState(false);

  // 有 change => 更新 state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStallData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
  };

  return (
    <>
      <SubTitleYellow title="攤位資訊" />
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="my-5"
      >
        <Form.Control
          hidden
          type="text"
          name="vinfo"
          value={stallProfile.vinfo}
          onChange={handleInputChange}
        />
        <Form.Group as={Row} controlId="validationCustom00" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌Logo
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="file"
              name="logo_img"
              accept="image/png, image/jpeg"
            />
            <Form.Text muted>檔案類型限PNG或JPG</Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom01" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌名稱
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder={stallProfile.brand_name}
              name="brand_name"
              value={stallData.brand_name}
              onChange={handleInputChange}
            />
            <Form.Text muted>字數限30字以內</Form.Text>
            <Form.Control.Feedback type="invalid">
              請輸入30字以內品牌名稱
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom02" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌類型
          </Form.Label>
          <Col sm="6">
            <Form.Select
              name="brand_type"
              style={{ width: "8rem" }}
              onChange={handleInputChange}
            >
              <option>選擇類型</option>
              <option value="clothing">服飾</option>
              <option value="accessories">飾品</option>
              <option value="handmade">手作</option>
              <option value="food">美食</option>
              <option value="pet">寵物</option>
              <option value="others">其他</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              請選擇品牌類型
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌標籤
          </Form.Label>
          <Col sm="6">
            <InputGroup>
              <Form.Control
                type="text"
                style={{ width: "8rem" }}
                id="validationCustom03"
                placeholder={stallProfile.tag1}
                name="tag1"
                value={stallData.tag1}
                onChange={handleInputChange}
              />
              <Form.Control
                type="text"
                style={{ width: "8rem" }}
                id="validationCustom04"
                placeholder={stallProfile.tag2}
                name="tag2"
                value={stallData.tag2}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Form.Text muted>至少需填寫一個，字數限6字以內</Form.Text>
            <Form.Control.Feedback type="invalid">
              請輸入6個字以內品牌標籤
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom05" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌ＦＢ
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder={stallProfile.fb}
              name="fb"
              value={stallData.fb}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              請輸入FaceBook網址
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom06" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌ＩＧ
          </Form.Label>
          <Col sm="6">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder={stallProfile.ig}
                name="ig"
                value={stallData.ig}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                請輸入Instagram網址
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom07" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌官網
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder={stallProfile.web}
              name="web"
              value={stallData.web}
              onChange={handleInputChange}
            />
            <Form.Text muted>FB、IG、官網至少需填寫一個</Form.Text>
            <Form.Control.Feedback type="invalid">
              請輸入官網網址
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom08" className="mb-3">
          <Form.Label column sm="2" className="text-end">
            品牌描述
          </Form.Label>
          <Col sm="6">
            <Form.Control
              as="textarea"
              rows={10}
              placeholder={stallProfile.content}
              name="content"
              value={stallData.content}
              onChange={handleInputChange}
            />
            <Form.Text muted>字數限300字以內</Form.Text>
            <Form.Control.Feedback type="invalid">
              請輸入300字以內品牌描述
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="validationCustom09" className="mb-5">
          <Form.Label column sm="2" className="text-end">
            品牌視覺照
          </Form.Label>
          <Col sm="6">
            <Form.Control type="file" multiple />
            <Form.Text muted>
              至少須提供一張，最多可上傳五張，檔案類型限PNG或JPG
            </Form.Text>
          </Col>
        </Form.Group>

        <Row>
          <Col sm="8">
            <div className="d-flex justify-content-center">
              <Button
                className="me-5"
                variant="bg-white border border-2 c-gray rounded-pill px-4 py-2"
                type="reset"
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
    </>
  );
};

export default EditStallProfile;
