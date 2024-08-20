export default function HomeAbout() {
  return (
    <div className="flex  py-20">
      <div className="w-[40%] space-y-4 px-28">
        <div>
          <div></div>
          <div className="text-[45px] font-bold">ABOUT US</div>
        </div>
        <div className="text-[18px]">
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software. Today
          it's seen all around the web; on templates, websites, and stock
          designs. Use our generator to get your own, or read on for the
          authoritative history of lorem ipsum.
        </div>
        <div className="bg-black w-[150px] duration-500 hover:bg-red-600  rounded-full text-center text-[20px] text-white p-2 cursor-pointer">
          Read More
        </div>
      </div>
      <div className="w-[50%] h-[450px] overflow-hidden">
        <div className=" w-[100%] h-[100%] hover:scale-110 duration-500 transition-transform cursor-pointer   bg-cover bg-center bg-[url('public/about.png')] border-black"></div>
      </div>
    </div>
  );
}
