import React from "react";

const VendorStallInfo = () => {
  return (
    <>
      <h1>VendorStallInfo</h1>
      <div className="d-flex justify-content-center">
        <Button
          className="me-5"
          variant="bg-white border border-2 c-gray rounded-pill px-4 py-2"
          type="button"
          onClick={() => navigate(`/vendor/1/vendorInfo`)}
        >
          取消變更
        </Button>
        <Button
          className="ms-5"
          variant=" bg-blueGray text-white rounded-pill px-4 py-2"
          type="submit"
          onClick={async () => {
            await refetch(); // 先執行 refetch
            navigate(`/vendor/1/vendorInfo`); // 然後導航
          }}
        >
          儲存變更
        </Button>
      </div>
    </>
  );
};

export default VendorStallInfo;
