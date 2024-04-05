import Image from "next/image";
import StarsImage from "./Stars.png";
import Avatar1Image from "./Avatar1.png";
import Avatar2Image from "./Avatar2.png";
import Avatar3Image from "./Avatar3.png";

export default function Feedback() {
  return (
    <div id="feedback" className="bg-[#F5FCFF] max-w-[1920px] h-[600px] flex justify-center items-center">
      <div className="m-[60px]">
        <div className="m-[40px]">
          <h3 className="text-[#282938] text-[15px] font-medium mt-[60px]">
            Clients Feedback
          </h3>
          <h1 className="text-[#282938] text-[50px] font-bold">
            Customer testimonials
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-[80px] m-[40px]">
          <div className="bg-[#F5FCFF] p-[40px] rounded border border-solid border-[#006B6A] flex flex-col items-start">
          <Image width={120} height={10} src={"/Stars.png"} alt="Stars" />
            <p className="text-[15px] text-[#282938] mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className="flex items-center justify-start mt-[30px]">
              <Image width={70} height={70} src={"/Avatar1.png"} alt="Avatar 1" />
              <div className="ml-[20px]">
                <h3 className="text-[#282938] font-semibold">Dianne Russell</h3>
                <h3 className="text-[#282938]">Starbucks</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#F5FCFF] p-[40px] rounded border border-solid border-[#006B6A] flex flex-col items-start">
            <Image width={120} height={10} src={"/Stars.png"} alt="Stars" />
            <p className="text-[15px] text-[#282938] mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className="flex items-center justify-start mt-[30px]">
              <Image width={70} height={70} src={"/Avatar2.png"} alt="Avatar 2" />
              <div className="ml-[20px]">
                <h3 className="text-[#282938] font-semibold">Kristin Watson</h3>
                <h3 className="text-[#282938]">Louis Vuitton</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#F5FCFF] p-[40px] rounded border border-solid border-[#006B6A] flex flex-col items-start">
            <Image width={120} height={10} src={"/Stars.png"} alt="Stars" />
            <p className="text-[15px] text-[#282938] mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className="flex items-center justify-start mt-[30px]">
              <Image width={70} height={70} src={"/Avatar3.png"} alt="Avatar 3" />
              <div className="ml-[20px]">
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
