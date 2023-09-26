import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/slices/ProductSlice";

const RatesSaleItem = ({ item }) => {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.products)
  console.log(products)
  return (
    <>
        <div className={`SalesItem text-white flex flex-col items-center justify-center  w-[95%] p-[10px] rounded-[6px]
         bg-gradient-to-b ${item.color} ${item.shadow} sm:w-[43%] md:w-[45%] lg:w-[31%] mb-[20px]`}>
          <h1 className="text-[20px] font-bold">{item.title}</h1>
          <h3 className="text-[15px] font-bold mb-[10px]">{item.text}</h3>
          <div className="flex items-center mb-[15px]">
            <span className="bg-slate-100 text-black p-[3px] rounded-[3px] font-medium">
              $ {item.price}
            </span>
            <span className="flex items-center ms-[20px]">
              {item.rating}
              <FontAwesomeIcon icon={faStar} className="text-white ms-[3px]" />
            </span>
          </div>
          <div className="flex items-center">
            <span
              className="me-[15px] bg-slate-100 w-[30px] h-[30px] flex items-center justify-center 
            rounded-[6px] cursor-pointer"
            onClick={()=>dispatch(addProduct(item))}
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-black" 
           />
            </span>
            <button className="bg-slate-100 py-[3px] px-[5px] text-black  rounded-[6px]">
              {item.btn}
            </button>
          </div>
          <div className="my-[20px]">
            <img
              src={item.img}
              className="w-[150px] h-[90px] rotate-[0deg] transition-all duration-500 hover:-rotate-[20deg]"
              alt=""
            />
          </div>
        </div>
    </>
  );
};

export default RatesSaleItem;
