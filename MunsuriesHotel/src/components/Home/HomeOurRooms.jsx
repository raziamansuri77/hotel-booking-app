import React from "react";
import HomeRoomCards from "./HomeRoomCards";

export default function HomeOurRooms() {
  return (
    <div className="bg-[#F4F5F7] w-[100%] py-[30px] flex justify-center">
      <div className="max-w-6xl">
        <div className="text-[45px] font-bold text-center">OUR ROOMS</div>
        <HomeRoomCards />
      </div>
    </div>
  );
}
