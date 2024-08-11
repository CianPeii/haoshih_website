import { Table, Card } from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";

const CheckOutCard = () => {
  return (
    <>
      <Card className="my-5">
        <Card.Body>
          <Table borderless>
            <thead>
              <tr className="">
                <th colSpan="5">店家ABC</th>
              </tr>
              <tr className="border-bottom ">
                <th className="text-center">商品</th>
                <th className="text-center">單價</th>
                <th className="text-center">數量</th>
                <th className="text-center">小計</th>
              </tr>
              <CheckOutItem />
              <CheckOutItem />
            </thead>
            <tbody></tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};
export default CheckOutCard;
