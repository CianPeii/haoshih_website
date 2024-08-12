import Footer from "../components/Footer";
import NavBarShop from "../components/NavBarShop";
import NormalForm from "./components/NormalForm";
import SingUpMain from "./components/SingUpMain";

const Normal = () => {
  const cartVisible = 1;
  return (
    <>
      <NavBarShop cartVisible={cartVisible}/>
      <SingUpMain />
      <div className="f-center p-5 border">
        <NormalForm />
      </div>
      <Footer />
    </>
  );
};
export default Normal;
