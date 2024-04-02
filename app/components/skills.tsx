import Logo from "./Logo.png";
export default function Skills() {
  return (
    <>
      <div className="bg-white h-[600px] text-[#282938] pt-[50px]">
      <div className="pr-[50px] pl-[50px]">
        <h3 className="text-[15px] font-medium">My Skills</h3>
        <h1 className="text-[50px] font-bold mb-[80px]">My Expertise</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 m-[50px] ">
          <div className="bg-[#F5FCFF] p-[20px] rounded">
            <img className="w-[80px] h-[80px]" src="./Strategy.png" alt="" />
            <h3 className="text-[20px] font-bold">Strategy & Direction</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-[20px] rounded">
            <img className="w-[80px] h-[80px]" src="./Branding.png" alt="" />
            <h3 className="text-[20px] font-bold">Branding & Logo</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-[20px] rounded">
            <img className="w-[80px] h-[80px]" src="./UI.png" alt="" />
            <h3 className="text-[20px] font-bold">UI & UX Design</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-[20px] rounded">
            <img className="w-[80px] h-[80px]" src="./Webflow.png" alt="" />
            <h3 className="text-[20px] font-bold">Webflow Development</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
