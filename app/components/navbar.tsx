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
            <a className="text-black mx-3" href="/aboutMe.tsx">About Me</a>
            <a className="text-black mx-3" href="/main.tsx">Home</a>
            <a className="text-black mx-3" href="/recentProjects.tsx">Portfolio</a>
            <a className="text-black mx-3" href="/feedback.tsx">Testimonials</a>
          </div>
      </div>
    </nav>
  );
}
