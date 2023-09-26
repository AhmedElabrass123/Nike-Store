import { faCircleXmark, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../images/nike-adapt-bb.png";
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toprateslaes } from "../data/Data";
import {
  clearAll,
  decrementPro,
  deleteProduct,
  incrementPro,
} from "../Redux/slices/ProductSlice";
const MyCart = ({ openCart, setOpenCart }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const incrementFunc = (pro) => {
    console.log(pro);
    dispatch(incrementPro(pro));
  };
  const decrementFunc = (pro) => {
    dispatch(decrementPro(pro));
    if (pro.quentity === 1) {
      dispatch(deleteProduct(pro.id));
    }
  };
  const proPrices = products.map((pro) => {
    return pro.price * pro.quentity;
  });
  const totalPrice = proPrices.reduce((x, y) => {
    return x + y;
  }, 0);

  return (
    <div
      className={
        openCart
          ? "sideBar z-[600] w-full sm:w-[500px] h-full overflow-y-scroll scroll-smooth fixed right-0 top-0 blur-effect-theme shadow-2xl transition-all duration-700"
          : "w-0 z-[0] opacity-0 fixed right-0 top-0 none transition-all duration-500"
      }
    >
      <span className="">
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => setOpenCart(false)}
          className="absolute left-[10px] top-[10px] text-slate-900 text-[22px] cursor-pointer"
        />
      </span>
      <button
        className="bg-slate-800 text-white px-[20px] py-[4px] absolute right-[10px] top-[10px] 
        rounded-[5px]"
        onClick={()=>dispatch(clearAll())}
      >
        Clear All
      </button>
      <div className="content pt-[80px] px-[30px]">
        {/* ======================>>>products>>>>>>============================= */}
        {products.length > 0 ? (
          products.map((pro) => {
            return (
              <div
                key={pro.id}
                className="flex items-center justify-between mb-[15px] pb-[10px]"
                style={{borderBottom:"2px solid #222"}}
              >
                <img
                  src={pro.img}
                  alt="........"
                  className="w-[100px] h-[100px]
           border-[2px] border-slate-500 border-solid shadow-2xl p-[10px]"
                />
                <div className="flex flex-col items-center">
                  <h2 className="text-[20px] font-medium">
                    {pro.title}
                  </h2>
                  <p
                    className="w-fit text-white flex items-center justify-center p-[4px]
            bg-slate-800 mb-[10px]"
                  >
                    $ {pro.price}
                  </p>
                  <div className="flex items-center gap-[10px]">
                    <button
                      className="bg-slate-800 text-white w-[30px] h-[30px]
                flex items-center justify-center text-[20px]"
                      onClick={() => decrementFunc(pro)}
                    >
                      -
                    </button>
                    <span>{pro.quentity}</span>
                    <button
                      className="bg-slate-800 text-white w-[30px] h-[30px]
                flex items-center justify-center text-[20px]"
                      onClick={() => incrementFunc(pro)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-slate-900 p-[4px]"
                  onClick={() => dispatch(deleteProduct(pro.id))}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-white text-[20px]"
                  />
                </button>
              </div>
            );
          })
        ) : (
          <h2>There is no products.............!</h2>
        )}
        {/* ========================>>>products>>>>>>=========================== */}
        <div className="flex items-center justify-between mt-[30px] mb-[5px]">
          <span>SupTotal</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className="bg-slate-900 text-white py-[4px] rounded-[6px] w-full mb-[30px]">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default MyCart;
