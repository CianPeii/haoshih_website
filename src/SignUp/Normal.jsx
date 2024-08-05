import Footer from "../components/Footer";
import NavBarShop from "../components/NavBarShop";
import NormalForm from "./components/NormalForm";
import SingUpMain from "./components/SingUpMain";

const Normal = () => {
  return (
    <>
      <NavBarShop />
      <SingUpMain />
      <div className="f-center p-5 border">
        <NormalForm />
      </div>
      <Footer />
    </>
  );
};
export default Normal;
