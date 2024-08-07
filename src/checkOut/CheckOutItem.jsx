import { Image } from "react-bootstrap";


const CheckOutItem = () => {
  return (
    <>
      <tr>
        <td>
          <div className="f-start">
            <div
              className="overflow-hidden rounded"
              style={{ width: "100px", height: "100px" }}
            >
              <Image
                src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/326709/ba0a4f1dfb7aad9e.jpg"
                alt="商品圖片"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <span className="ms-3">商品名字1</span>
          </div>
        </td>
        <td className="text-center align-middle">NT$ 999</td>
        <td className="text-center align-middle">1</td>
        <td className="text-center align-middle">NT$ 240</td>
      </tr>
    </>
  );
};
export default CheckOutItem;
