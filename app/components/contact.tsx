import Image from 'next/image';

export default function Contact() {
  return (
    <div id='contact' className="relative bg-white h-[900px] text-[#282938] p-[30px]">
      <div className="max-w-[1920px] mx-auto px-[50px]">
        <div className="text-center">
          <h3 className="text-[#282938] text-[15px] font-medium mt-[30px]">Get In Touch</h3>
          <h1 className="text-[#282938] text-[50px] font-bold">Contact me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 m-[50px]">
          <div>
            <p>First Name</p>
            <input 
              className="border border-solid border-[#5E3BEE] rounded-md p-2 w-full"
              type="text"
              name="name"
            />
          </div>
          <div>
            <p>Last Name</p>
            <input 
              className="border border-solid border-[#5E3BEE] rounded-md p-2 w-full"
              type="text"
              name="surname"
            />
          </div>
          <div>
            <p>Email</p>
            <input 
              className="border border-solid border-[#5E3BEE] rounded-md p-2 w-full"
              type="text"
              name="email"
            />
          </div>
          <div>
            <p>Phone Number</p>
            <input 
              className="border border-solid border-[#5E3BEE] rounded-md p-2 w-full"
              type="text"
              name="phonenumber"
            />
          </div>
        </div>
        <div className="m-[50px]">
          <p>Choose a topic</p>
          <select 
            className="border border-solid border-[#5E3BEE] rounded-md p-2 w-full bg-white h-[42px]"
            name="topic"
          >
            <option value="">Select one...</option>
            <option value="topic1">Topic 1</option>
            <option value="topic2">Topic 2</option>
            <option value="topic3">Topic 3</option>
          </select>
        </div>
        <div className="m-[50px]">
          <p>Message</p>
          <textarea 
            className="border border-solid border-[#5E3BEE] rounded-md p-2 w-full h-[150px]"
            placeholder="Type your message..."
            name="message"
          ></textarea>
        </div>
        <div className="m-[50px] flex items-center">
          <input 
            className="border border-solid border-[#5E3BEE] rounded-md p-2"
            type="checkbox"
            id="terms"
            name="terms"
          />
          <label htmlFor="terms" className="ml-2">I accept the terms</label>
        </div>
        <div className="m-[50px] flex justify-center">
          <button className="bg-[#5E3BEE] w-[130px] h-[50px] rounded-[5px] text-white">Submit</button>
        </div>
      </div>
    </div>
  );
}