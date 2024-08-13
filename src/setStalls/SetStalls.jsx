import { type } from "@testing-library/user-event/dist/type";
import ChatBtn from "../components/ChatBtn";
import Footer from "../components/Footer";
import MainBg from "../components/MainBg";
import NavBarShop from "../components/NavBarShop";
import ThirdTitle from "../components/ThirdTitle";
import MarketFloorPlan from "../components/MarketFloorPlan";
import styles from "./setStalls.module.scss";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";



const SetStalls = () => {
  var [data, setData] = useState();
  const [data_from_parent, setVinfo] = useState([]);
  useEffect(() => {
    const getData = async (vinfo) => {
      try {
        const response = await axios.get("http://localhost:3200/map", {
          params: { vinfo },
        });
        setData(response.data);
      }
      catch (error) {
        
      }
    };
  });

  const fetchData = async (vinfo) => {
    try {
      const response = await axios.get("http://localhost:3200/map/getdata", {
        params: { vinfo },
      });
      setVinfo(response.data.data_from_server);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  

  const booths = [
    ["A01", "A02", "A03", "A04", "A05"],
    ["B01", "B02", "B03", "B04", "B05"],
    ["C01", "C02", "C03", "C04", "C05"],
    ["D01", "D02", "D03", "D04", "D05"],
  ];
  const cartVisible = 1;
  
  const getBoothClass = (booth) => {
    if (["A01", "A02", "B02", "C02", "D01", "D02"].includes(booth))
      return "bg-red";
    if (["A03", "B01", "C01"].includes(booth)) return "bg-gray";
    return "bg-secondary";
  };

  const handleClick = (event) => {
    console.log(event.target.innerText);
  }
  return (
    <>
      <NavBarShop cartVisible={cartVisible}/>
      <MainBg title="我要擺攤" page="setStalls" />
      <Container fluid className="mt-4 bg-white p-5">
        <Row className="d-flex h-100">
          <div>
          <MarketFloorPlan fetchData={fetchData}>
          </MarketFloorPlan>
          </div>
          {/* 用看看MarketFloorPlan，以下先註解 */}
          {/* <Col md={6} className="d-flex">
            <div className="border p-5 flex-grow-1">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <ThirdTitle title="市集攤位" />
                <p className="c-gray">場次：2024/10/01-2024/12/30</p>
              </div>
              <div className="f-center p-5">
                <div
                  className="border f-center me-5"
                  style={{
                    width: "80px",
                    height: "150px",
                    writingMode: "vertical-rl",
                  }}
                >
                  主舞台
                </div>
                <div className="d-fles flex-column">
                  {booths.map((row, rowIndex) => (
                    <div key={rowIndex} className="d-flex mb-2">
                      {row.map((booth, boothIndex) => (
                        <div
                          key={boothIndex}
                          className={`vendors border f-center me-2 ${getBoothClass(booth)} ${styles.hover}`}
                          style={{
                            width: "50px",
                            height: "50px",
                            fontSize: "0.8rem",
                          }}
                          id={booth}
                          onClick={handleClick}
                        >
                          {booth}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col> */}
          <Col md={6} className="d-flex">
            <div className="border p-5 flex-grow-1">
              <ThirdTitle title="攤位租金" />
              <div className="d-flex justify-content-between mt-3">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-red me-2"
                    style={{ width: "20px", height: "20px" }}
                  ></div>
                  <span>800元/天</span>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="bg-secondary me-2"
                    style={{ width: "20px", height: "20px" }}
                  ></div>
                  <span>600元/天</span>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="bg-gray me-2"
                    style={{ width: "20px", height: "20px" }}
                  ></div>
                  <span>已出租</span>
                </div>
              </div>  
              <div className="f-start fs-4 h-100 c-gray">
                <span>選擇季度：
                </span>
                <select>
                  <option value="3">2024/07-2024/09</option>
                  <option value="4">2024/10-2024/12</option>
                </select>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ChatBtn />
      <Footer />
    </>
  );
};

export default SetStalls;
