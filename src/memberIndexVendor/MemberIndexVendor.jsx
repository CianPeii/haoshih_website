import NavBarShop from "../components/NavBarShop";
import MemberVenderSideBar from "../components/MemberVenderSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import MemberForm from "../components/MemberForm";
import ChatBtn from "../components/ChatBtn";
const MemberIndexVendor = () => {
  return (
    <>
      <NavBarShop />
      <div class="row bg-white postion-relavive">
        <div className="col-3  border-end border-3">
          <MemberVenderSideBar />
        </div>
        <div className="col-9 ">
          <SubTitleYellow title="會員資料" />
          <MemberForm />
          <ChatBtn />
        </div>
      </div>
    </>
  );
};
export default MemberIndexVendor;
