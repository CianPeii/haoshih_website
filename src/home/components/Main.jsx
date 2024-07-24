import { useState } from "react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <div className="d-flex position-relative">
        <div className={styles.rectangle}>
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}> </div>
        </div>
        <div className="w-100">
          <div>
            <img
              className={`w-75 ${styles.mainImg}`}
              src="images/img/home.png"
              alt="homeImg"
            />
          </div>
          <div className="position-absolute top-25 end-0">
            <img
              className="w-100 object-fit-cover"
              src="images/img/sticker.png"
              alt="sticker"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
