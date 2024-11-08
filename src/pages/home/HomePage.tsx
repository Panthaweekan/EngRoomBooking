import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-screen overflow-y-auto p-10">
      <h1 className="text-black font-kanit">
        Welcome to the Engineering Room Booking System
        จองห้องเรียนวิศวกรรมศาสตร์
      </h1>
      <p className="text-black">Book your rooms easily and efficiently.</p>
    </div>
  );
};

export default HomePage;
