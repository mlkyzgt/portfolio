import Logo from "./Logo.png";
import Image from "next/image";
import TwitterIcon from "./Twitter.png";
import FacebookIcon from "./Facebook.png";
import InstagramIcon from "./Instagram.png";
import LinkedinIcon from "./LinkedIn.png";

export default function Footer() {
  return (
    <footer className="h-[240px] bg-[#F5FCFF] relative">
      <div className="flex items-center justify-between w-full pt-[60px]">
        <Image className="h-[40px] w-[185px] ml-16" src="/Logo.png" alt="Logo" width={185} height={40} />
      </div>

      <div className="flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 text-center mt-[60px]">
        <a className="text-black mx-4" href="#">
          Home
        </a>
        <a className="text-black mx-4" href="#">
          Portfolio
        </a>
        <a className="text-black mx-4" href="#">
          About Me
        </a>
        <a className="text-black mx-4" href="#">
          Contact
        </a>
        <a className="text-black mx-4" href="#">
          Testimonials
        </a>
        <a className="text-black mx-4" href="#">
          Portfolio
        </a>
      </div>

      <div className="flex items-center justify-end absolute top-0 right-0 mt-[60px] mr-16">
        <a href="#">
          <Image className="w-[25px] mx-4" src={"Twitter.png"} alt="Twitter"/>
        </a>
        <a href="#">
          <Image className="w-[25px] mx-4" src={"Facebook.png"} alt="Facebook"/>
        </a>
        <a href="#">
          <Image className="w-[25px] mx-4" src={"Instagram.png"} alt="Instagram"/>
        </a>
        <a href="#">
          <Image className="w-[25px] mx-4" src={"LinkedIn.png"} alt="Linkedin"/>
        </a>
      </div>
      <hr className="border-t border-[#ADAEC3] ml-[60px] mr-[60px] mt-[40px]" />

      <p className="text-black absolute bottom-[80px] left-0 mb-4 ml-16">
        Made with 💖 by Melike
      </p>

      <div className="flex justify-end absolute bottom-[80px] right-0 mb-4 mr-16">
        <a className="text-black mr-6" href="#">
          Privacy Policy
        </a>
        <a className="text-black mr-6" href="#">
          Terms of Service
        </a>
        <a className="text-black mr-16" href="#">
          Cookies Settings
        </a>
      </div>
    </footer>
  );
}
