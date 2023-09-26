import React from "react";
import { popularsales, highlight } from "../data/Data";
import SalesItems from "../otherComponents/SalesItems";
import  {Link}  from "react-router-dom";

const Sales = () => {
  return (
    <>
      <section className="slaes my-[50px]">
        <div className="container">
          <div className="head w-full text-left mb-[15px] ps-[10px]">
            <h2 className="text-[25px] font-extrabold text-slate-900 sm:text-[30px] md:text-[40px] lg:text-[50px]">
              {popularsales.title}
            </h2>
          </div>
          <div className="row flex justify-center items-center flex-wrap gap-[10px] sm:justify-between">
            {popularsales.items.map((item) => {
              return <SalesItems item={item} key={item.id} />;
            })}
          </div>
          <div className="row flex justify-center items-center flex-wrap sm:justify-between mt-[60px]">
            <div className="leftSide mb-[25px] w-[95%] md:w-[45%]">
              <img
                src={highlight.img}
                alt="sorry"
                className="w-full transition-all duration-500 hover:-rotate-[20deg]"
              />
            </div>
            <div className="rightSide w-[95%] md:w-[45%]">
                <h2 className="text-[25px] font-extrabold text-blue-500">{highlight.heading}</h2>
                <h1 className="text-[30px] font-extrabold text-slate-800">{highlight.title}</h1>
                <p className="text-[18px] text-slate-800">{highlight.text}</p>
                <a href={`${highlight.url}`} className="block mt-[15px] text-white 
                bg-slate-900 w-fit py-[7px] px-[15px] rounded-[5px] shadow-lg" target="_blank">{highlight.btn}</a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
