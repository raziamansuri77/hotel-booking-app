import React from "react";

export default function HomeGalleryCard() {
  return (
    <div className="  ">
      <div className="grid grid-cols-4 gap-8  w-[100%] py-[40px]   ">
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery1.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery2.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery3.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>{" "}
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery4.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>{" "}
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery5.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>{" "}
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery6.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>{" "}
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery7.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>{" "}
        <div className=" h-[200px] overflow-hidden cursor-pointer">
          <div className="h-[100%] bg-red-500 bg-[url('public/gallery8.jpg')]  bg-cover duration-500 hover:scale-110"></div>
        </div>
      </div>
    </div>
  );
}
