import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/slices/ProductSlice";
const SalesItems = ({ item }) => {
  const products=useSelector((state)=>state.products)
  const dispatch=useDispatch()
  return (
    <>
      <div
        className={`SalesItem text-white flex items-center justify-between  w-[97%] p-[10px] rounded-[6px]
         bg-gradient-to-b ${item.color} ${item.shadow} md:w-[48%] lg:w-[31%] mb-[15px]`}
      >
        <div className="left">
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
            <span className="me-[15px] bg-slate-100 w-[30px] h-[30px] flex items-center justify-center 
            rounded-[6px] cursor-pointer"
            onClick={()=>dispatch(addProduct(item))}
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-black" />
            </span>
            <button className="bg-slate-100 py-[3px] px-[5px] text-black  rounded-[6px]">{item.btn}</button>
          </div>
        </div>
        <div className="right">
            <img src={item.img} className="w-[150px] -rotate-[45deg] transition-all duration-500 hover:rotate-0" alt=""/>
        </div>
      </div>
    </>
  );
};

export default SalesItems;
