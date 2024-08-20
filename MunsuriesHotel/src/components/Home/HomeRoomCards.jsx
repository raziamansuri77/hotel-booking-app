import React from "react";

export default function HomeRoomCards() {
  return (
    <div className="w-[100%] flex justify-center ">
      <div className="grid grid-cols-3 gap-8  w-[100%] py-[20px] ">
        <div className="bg-white shadow-sm h-[350px] cursor-pointer">
          <div className="h-[60%] overflow-hidden">
            <div className="h-[100%]   bg-[url('public/room1.jpg')]  bg-cover duration-500 hover:scale-110"></div>
          </div>
          <div className="px-12 py-2 text-center font-semibold">
            <div className="text-[25px] ">Bed Room</div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm h-[350px]  cursor-pointer">
          <div className="h-[60%] overflow-hidden">
            <div className="h-[100%] bg-[url('public/room2.jpg')]  bg-cover duration-500 hover:scale-110"></div>
          </div>
          <div className="px-12 py-2 text-center font-semibold">
            <div className="text-[25px] ">Bed Room</div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-sm h-[350px]   cursor-pointer">
          <div className="h-[60%] overflow-hidden">
            <div className="h-[100%]  bg-[url('public/room3.jpg')]  bg-cover duration-500 hover:scale-110"></div>
          </div>
          <div className="px-12 py-2 text-center font-semibold">
            <div className="text-[25px] ">Bed Room</div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-sm h-[350px]  cursor-pointer">
          <div className="h-[60%] overflow-hidden">
            <div className="h-[100%]  bg-[url('public/room4.jpg')]  bg-cover duration-500 hover:scale-110"></div>
          </div>
          <div className="px-12 py-2 text-center font-semibold">
            <div className="text-[25px] ">Bed Room</div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-sm h-[350px]   cursor-pointer">
          <div className="h-[60%] overflow-hidden">
            <div className="h-[100%]  bg-[url('public/room5.jpg')]  bg-cover duration-500 hover:scale-110"></div>
          </div>
          <div className="px-12 py-2 text-center font-semibold">
            <div className="text-[25px] ">Bed Room</div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-sm h-[350px] cursor-pointer  ">
          <div className="h-[60%] overflow-hidden">
            <div className="h-[100%]  bg-[url('public/room6.jpg')]  bg-cover   duration-500 hover:scale-110"></div>
          </div>{" "}
          <div className="px-12 py-2 text-center font-semibold">
            <div className="text-[25px] ">Bed Room</div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
