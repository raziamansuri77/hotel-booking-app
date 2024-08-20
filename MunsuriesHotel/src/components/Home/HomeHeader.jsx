import React, { useState, useEffect } from "react";
export default function HomeHeader() {
  const images = [
    'url("public/banner1.jpg")',
    'url("public/banner2.jpg")',
    'url("public/banner3.jpg")',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: images[currentIndex] }}
        className="w-[100%] h-[700px]  "
      ></div>
      <div className="absolute top-[20%] left-[12%]  flex">
        <div className="w-[5px] h-[370px] bg-red-600"></div>
        <div className="bg-black w-[450px] text-white opacity-80  space-y-4 p-8">
          <div className="text-[30px] font-semibold text-center">
            BOOK A ROOM ONLINE
          </div>
          <div>Arrival</div>
          <input
            type="date"
            placeholder="dd-mm-yyy"
            className="  p-2 w-full bg-black border border-white cursor-pointer"
          />
          <div>Departure</div>
          <input
            type="date"
            placeholder="dd-mm-yyy"
            className="  p-2 w-full bg-black border border-white cursor-pointer "
          />
          <div className="bg-red-600 duration-500 p-4 w-[140px] py-3 text-center rounded-full mx-auto hover:bg-white hover:text-red-600 cursor-pointer">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
}
