import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import MemberForm from "../components/MemberForm";
import ChatBtn from "../components/ChatBtn";
const MemberIndexNormal = () => {
  return (
    <>
      <NavBarShop />
      <div class="row mw-100 bg-white">
        <div className="col-2  border-end border-3">
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
