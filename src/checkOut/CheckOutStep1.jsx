import NavBarShop from "../components/NavBarShop";
import Arrows from "../components/Arrows";
import {
  Container,
  Table,
  Form,
  Card,
  Button,
  Image,
  InputGroup,
} from "react-bootstrap";

const CheckOutStep1 = () => {
  return (
    <>
      <NavBarShop />
      <div className="p-5">
        <Arrows />
        <Container>
          <Card className="my-5">
            <Card.Body>
              <Table borderless>
                <thead>
                  <tr className="border-bottom">
                    <th colSpan="5">店家ABC</th>
                  </tr>
                  <tr className="border-bottom ">
                    <th className="text-center">商品</th>
                    <th className="text-center">單價</th>
                    <th className="text-center">數量</th>
                    <th className="text-center">小計</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="f-end-end mt-5 gap-3 ">
            <h4>總金額：NT$999</h4>
            <Button variant="danger rounded-pill px-4 py-2">前往結帳</Button>
          </div>
        </Container>
      </div>
    </>
  );
};
export default CheckOutStep1;
