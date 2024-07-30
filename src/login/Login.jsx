const Login = () => {
  return (
    <>
      <div className="p-5 ">
        <div className=" d-flex rounded-5 overflow-hidden ">
          {/* 一般用戶 */}
          <div className="bg-primary w-50 f-col-center p-5 ">
            <img className="w-50 f-center" src="images/img/normal.png" alt="" />
            <button className="w-50 fs-4 border-0 bg-white px-1 py-2 m-5 rounded-pill">
              我是顧客
            </button>
          </div>

          {/* 攤主 */}

          <div className="bg-lake w-50 f-col-center p-5 ">
            <img className="w-50 f-center" src="images/img/vendor.png" alt="" />
            <button className="w-50 fs-4 border-0 bg-white px-1 py-2 m-5 rounded-pill">
              我是攤主
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
