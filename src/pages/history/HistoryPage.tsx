import React from "react";

const HistoryPage: React.FC = () => {
  return (
    <div className="w-screen overflow-y-auto p-10">
      <div className="flex flex-row gap-2 mb-4">
        <img src="/imgs/history.svg" />
        <h1 className="text-maincolor text-xl">ประวัติการจองห้อง</h1>
      </div>

      <img src="/imgs/mock_history.svg" />
    </div>
  );
};

export default HistoryPage;
