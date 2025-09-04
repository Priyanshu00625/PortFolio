export default function RecentProjectItem({ image }) {
  return (
    <div className="flex p-10 ">
      <div className=" h-75 w-full rounded ">
        <img
          src={image}
          alt="Project Image"
          className="bg-cover rounded-2xl transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-110 "
        />
      </div>
    </div>
  );
}
