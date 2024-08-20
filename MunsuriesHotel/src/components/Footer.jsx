import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div
        className="bg-[#0F1521] w-full py-10 border border-transparent border-b-[3px]  border-b-red-600
    "
      >
        <div
          className="flex max-w-6xl mx-auto justify-between 
      "
        >
          <div className="text-[20px] text-white space-y-4">
            <div className="text-[25px] font-bold  border-transparent border-b-[3px] border-b-red-600 w-[140px]">
              {" "}
              Contact US
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaLocationDot />
              </div>
              <div> Address</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <IoCall />
              </div>
              <div> +01 1234569540</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <MdEmail />
              </div>
              <div>
                <a href="mailto:raziamansuri77@gmail.com">
                  raziamansuri77@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="text-[20px] text-white space-y-2">
            <div className="text-[25px] font-bold  border-transparent border-b-[3px] border-b-red-600">
              Menu Link
            </div>
            <div className="hover:text-red-600 duration-500 cursor-pointer  hover:underline   transition: 0.3s  hover:underline-offset-8 ">
              <Link to="/">HOME</Link>
            </div>
            <div className="hover:text-red-600 duration-500   cursor-pointer hover:underline   hover:underline-offset-8 ">
              <Link to="/about"> ABOUT</Link>
            </div>
            <div className="hover:text-red-600 duration-500  cursor-pointer hover:underline   hover:underline-offset-8 ">
              <Link to="/ourroom"> OUR ROOM</Link>
            </div>
            <div className="hover:text-red-600  duration-500 hover:underline   hover:underline-offset-8 ">
              <Link to="/gallery"> GALLERY</Link>
            </div>
            <div className="hover:text-red-600 duration-500 cursor-pointer  hover:underline   hover:underline-offset-8 ">
              <Link to="/blog"> BLOG</Link>
            </div>
            <div className="hover:text-red-600 duration-500 cursor-pointer  hover:underline   hover:underline-offset-8 ">
              <Link to="/contact"> CONTACT US</Link>
            </div>
          </div>
          <div className="text-[20px] text-white space-y-4">
            <div className="text-[25px] font-bold  border-transparent border-b-[3px] border-b-red-600 w-[140px]">
              {" "}
              News letter
            </div>
            <input
              type="text"
              className="p-3 w-[400px] text-black outline-none "
              placeholder="Enter your email"
            />
            <div className="p-3 bg-white flex items-center justify-center text-[#FB151A] font-semibold w-[200px]">
              SUBSCRIBE
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-8 border border-transparent border-b-[3px]  border-b-red-600
    "
      >
        <div className="text-center text-[20px]  ">
          © 2024 All Rights Reserved. Design by Razia_Mansuri💖
        </div>
      </div>
    </div>
  );
}
