import React from "react";
import HomeGalleryCard from "./HomeGalleryCard";

export default function HomeGallery() {
  return (
    <div className=" w-[100%] py-[40px]  ">
      <div className="max-w-6xl mx-auto">
        <div className="text-[45px] font-bold text-center">GALLERY</div>
        <HomeGalleryCard />
      </div>
    </div>
  );
}
