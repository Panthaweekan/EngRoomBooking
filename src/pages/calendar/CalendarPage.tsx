import React from "react";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const CalendarPage: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="w-[1000px] overflow-y-auto p-10">
        <div className="flex flex-row gap-2">
          <img src="/imgs/calendar.svg" />
          <h1 className="text-maincolor text-xl">ปฎิทินการจองห้อง</h1>
        </div>

        <p className="text-sm font-light my-4">หมายเหตุ/รายละเอียด</p>
        <div className="flex flex-row items-center gap-4 my-2">
          <p className="text-base font-normal my-4">เลือกแสดง</p>
          <div
            className="flex flex-row text-start justify-center items-center px-4 p-1 w-max border-2 rounded-[24px] bg-white gap-4"
            style={{ borderColor: "#FFEFE0" }}
          >
            <p>ห้องประชุมสโมสรนักศึกษา</p>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex flex-row text-start justify-center items-center px-4 p-1 w-max rounded-[24px] bg-white gap-4 ml-auto">
            <CheckCircleIcon className="w-4 h-4 text-maincolor" />
            <p className="text-maincolor-g">การจองของฉัน</p>
          </div>
        </div>
        <img src="/imgs/mock_calendar.svg" />
      </div>
    </div>
  );
};

export default CalendarPage;
