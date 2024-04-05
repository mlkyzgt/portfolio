import Image from 'next/image';

export default function Skills() {
  return (
    <>
      <div id='skills' className="bg-white h-[600px] text-[#282938] pt-[50px]">
        <div className="pr-[80px] pl-[80px]">
          <h3 className="text-[15px] font-medium">My Skills</h3>
          <h1 className="text-[50px] font-bold mb-[100px]">My Expertise</h1>
        </div>
        <div className="grid grid-cols-4 gap-8 m-[80px] ">
          <div className="bg-[#F5FCFF] p-[30px] rounded">
            <Image src="/Strategy.png" alt="Strategy" width={80} height={80} />
            <h3 className="text-[20px] font-bold mt-[20px]">Strategy & Direction</h3>
            <p className="text-[15px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-[30px] rounded">
            <Image src="/Branding.png" alt="Branding" width={80} height={80} />
            <h3 className="text-[20px] font-bold mt-[20px]">Branding & Logo</h3>
            <p className="text-[15px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-[30px] rounded">
            <Image src="/UI.png" alt="UI/UX Design" width={80} height={80} />
            <h3 className="text-[20px] font-bold mt-[20px]">UI & UX Design</h3>
            <p className="text-[15px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-[30px] rounded">
            <Image src="/Webflow.png" alt="Webflow Development" width={80} height={80} />
            <h3 className="text-[20px] font-bold mt-[20px]">Webflow Development</h3>
            <p className="text-[15px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
