import NavBar from "../components/NavBar";
import MainBg from "../components/MainBg";
import TypeCard from "./components/TypeCard";

const Type = () => {
  return (
    <>
      <NavBar />
      <MainBg page="type" title="攤位類型" />
      <div className="p-5">
        <TypeCard />
      </div>
    </>
  );
};
export default Type;
