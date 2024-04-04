import Logo from "./Logo.png";
import Image from "next/image";
import TwitterIcon from "./Twitter.png";
import FacebookIcon from "./Facebook.png";
import InstagramIcon from "./Instagram.png";
import LinkedinIcon from "./Linkedin.png";

export default function Footer() {
  return (
    <footer className="h-[240px] bg-[#F5FCFF] relative">
      <div className="flex items-center justify-between w-full pt-[50px]">
        <Image className="h-[40px] w-[185px] ml-10" src="/Logo.png" alt="Logo" width={185} height={40} />
      </div>

      <div className="flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 text-center mt-[50px]">
        <a className="text-black mx-3" href="#">
          Home
        </a>
        <a className="text-black mx-3" href="#">
          Portfolio
        </a>
        <a className="text-black mx-3" href="#">
          About Me
        </a>
        <a className="text-black mx-3" href="#">
          Contact
        </a>
        <a className="text-black mx-3" href="#">
          Testimonials
        </a>
        <a className="text-black mx-3" href="#">
          Portfolio
        </a>
      </div>

      <div className="flex items-center justify-end absolute top-0 right-0 mt-[50px] mr-10">
        <a href="#">
          <Image className="w-[25px]" src={"Twitter.png"} alt="Twitter"/>
        </a>
        <a href="#">
          <Image className="w-[25px]" src={"Facebook.png"} alt="Facebook"/>
        </a>
        <a href="#">
          <Image className="w-[25px]" src={"Instagram.png"} alt="Instagram"/>
        </a>
        <a href="#">
          <Image className="w-[25px]" src={"Linkedin.png"} alt="Linkedin"/>
        </a>
      </div>
      <hr className="border-t border-[#ADAEC3] ml-[50px] mr-[50px] mt-[30px]" />

      <p className="text-black absolute bottom-[70px] left-0 mb-4 ml-10">
        Made with 💖 by Melike
      </p>

      <div className="flex justify-end absolute bottom-[70px] right-0 mb-4">
        <a className="text-black mr-4" href="#">
          Privacy Policy
        </a>
        <a className="text-black mr-4" href="#">
          Terms of Service
        </a>
        <a className="text-black mr-10" href="#">
          Cookies Settings
        </a>
      </div>
    </footer>
  );
}
