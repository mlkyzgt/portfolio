import Image from "next/image";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Skills from "./components/skills";
import AboutMe from "./components/aboutMe";
import RecentProjects from "./components/recentProjects";
import Feedback from "./components/feedback";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./components/RobotoFont.css"
export default function Home() {
  return (
   <>
   <div className="font">
   <Navbar></Navbar><Main></Main><Skills></Skills><AboutMe></AboutMe><RecentProjects></RecentProjects><Feedback></Feedback><Contact></Contact><Footer></Footer>
   </div>
   </>
   
  );
}
