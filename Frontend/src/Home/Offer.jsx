import OfferBox from "./OfferBox";

export default function Offer() {
  return (
    <div className="w-full h-250 bg-gradient-to-r from-[#27194c] to-[#5e4a87]">
      <h5 className="text-center pt-30  text-4xl text-blue-300 font-extrabold ">
        What do I Offer
      </h5>
      <div className=" flex flex-wrap h-70 justify-center items-center mt-27  ml-10 w-[90%] ">
        <OfferBox
          icon={"./images/service_icon_one.png"}
          hadding={"Web Application"}
          text={
            "Designing and developing interactive and web applications using React"
          }></OfferBox>
        <OfferBox
          icon={"./images/service_icon_two.png"}
          hadding={"Single Page Applications"}
          text={
            "Building SPAs that provide a seamless and fluid user experience"
          }></OfferBox>
        <OfferBox
          icon={"./images/service_icon_three.png"}
          hadding={"Custom Component"}
          text={
            "eveloping reusable and modular UI components using React'sre."
          }></OfferBox>
        <OfferBox
          icon={"./images/service_icon_four.png"}
          hadding={"Integration with APIs"}
          text={
            "Integrating web applications with various APIs to fetch"
          }></OfferBox><OfferBox
          icon={"./images/service_icon_five.png"}
          hadding={"State Management"}
          text={
            "Implementing state management using React's built-in state or external"
          }></OfferBox><OfferBox
          icon={"./images/service_icon_six.png"}
          hadding={"UI Design and Optimization"}
          text={
            "Creating visually appealing user interfaces with a focus on usability"
          }></OfferBox>
      </div>
    </div>
  );
}
