import styles from "./SectionBtn.module.scss";

const SectionBtn = ({ title }) => {
  return (
    <>
      <div
        className={`f-center w-100 mx-2 px-2 py-3 fs-4 text-center bg-white rounded-3  cursor-point ${styles.sectionBtn}`}
      >
        {title}
      </div>
    </>
  );
};
export default SectionBtn;
