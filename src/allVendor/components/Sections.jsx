import SectionBtn from "./SectionBtn";

const title = ["全部", "服飾", "飾品", "手作", "美食", "寵物", "其他"];

const Sections = () => {
  return (
    <>
      <div className="p-5 d-flex ">
        {title.map((item, index) => (
          <SectionBtn key={index} title={item} />
        ))}
      </div>
    </>
  );
};

export default Sections;
