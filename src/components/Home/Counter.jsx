import Image from "next/image";
import React from "react";
import CounterComp from "./CounterComp";
import { GoProjectSymlink } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";
const items = [
  {
    name: "Projects Delivered",
    number: 50,
    icon: <GoProjectSymlink />,
  },
  {
    name: "Client Satisfaction",
    number: 98,
    suffix: "%",
    icon: <HiOutlineEmojiHappy />,
  },
  {
    name: "Support System",
    number: 24,
    suffix: "/7",
    icon: <MdSupportAgent />,
  },
];

const Counter = () => {
  return (
    <section className="py-16 flex justify-center items-center flex-col">
      <h2 className='text-2xl xs:text-3xl tracking-wider font-semibold text-black text-center  relative after:contents-[""] after:absolute after:-bottom-2 xs:after:-bottom-3 after:left-[42%] xs:after:left-[45%] lg:after:left-[48%] after:w-[15%] xs:after:w-[10%] lg:after:w-[5%]  after:h-[3px] xs:after:h-1 after:bg-black mb-12'>
        ACCOMPLISHMENT
      </h2>
      <div className="w-[80%] h-auto rounded-2xl lg:h-60 bg-custom-gradient relative">
       
        <div className="layout h-full grid sm:grid-cols-2 lg:grid-cols-3 max-lg:gap-y-12 gap-x-12  place-items-center z-20  py-12">
          {items.map((ele) => (
            <div
              className="w-full h-full flex items-center justify-center flex-col"
              key={ele.name}
            >
              <div className="text-white text-5xl font-semibold flex items-center gap-x-4">
              
                <div className="flex items-center">
                  <CounterComp end={ele.number} />
                  <span className="ms-2">{ele.suffix ?? '+'}</span>
                </div>
              </div>
              <p className="text-xl  text-white mt-3">{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
