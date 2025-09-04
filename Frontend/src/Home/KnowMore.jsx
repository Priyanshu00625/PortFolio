export default function KnowMore() {
  return (
    <div className="flex mb-50 pt-50">
      <div className="w-[55%]">
        <div className="h-120 w-120 ml-20 rounded-2xl  mt-13 flex absolute">
          <img
            src="../public/images/profile.jpeg"
            alt="profile image"
            className="rounded-3xl  object-cover"
          />
        </div>
        <div className="h-120 w-110 bg-[#27194c] ml-40 rounded-2xl "></div>
      </div>
      <div className="w-[60%]">
        <h2 className="font-extrabold text-4xl text-[#27194C] pt-20">
          Get to Know More
        </h2>
        <p className="pt-5 text-[1.5rem] text-[#1E182D] mt-10 ">
          I’m a BCA student with a strong interest in Web Development <br /> and
          Software Engineering. I enjoy building creative and  efficient <br /> digital
          solutions, and I’m always eager to learn new technologies <br /> to improve
          my skills. My goal is to grow as a developer and <br /> contribute  to
          meaningful projects that make an impact.
        </p>
      </div>
    </div>
  );
}
