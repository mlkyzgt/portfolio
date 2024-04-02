import Logo from "./Logo.png";
export default function AboutMe() {
  return (
    <>
      <div className=" max-w-[1920px] h-[600px] pt-[30px] bg-white text-[#282938] flex">
        <img
          className="w-[813px] h-[550px] self-start ml-[50px] "
          src="./Me.png"
          alt="About Me"
        />
        <div className="pl-[100px] pr-[50px]">
          <h3 className="text-[#282938] text-[15px] font-medium mt-[30px]">
            About
          </h3>
          <h1 className="text-[#282938] text-[50px] font-bold ">About Me</h1>
          <p className="mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
          </p>
          <p>
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
    </>
  );
}
