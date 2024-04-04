import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white flex h-[60px]">
        <div className="flex items-center justify-between w-full">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={185}
              height={40}
              className="ml-[15px]"
            />
          </div>
          <div className="flex items-center justify-end">
            <Link href="/main">
              <a className="text-[#5E3BEE] mx-3">Home</a>
            </Link>
            <Link href="/recentProjects">
              <a className="text-black mx-3">Portfolio</a>
            </Link>
            <Link href="/aboutMe">
              <a className="text-black mx-3">About Me</a>
            </Link>
            <Link href="/feedback">
              <a className="text-black mx-3">Testimonials</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
