import Logo from "./Logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white flex h-[60px]">
        <div className="flex items-center justify-between w-full">
          <Image
            className="h-[40px] w-[185px] ml-[15px]"
            src="/Logo.png"
            alt="Logo"
          />
          <div className="flex items-center justify-end">
            <a className="text-[#5E3BEE] mx-3" href="/main">
              Home
            </a>
            <a className="text-black mx-3" href="/recentProjects">
              Portfolio
            </a>
            <a className="text-black mx-3" href="/aboutMe">
              About Me
            </a>
            <a className="text-black mx-3" href="/feedback">
              Testimonials
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
