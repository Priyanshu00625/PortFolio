import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  let [open, setopen] = useState(false);

  return (
    <div className="navbar">
      <div className="left">
        <p>PORTFOLIO</p>
      </div>
      <div className="right  md:max-[995px]:invisible sm:max:invisible">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Service</a>
        <a href="">Project</a>
        <a href="">Blog</a>
        <button className="contact-btn" >Contect me</button>
      </div>
    </div>
  );
}
