import Testimonial from "./Testimonial";
export default function ThinkAboutMe() {

  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl text-[#27194C] ">
        What the pople think About Me
      </h1>
      <div className=" relative flex  p-50 items-center ">
        <div className=" overflow-x-scroll scroll whitespace-nowrap flex  scrollbar-hide" >
          <div className="flex gap-3.5 " >
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
            <Testimonial
              image={"./images/testimonial_img_three.jpg"}
              Name={"Preet gujjar "}
              address={"Uttar pradesh"}
              thought={"good developer "}></Testimonial>
          </div>    
        </div>
      </div>
    </div>
  );
}
