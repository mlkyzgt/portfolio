import Image from "next/image";

export default function Main() {
  return (
    <>
      <main className="bg-[#F5FCFF] max-w-[1920px] h-[600px] flex justify-center items-center">
        <div className="m-[50px]">
          <h3 className="text-[#282938] text-[15px] font-medium mt-[40px]">
            Hey, I am John
          </h3>
          <h1 className="text-[#282938] text-[50px] font-bold mt-[20px]">
            I create <span className="text-[#5E3BEE]">product design</span> and
            brand experience
          </h1>
          <p className="text-[#282938] mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className="bg-[#5E3BEE] text-white pt-[15px] pb-[15px] pr-[20px] pl-[20px] rounded-[5px] mt-[40px]">
            Get In Touch
          </button>
        </div>
        <Image
          width={450}
          height={365}
          className="ml-[50px] mr-[80px]"
          src="/profilePhoto.png"
          alt="Profile Photo"
        />
      </main>
    </>
  );
}
