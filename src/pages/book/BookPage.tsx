import React from "react";

const BookPage: React.FC = () => {
  return (
    <div className="w-screen overflow-y-auto p-10">
      <div className="flex flex-row gap-2">
        <img src="/imgs/bookmark.svg" />
        <h1 className="text-maincolor text-xl">จองห้อง</h1>
      </div>

      <p className="text-sm font-light my-4">หมายเหตุ/รายละเอียด</p>
      <img src="/imgs/mock_book.svg" />
    </div>
  );
};

export default BookPage;
