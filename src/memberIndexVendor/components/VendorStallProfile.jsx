import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.css";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "axios-hooks";

const VendorStallProfile = () => {
  return (
    <>
      <h1>VendorStallInfo</h1>
      <div className="d-flex justify-content-center">
        <Button
          className="me-5"
          variant="bg-white border border-2 c-gray rounded-pill px-4 py-2"
          type="button"
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
    </>
  );
};

export default VendorStallProfile;
