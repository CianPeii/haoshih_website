import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "./MemberSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import MemberForm from "../components/MemberForm";
import ChatBtn from "../components/ChatBtn";
const MemberIndexNormal = () => {
  return (
    <>
      <NavBarShop />
      <div class="row bg-white postion-relavive">
        <div className="col-2">
          <MemberSideBar />
        </div>
        <div className="col-10 ">
          <SubTitleYellow title="會員資料" />
          <MemberForm />

          <ChatBtn />
        </div>
      </div>
    </>
  );
};

export default MemberIndexNormal;
