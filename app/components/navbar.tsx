import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white flex h-16">
      <div className="flex items-center justify-between w-full">
        <div className="h-40 w-185 ml-5 mt-[125px]">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={185}
            height={40}
          />
        </div>
        <div className="flex items-center justify-end">
            <a className="text-black mx-3" href="#aboutMe">About Me</a>
            <a className="text-black mx-3" href="#main">Home</a>
            <a className="text-black mx-3" href="#recentProjects">Portfolio</a>
            <a className="text-black mx-3" href="#feedback">Testimonials</a>
          </div>
      </div>
    </nav>
  );
}
