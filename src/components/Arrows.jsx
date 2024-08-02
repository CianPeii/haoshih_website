import Arrow from "./Arrow";

const Arrows = () => {
  return (
    <>
      <div className="f-space-evenly">
        <Arrow color="yellow" title="確認商品" />
        <Arrow color="white" title="寄送資訊" />
        <Arrow color="white" title="付款方式" />
        <Arrow color="white" title="完成訂單" />
      </div>
    </>
  );
};

export default Arrows;
