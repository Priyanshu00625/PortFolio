import RecentProjectItem from "./RecentProjectItem";

export default function RecentProject() {
  return (
    <div className="pt-30 text-center font-bold mb-50 ">
      <h1 className="text-5xl mb-8 text-[#27194C]">Recent Projects</h1>
      <p className="text-[#27194C]">
        I've diverse background in technology, which mean I'm always learning
        new skills.
      </p>
      <div className="flex flex-wrap w-full">
      <RecentProjectItem
        image={"./images/project_img_one.jpg"}></RecentProjectItem>
      <RecentProjectItem
        image={"./images/project_img_two.jpg"}></RecentProjectItem>
      <RecentProjectItem
        image={"./images/project_img_three.jpg"}></RecentProjectItem>
      <RecentProjectItem
        image={"./images/project_img_four.jpg"}></RecentProjectItem>
      <RecentProjectItem
        image={"./images/project_img_five.jpg"}></RecentProjectItem>
        <RecentProjectItem
        image={"./images/project_img_six.jpg"}></RecentProjectItem>
        </div> 
    </div>
  );
}
