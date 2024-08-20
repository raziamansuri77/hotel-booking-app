import React from "react";
import HomeBlogCards from "./HomeBlogCards";

export default function HomeBlog() {
  return (
    <div className="relative">
      <div className="w-[100%] h-[100vh] bg-[url('public/about.png')] bg-cover opacity-40 "></div>
      <div className="absolute top-4 left-[180px]">
        <div className="max-w-6xl mx-auto   h-[100vh]">
          <div className="text-[45px] font-bold text-black pt-6 text-center ">
            BLOG
          </div>
          <div className="pb-8 text-center text-black font-semibold text-[18px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
          <HomeBlogCards />
        </div>
      </div>
    </div>
  );
}
