import Logo from "./Logo.png";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <main className="bg-[#F5FCFF] max-w-[1920px] h-[600px] flex justify-center items-center">
        <div className="m-[50px]">
          <h3 className="text-[#282938] text-[15px] font-medium mt-[30px]">
            Hey, I am John
          </h3>
          <h1 className="text-[#282938] text-[50px] font-bold">
            I create <span className="text-[#5E3BEE]">product design</span> and
            brand experience
          </h1>
          <p className="text-[#282938] mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className="bg-[#5E3BEE] text-white pt-[15px] pb-[15px] pr-[20px] pl-[20px] rounded-[5px] mt-[30px]">
            Get In Touch
          </button>
        </div>
        <Image
          className="w-[450px] h-[365px] ml-[30px]"
          src="/profilePhoto.png"
          alt="Profile Photo"
        />
      </main>
    </>
  );
}
