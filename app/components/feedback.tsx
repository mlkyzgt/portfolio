import Logo from "./Logo.png";
import Image from "next/image";
import stars from "./stars.png";
import Avatar1 from "./Avatar1.png";
import Avatar2 from "./Avatar2.png";
import Avatar3 from "./Avatar3.png";

export default function Feedback() {
  return (
    <div className="bg-[#F5FCFF] max-w-[1920px] h-[600px] flex justify-center items-center">
      <div className="m-[30px]">
        <div className="m-[20px]">
          <h3 className="text-[#282938] text-[15px] font-medium mt-[30px]">
            Clients Feedback
          </h3>
          <h1 className="text-[#282938] text-[50px] font-bold">
            Customer testimonials
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[70px] m-[30px]">
          <div className="bg-[#F5FCFF] p-[20px] rounded border border-solid border-[#006B6A] flex flex-col items-start">
            <Image className="w-[100px]" src={"Stars.img"} alt="Stars" />
            <p className="text-[15px] text-[#282938] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className="flex items-center justify-start mt-[20px]">
              <Image className="w-[50px]" src={"Avatar1.img"} alt="Avatar 1" />
              <div className="ml-[10px]">
                <h3 className="text-[#282938] font-semibold">Dianne Russell</h3>
                <h3 className="text-[#282938]">Starbucks</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#F5FCFF] p-[20px] rounded border border-solid border-[#006B6A] flex flex-col items-start">
            <Image className="w-[100px]" src={"Stars.img"} alt="Stars" />
            <p className="text-[15px] text-[#282938] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className="flex items-center justify-start mt-[20px]">
              <Image className="w-[50px]" src={"Avatar2.img"} alt="Avatar 2" />
              <div className="ml-[10px]">
                <h3 className="text-[#282938] font-semibold">Kristin Watson</h3>
                <h3 className="text-[#282938]">Louis Vuitton</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#F5FCFF] p-[20px] rounded border border-solid border-[#006B6A] flex flex-col items-start">
            <Image className="w-[100px]" src={"Stars.img"} alt="Stars" />
            <p className="text-[15px] text-[#282938] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className="flex items-center justify-start mt-[20px]">
              <Image className="w-[50px]" src={"Avatar3.img"} alt="Avatar 3" />
              <div className="ml-[10px]">
                <h3 className="text-[#282938] font-semibold">Kathryn Murphy</h3>
                <h3 className="text-[#282938]">McDonalds</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
