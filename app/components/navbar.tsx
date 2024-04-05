import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white flex h-16">
      <div className="flex items-center justify-between w-full">
        <Link href="/aboutMe">
          <a id="aboutMeLink" className="text-black mx-3">About Me</a>
        </Link>
        <Link href="/main">
          <a id="homeLink" className="text-black mx-3">Home</a>
        </Link>
        <Link href="/recentProjects">
          <a id="portfolioLink" className="text-black mx-3">Portfolio</a>
        </Link>
        <Link href="/feedback">
          <a id="testimonialsLink" className="text-black mx-3">Testimonials</a>
        </Link>
      </div>
    </nav>
  );
}
