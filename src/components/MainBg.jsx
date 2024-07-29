import styles from "./MainBg.module.scss";

const MainBg = ({ title, page }) => {
  return (
    <>
      <div className="position-relative">
        <div className={`${styles.mainBg} ${styles[`${page}BgUrl`]}`}>
          <div className={`fs-1 bg-blueGray c-white ${styles.mainText}`}>
            {title}
          </div>
        </div>
      </div>
    </>
  );
};
export default MainBg;
