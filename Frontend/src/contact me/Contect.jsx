import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import ContectForm from "./ContectForm";

export default function Contect() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-center pt-40 text-5xl font-bold text-[#27194C]">
        Stay Touch With Priyanshu
      </h1>
      <p className="text-center pt-7 font-bold text-[#27194C]">
        Curious about the person behind? Dive into my story, <br /> skills,
        and the journey that led me to the world
      </p>
      <ContectForm></ContectForm>
      <Footer></Footer>
    </>
  );
}
