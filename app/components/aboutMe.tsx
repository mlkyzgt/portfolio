import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="max-w-[1920px] h-[600px] pt-[30px] bg-white text-[#282938] flex">
      <div className="w-[813px] h-[550px] self-start ml-[100px]">
        <Image className='w-[1000px] h-[400px]'
          src="/Me.png"
          alt="About Me"
        />
      </div>
      <div className="pl-[150px] pr-[100px]">
        <h3 className="text-[#282938] text-[15px] font-medium mt-[30px]">
          About
        </h3>
        <h1 className="text-[#282938] text-[50px] font-bold mb-[20px]">About Me</h1>
        <p className="mb-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          varius faucibus massa, sollicitudin amet augue. Nibh metus a semper
          purus, mauris duis. Lorem eu neque, tristique quis duis. Nibh
          scelerisque ac adipiscing velit, non nulla in amet pellentesque.
        </p>
        <p>
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis
          consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
          mi a, euismod risus.
        </p>
      </div>
    </div>
  );
}
