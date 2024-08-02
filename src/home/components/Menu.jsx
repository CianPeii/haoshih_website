import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    img: "images/icon/News.png",
    title: "最新消息",
    link: "/news",
  },
  {
    id: 2,
    img: "images/icon/Diversity.png",
    title: "攤販類型",
    link: "/type",
  },
  {
    id: 3,
    img: "images/icon/Travel_Signpost.png",
    title: "市集地圖",
    link: "/map",
  },
  {
    id: 4,
    img: "images/icon/Stall.png",
    title: "我要擺攤",
    link: "http",
  },
  {
    id: 5,
    img: "images/icon/Shopping_Mall.png",
    title: "市集商城",
    link: "/shop",
  },
];

const Menu = () => {
  return (
    <>
      <div>
        <h1 className="fs-1 py-5 text-center font-special">功能介紹</h1>
        <div className="container">
          <div className="row  d-flex justify-content-center mw-100">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
