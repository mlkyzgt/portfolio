import Image from 'next/image';

export default function AboutMe() {
  return (
    <div id='aboutMe' className="w-[1920px] mx-auto h-600px pt-30px bg-white text-gray-800 flex">
      <div className="w-2/5 h-550px flex items-center justify-center">
        <Image
          src="/Me.png"
          alt="About Me"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center px-8">
        <h3 className="text-lg font-medium mb-4">About</h3>
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa, sollicitudin amet augue. Nibh metus a semper purus,
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit, non nulla in amet pellentesque.
        </p>
        <p>
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
          risus.
        </p>
      </div>
    </div>
  );
}
