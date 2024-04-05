import Image from "next/image";

interface CustomLinkProps {
  href: string;
  text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text }) => {
  return <a className="text-black mx-3" href={href}>{text}</a>;
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white flex h-[60px]">
      <div className="flex items-center justify-between w-full">
        <div>
          <Image
            className="h-[40px] w-[185px] ml-[15px]"
            src={"/Logo.png"}
            alt="Logo"
          />
        </div>
        <div className="flex items-center justify-end">
          <CustomLink href="/aboutMe.tsx" text="About Me" />
          <CustomLink href="/main.tsx" text="Home" />
          <CustomLink href="/recentProjects.tsx" text="Portfolio" />
          <CustomLink href="/feedback.tsx" text="Testimonials" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
