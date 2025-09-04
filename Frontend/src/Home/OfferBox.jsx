export default function OfferBox({ icon, hadding, text }) {
  return (
    <div className=" ml-20 mt-20 ">
    <div className="h-55 w-90 bg-[#674CAE]  text-center rounded-2xl   hover:bg-[#27194C]">
      <div className="flex">
        <img
          className="bg-white flex justify-center w-10 p-2 h-10 items-center m-6 rounded "
          src={icon}
          alt="Icon"></img>
      </div>
      <h1 className="text-white text-2xl text-start pl-5">{hadding}</h1>
      <p className="text-white pt-4 text-start pl-5">{text}</p>
    </div>
    </div>
  );
}
