import Image from "next/image";
import VectorIcon from "./Vector.png";
import Vector2Icon from "./Vector2.png";
import Image1 from "./Image.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";

export default function RecentProjects() {
  return (
    <div id="recentProjects" className="relative bg-white h-[800px] text-[#282938] pt-[50px] pr-[40px] pl-[40px]">
      <div className="pr-[20px] pl-[20px]">
        <h3 className="text-[#282938] text-[15px] font-medium">
          Recent Projects
        </h3>
        <h1 className="text-[#282938] text-[50px] font-bold mt-[10px]">My Portfolio</h1>
      </div>
      <div className="absolute top-0 right-0">
        <button className="bg-[#E62872] text-white flex w-[200px] h-[50px] justify-center items-center rounded-[5px] text-[17px] mt-[50px] mr-[50px]">
          <Image
            width={18}
            height={18}
            src={"/Vector.png"}
            alt=""
            className="mb-[4px] mr-[8px]"
          />
          Visit My Dribbble
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-10 mt-[60px] mx-[auto] w-[1250px] h-[450px]">
        <div className="shadow-xl p-[30px] rounded">
          <Image
            width={300}
            height={250}
            src={"/Image.png"}
            alt=""
            className="rounded"
          />
          <h3 className="text-[20px] font-bold mt-[25px]">Ahuse</h3>
          <p className="text-[15px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <a
            className="flex underline decoration-[#5E3BEE] mb-[5px] mt-[25px] font-semibold"
            href=""
          >
            View In Dribbble
            <Image
              width={15}
              height={15}
              src={"/Vector2.png"}
              alt=""
              className="m-[4px]"
            />
          </a>
        </div>

        <div className="shadow-xl p-[30px] rounded">
          <Image
            width={300}
            height={250}
            src={"/Image2.png"}
            alt=""
            className="rounded"
          />
          <h3 className="text-[20px] font-bold mt-[25px]">App Dashboard</h3>
          <p className="text-[15px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <a
            className="flex underline decoration-[#5E3BEE] mb-[5px] mt-[25px] font-semibold"
            href=""
          >
            View In Dribbble
            <Image
              width={15}
              height={15}
              src={"/Vector2.png"}
              alt=""
              className="m-[4px]"
            />
          </a>
        </div>

        <div className="shadow-xl p-[30px] rounded">
          <Image
            width={300}
            height={250}
            src={"/Image3.png"}
            alt=""
            className="rounded"
          />
          <h3 className="text-[20px] font-bold mt-[25px]">Easy Rent</h3>
          <p className="text-[15px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <a
            className="flex underline decoration-[#5E3BEE] mb-[5px] mt-[25px] font-semibold"
            href=""
          >
            View In Dribbble
            <Image
              width={15}
              height={15}
              src={"/Vector2.png"}
              alt=""
              className="m-[4px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
