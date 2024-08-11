import React from 'react'; 
import styles from "./SingUpMain.module.scss";
const SingUpMain = ({ title }) => {
  return (
    <>
      <div className={`position-relative overflow-hidden ${styles.mainBg}`}>
        <div className={`position-absolute end-0 ${styles.mainImg}`}>
          <img className="w-100" src="images/img/sun.png" alt="" />
        </div>
        <div
          className={`bg-secondary fs-1 font-special position-absolute start-0 px-4 ${styles.mainTitle}`}
        >
          {title}
        </div>
      </div>
    </>
  );
};
export default SingUpMain;
