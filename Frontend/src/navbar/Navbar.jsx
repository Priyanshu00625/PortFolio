import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
const handleHome = ()=>{
  navigate("/")
}
const handleAbout = ()=>{
  navigate("/about")
}
const handleService= ()=>{
  navigate("/service")
}
const handleContect = ()=>{
  navigate("/contect")
}
const handleproject = ()=>{
  navigate("/project")
}
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (    <div className="flex bg-[#EDEBF1] h-18 fixed  w-[100%] z-50">
      {/* Logo */}
      <div className="flex w-1/2 justify-between items-center ml-10 text-xl font-extrabold">
        <p>PORTFOLIO</p>
      </div>

      {/* Desktop view */}
      <div className="hidden w-1/2 lg:flex justify-between mr-3 pr-6 items-center text-2 font-extrabold ml-60 max-[1228px]:text-sm">
        <ul className="flex">
          <li className="p-5 cursor-pointer hover:text-blue-700"onClick={handleHome} >Home</li>
          <li className="p-5 cursor-pointer hover:text-blue-700" onClick={handleAbout}>About</li>
          <li className="p-5 cursor-pointer hover:text-blue-700" onClick={handleService}>Service</li>
          <li className="p-5 cursor-pointer hover:text-blue-700" onClick={handleproject}>Project</li>
          
          <button className="rounded-lg bg-[#27194C] text-[#EDEBF1] h-10 mt-3 p-4 pt-2 text-center " onClick={handleContect }>
            Contact me
          </button>
        </ul>
      </div>

      {/* Hamburger / Close icon (mobile) */}
      <div
        className="lg:hidden flex items-center justify-end p-6 cursor-pointer w-7xl"
        onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-2xl"></i> 
      </div>

      {/* Mobile menu (Slide from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-55 bg-[#EDEBF1] text-base font-extrabold p-6 transform transition-transform duration-500 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
        <i className="fa-solid fa-x text-center" onClick={toggleMenu}></i>
        <ul className="flex flex-col gap-6 mt-20">
          <li className="cursor-pointer" onClick={toggleMenu}>Home</li>
          <li className="cursor-pointer" onClick={toggleMenu}>About</li>
          <li className="cursor-pointer" onClick={toggleMenu}>Service</li>
          <li className="cursor-pointer" onClick={toggleMenu}>Project</li>
          <li className="cursor-pointer" onClick={toggleMenu}>Blog</li>
          <button
            className="rounded-lg bg-[#27194C] text-[#EDEBF1] p-3 w-fit"
            onClick={toggleMenu}>
            Contact me
          </button>
        </ul>
      </div>
    </div>
  );
}
