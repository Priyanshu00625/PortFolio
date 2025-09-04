import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import Hero from "./Hero";
import Join from "./Join";
import KnowMore from "./KnowMore";
import Offer from "./Offer";
import RecentProject from "./RecentProject";
import ThinkAboutMe from "./ThinkAboutMe";


export default function Home() {
    return(
        <div className='bg-[url(./images/body_bg.png)] bg-contain'>
              <Navbar></Navbar>
              <Hero></Hero>
            <KnowMore></KnowMore>
            <Offer></Offer>
            <RecentProject></RecentProject>
            <ThinkAboutMe></ThinkAboutMe>
            <Join></Join>
            <Footer></Footer>
            </div>
    )
}