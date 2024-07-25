import styles from "./SectionBtn.module.scss";

const SectionBtn = ({ title }) => {
  return (
    <>
      <div className={styles.sectionBtn}>{title}</div>
    </>
  );
};
export default SectionBtn;
