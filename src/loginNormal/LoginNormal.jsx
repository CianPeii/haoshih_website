import "bootstrap-icons/font/bootstrap-icons.css";
import LoginForm from "../components/LoginForm";

const LoginNormal = () => {
  return (
    <>
      <div className="p-5 ">
        <div className=" d-flex rounded-5 overflow-hidden ">
          {/* 一般用戶 */}
          <div className="bg-primary w-50 f-col-around p-5 ">
            <img className="w-25 f-center" src="images/icon/stall.png" alt="" />
            <p className="text-center w-50">
              探索創意，感受熱情 享受與創作者交流的美好時光
            </p>
            <i className="bi bi-arrow-left-circle fs-1 fw-bolder c-white"></i>
          </div>

          {/* 登入 */}

          <div className="bg-white w-50 f-col-center p-5  bg-lightGray">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginNormal;
