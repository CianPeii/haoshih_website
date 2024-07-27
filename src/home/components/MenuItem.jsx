import styles from "./MenuItem.module.scss";
import { openLink } from "../../utils/link.js";

const MenuItem = ({ item }) => {
  const { img, title, link } = item;

  return (
    <>
      <div
        className={`d-flex flex-column align-items-center col-4 m-5  py-5 rounded-4   ${styles.menuItems}`}
        onClick={() => openLink(link)}
      >
        <img className="w-50" src={img} alt={title} />
        <h2 className="pt-4 text-white">{title}</h2>
      </div>
    </>
  );
};

export default MenuItem;
