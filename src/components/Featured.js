import React from "react";
import { sneaker } from "../data/Data";
const Featured = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row flex justify-center items-center flex-wrap sm:justify-between mt-[60px]">
            <div className="rightSide w-[95%] md:w-[45%]">
              <h2 className="text-[25px] font-extrabold text-blue-500">
                {sneaker.heading}
              </h2>
              <h1 className="text-[30px] font-extrabold text-slate-800">
                {sneaker.title}
              </h1>
              <p className="text-[18px] text-slate-800">{sneaker.text}</p>
              <a
                href={`${sneaker.url}`}
                className="block mt-[15px] text-white 
                bg-slate-900 w-fit py-[7px] px-[15px] rounded-[5px] shadow-lg"
                target="_blank"
              >
                {sneaker.btn}
              </a>
            </div>
            <div className="leftSide mb-[25px] w-[95%] md:w-[45%]">
              <img
                src={sneaker.img}
                alt="sorry"
                className="w-[95%] rotate-[20deg] transition-all duration-500 hover:rotate-[0deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
