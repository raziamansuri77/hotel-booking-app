import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className=" shadow-xl">
      <div className="flex justify-between items-center  max-w-6xl  mx-auto p-2  ">
        <div>
          <img
            src="public/Logo.png"
            alt=""
            className="w-[200px] cursor-pointer"
          />
        </div>
        <div className="font-semibold flex gap-8 ">
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
          <div>Login</div>
        </div>
      </div>
    </div>
  );
}
