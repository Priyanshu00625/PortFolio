
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {

  return (
    <div className="pt-50 flex mb-40">
      <div className="w-[50%]">
        <p className="pl-11 font-extrabold text-4xl text-[#27194c] sm:hidden md:hidden">
          Welcome to My ProtFolio
        </p>
        <div className="flex pt-10 pl-11 text-5xl font-extrabold">
          <h2 className="text-[#27194c]">I am &nbsp;</h2>
          <span className="text-[#674CAE]">
            <Typewriter
              words={["Priyanshu Rathi", "Web Developer"]}
              loop={0}
              cursor
              cursorStyle="__"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className="pl-11 pt-11 text-4xl font-medium text-[#27194C]">
          React Developer
        </p>
        <button className="mt-11 ml-11 bg-[#27194C] p-4 text-amber-100 rounded-2xl">
          Learn More
        </button>
      </div>
      <div className="w-[50%] pr-35">
        <div className="h-120 w-120 ml-30 rounded-2xl  mt-13 flex absolute">
          <img
            src="../public/images/profile.jpeg"
            alt="profile image"
            className="rounded-3xl  object-cover"
          />
        </div>
        <div className="h-120 w-110 bg-[#27194c] ml-50 rounded-2xl "></div>
      </div>
    </div>
  );
}
