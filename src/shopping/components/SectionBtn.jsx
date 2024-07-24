import styles from "./SectionBtn.module.scss";

const SectionBtn = ({ title }) => {
  return (
    <>
      <div className={styles.sectionBtn}>{title}全部</div>
    </>
  );
};
export default SectionBtn;
