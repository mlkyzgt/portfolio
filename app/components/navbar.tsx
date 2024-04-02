import Logo from "./Logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="bg-white flex h-[60px]">
        <div className="flex items-center justify-between w-full">
          <img
            className="h-[40px] w-[185px] ml-[15px]"
            src="./Logo.png"
            alt="Logo"
          />
          <div className="flex items-center justify-end">
            <a className="text-[#5E3BEE] mx-3" href="">
              Home
            </a>
            <a className="text-black mx-3" href="">
              Portfolio
            </a>
            <a className="text-black mx-3" href="">
              About Me
            </a>
            <a className="text-black mx-3" href="">
              Testimonials
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
