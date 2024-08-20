import React from "react";

export default function AboutHero() {
  return (
    <div>
      <div className="text-[45px] font-bold text-center p-6 bg-[#0F1521] text-white">
        ABOUT US
      </div>
      <div className="flex py-20    pl-[200px] w-full gap-8">
        <div className="w-[35%] space-y-4   ">
          <div></div>
          <div className="text-[18px]">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
            Today it's seen all around the web; on templates, websites, and
            stock designs. Use our generator to get your own, or read on for the
            authoritative history of lorem ipsum.
          </div>
          <div className="bg-black w-[150px] duration-500    rounded-full text-center text-[20px] text-white p-2 cursor-pointer hover:bg-red-600">
            Read More
          </div>
        </div>
        <div className="w-[58%] h-[450px] overflow-hidden">
          <div className=" w-[100%] h-[100%] hover:scale-110 duration-500 transition-transform cursor-pointer   bg-cover bg-center bg-[url('public/about.png')] border-black"></div>
        </div>
      </div>
    </div>
  );
}
