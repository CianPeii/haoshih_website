import { useState } from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
      <div className="p-5 ">
        <div className="position-relative">
          <div className="w-25">
            <img className={styles.sunImg} src="images/img/sun.png" alt="sun" />
          </div>
          <div className="w-100 text-center position-relative">
            <div className="w-50 text-center position-absolute top-50 start-50 translate-middle">
              <h1 className="py-5 w-75 ">關於我們</h1>
              <p className="fs-2 w-75 lh-lg  text-wrap">
                為大家帶來美好體驗,好是生活好是生活,為大家帶來美好體驗,好是生活好是生活
              </p>
            </div>
            <div className="w-100">
              <img className="w-75" src="images/img/about.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
