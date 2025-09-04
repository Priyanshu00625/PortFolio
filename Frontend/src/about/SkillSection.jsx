import { useState, useEffect } from "react";
export default function SkillSection() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full h-185 bg-gradient-to-r from-[#362171] to-[#7235ed] flex">
      <div className="w-[60%] text-start pt-15 pl-20  ">
        <h1 className="text-white text-5xl font-bold"> My skill</h1>
        <p className="text-[100%] text-white pt-10">
          Integrate with appwrite flexible to your needs and ensuring you can
          code <br />
          with the language you want at any time
        </p>
        <div className="flex flex-wrap pt-10 gap-5 ">
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>HTML</p>
          </div>
          <div className="w-[40%] h-16 border text-white  text-center pt-5 font-bold">
            <p>CSS</p>
          </div>
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>JAVASCRIPT</p>
          </div>
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>REACT.JS</p>
          </div>
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>EXPRESS.JS</p>
          </div>
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>PYTHON</p>
          </div> 
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>JAVA</p>
          </div>
          <div className="w-[40%] h-16 border text-white text-center pt-5 font-bold">
            <p>TAILWIND</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] pt-30">
        <img src="./images/about_skill_img.png " alt="skill foto" />
      </div>
    </div>
  );
}
