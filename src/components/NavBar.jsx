const data = [
  {
    id: 1,
    text: "最新消息",
    src: "http",
    hoverText: `市集公告、攤位招
    租、最新活動等相𨶹資訊`,
  },
  {
    id: 2,
    text: "攤販類型",
    src: "http",
    hoverText: `介紹好尸、集內的
多元攤販`,
  },
  {
    id: 3,
    text: "市集地圖",
    src: "http",
    hoverText: `提供市集導覽與交通資訊，帶領你們
走進好尸、集`,
  },
  {
    id: 4,
    text: "我要擺攤",
    src: "https",
    hoverText: `提供攤主們擺攤資
訊與攤位出租申請`,
  },
]; // 改物件

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <nav className="navbar navbar-expand p-3">
          <div className="container-fluid">
            <a href="https://首頁">
              <img className="pe-auto" src="images/img/logo.png" alt="logo" />
            </a>
            <div className="d-flex flex-row">
              {data.map((item) => (
                <a
                  key={item.id}
                  className={`text-decoration-none c-black fs-5 px-3 py-2 hover-bg-secondary rounded-pill`}
                  href="https"
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className="rounded-pill fs-5 px-3 py-2  bg-primary c-white hover-bg-blueGray cursor-point ">
              <a className="link-light text-decoration-none" href="https:">
                市集商城
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
