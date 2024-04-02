import Logo from "./Logo.png";

export default function RecentProjects() {
  return (
    <div className="relative bg-white h-[800px] text-[#282938] pt-[50px] pr-[30px] pl-[30px]">
      <div className="pr-[20px] pl-[20px]">
        <h3 className="text-[#282938] text-[15px] font-medium">
          Recent Projects
        </h3>
        <h1 className="text-[#282938] text-[50px] font-bold">My Portfolio</h1>
      </div>
      <div className="absolute top-0 right-0">
        <button className="bg-[#E62872] text-white flex w-[200px] h-[50px] justify-center items-center rounded-[5px] text-[17px] mt-[50px] mr-[50px]">
          <img
            className="w-[18px] mb-[4px] mr-[8px]"
            src="./vector.png"
            alt=""
          />
          Visit My Dribbble
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-10 mt-[60px] mx-[auto] w-[1250px] h-[450px]">
        <div className="shadow-xl p-[20px] rounded">
          <img className="w-full h-[250px] rounded" src="./Image.png" alt="" />
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
            <img
              className="flex w-[15px] h-[15px] m-[4px]"
              src="./Vector2.png"
              alt=""
            />
          </a>
        </div>

        <div className="shadow-xl p-[20px] rounded">
          <img className="w-full h-[250px] rounded" src="./Image2.png" alt="" />
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
            <img
              className="flex w-[15px] h-[15px] m-[4px]"
              src="./Vector2.png"
              alt=""
            />
          </a>
        </div>

        <div className="shadow-xl p-[20px] rounded">
          <img className="w-full h-[250px] rounded" src="./Image3.png" alt="" />
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
            <img
              className="flex w-[15px] h-[15px] m-[4px]"
              src="./Vector2.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
