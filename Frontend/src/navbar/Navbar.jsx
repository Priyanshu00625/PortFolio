import { useState } from "react";

export default function Navbar() {
  const [open, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!open);
  };
  return (
    <div className="flex bg-[#EDEBF1] h-18">
      <div className="flex w-1/2 justify-between items-center pl-8 text-xl font-extrabold">
        <p>PORTFOLIO</p>
      </div>
      {/* Dasktop view */}
      <div className="w-1/2 md:max-[1023px]:invisible  md:max-[1080px]:text-sm max-sm:invisible max-md:invisible flex justify-between mr-3 pr-6 items-center text-2 font-extrabold ml-60">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Service</a>
        <a href="">Project</a>
        <a href="">Blog</a>
        <button className="rounded-lg bg-[#27194C] text-[#EDEBF1] p-3">
          Contact me
        </button>
      </div>

      {/* Mobile view */}
      <div className=" items-center p-6 cursor-pointer lg:hidden md:block sm:block ">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

{
}
