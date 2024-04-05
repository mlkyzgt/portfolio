import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white flex h-16">
      <div className="flex items-center justify-between w-full">
        <Link href="/aboutMe">
          About Me
        </Link>
        <Link href="/main">
          Home
        </Link>
        <Link href="/recentProjects">
          Portfolio
        </Link>
        <Link href="/feedback">
          Testimonials
        </Link>
      </div>
    </nav>
  );
}
