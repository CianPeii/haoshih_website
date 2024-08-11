import styles from "./VendorCard.module.scss";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Buffer } from 'buffer';
import { turnPrice } from "../../utils/turnPrice";

const VendorCard = ({params}) => {
  const [vendorData, setVendorData] = useState([])
  // console.log(params.vid); 檢查是哪一個攤販

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await axios.get(`http://localhost:3200/carts/vendorProducts/${params.vid}`);
        setVendorData(response.data);
      } catch (error) {
        console.error("Error fetching Vendor Data:", error);
      }
    };
    fetchVendorData();
  }, []);

  if (!vendorData) {
    return <tr><td colSpan="5">Loading...</td></tr>;
  }

  return (
    <>
      {vendorData.map((product, index) => {
        const imageData = product.img01;
        const base64String = Buffer.from(imageData.data).toString('base64');
        const imgSrc = `data:image/jpeg;base64,${base64String}`;

        return (
          <div className="col-3" key={index}>
            <div className={`card ${styles.cardBg}`}>
              <img
                className="rounded-3 overflow-hidden mx-3 mt-3"
                src={imgSrc}
                alt=""
              />
              <div className="card-body">
                <h6 className={`card-title ${styles.cardTitle}`}>
                  {product.content}
                </h6>
                <p className="card-text text-center text-red">NT{turnPrice(product.price)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default VendorCard;
