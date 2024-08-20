import React from "react";

export default function HomeBlogCards() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="h-[460px] bg-white font-semibold">
        <div className="h-[50%] overflow-hidden">
          <div className="h-[100%] bg-[url('public/blog1.jpg')] bg-cover duration-500  hover:scale-110 transition-transform  "></div>
        </div>
        <div className=" px-8   py-6">
          <div className="text-[25px]">Bed Room</div>
          <div className="text-red-500 text-[16px] font-bold">
            The standard chunk
          </div>
          <div>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generatorsIf you are
          </div>
        </div>
      </div>
      <div className="h-[460px] bg-white font-semibold">
        <div className="h-[50%] overflow-hidden">
          <div className="h-[100%] bg-[url('public/blog2.jpg')] bg-cover duration-500  hover:scale-110 transition-transform  "></div>
        </div>
        <div className=" px-8   py-6">
          <div className="text-[25px]">Bed Room</div>
          <div className="text-red-500 text-[16px] font-bold">
            The standard chunk
          </div>
          <div>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generatorsIf you are
          </div>
        </div>
      </div>
      <div className="h-[460px] bg-white font-semibold">
        <div className="h-[50%] overflow-hidden">
          <div className="h-[100%] bg-[url('public/blog3.jpg')] bg-cover duration-500  hover:scale-110 transition-transform  "></div>
        </div>
        <div className=" px-8   py-6">
          <div className="text-[25px]">Bed Room</div>
          <div className="text-red-500 text-[16px] font-bold">
            The standard chunk
          </div>
          <div>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generatorsIf you are
          </div>
        </div>
      </div>
    </div>
  );
}
