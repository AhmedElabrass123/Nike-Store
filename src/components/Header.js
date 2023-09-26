import React, { useEffect, useState } from "react";
import { heroapi } from "../data/Data";
import Clip from "../otherComponents/Clip";
import Social from "../otherComponents/Social";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import MyCart from "./MyCart";
import { useSelector } from "react-redux";
const Header = () => {
  const products=useSelector((state)=>state.products)
  const [openCart,setOpenCart]=useState(false);
  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if(window.scrollY > 30) {
        setNavState(true);
    } else {
        setNavState(false);
    }
}
useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
        window.removeEventListener('scroll', onNavScroll);
    }
},[]);

  return (
    <header className="relative h-[80vh] w-full sm:h-[85vh] md:h-[100vh] md:mb-[100px] lg:mb-[50px]">
      <MyCart openCart={openCart} setOpenCart={setOpenCart}/>
      <div className="bg-theme clip-path h-[90vh] w-full absolute top-0 left-0 right-0 bottom-0 z-[10]"></div>
      <div className="container h-full relative z-[100]">
        <div
          className={!navState ?'fixed w-full top-0 left-0 opacity-100 px-[60px] py-[20px] flex items-center justify-between transition-all duration-700':'mynav fixed top-0 left-0 w-full z-[999] px-[60px] py-[15px] flex items-center justify-between bg-blue-400 shadow-xl'}
        >
          <a href="/">
          <img src={logo} className="w-[70px] h-[20px]" alt="logoImage" />
          </a>
          <div className="rightSide flex items-center gap-[15px]">
            <span><FontAwesomeIcon icon={faMagnifyingGlass} className="text-[19px] text-white" /></span>
            <span><FontAwesomeIcon icon={faHeart}  className="text-[19px] text-white "/></span>
            <div className="relative">
              <FontAwesomeIcon icon={faBagShopping} 
              onClick={()=>setOpenCart(true)}
              className="cursor-pointer text-[22px] text-white"/>
              <span className="w-[18px] h-[18px] 
              rounded-[50%] bg-red-600 text-white absolute left-[-10px] top-[-7px]
               flex items-center justify-center text-[13px]">{products.length}</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="textContent pt-[150px] w-full text-center">
            <h1 className="text-[20px] text-slate-200 drop-shadow-sm font-semibold sm:text-[25px] md:text-[35px] lg:text-[40px] ">
              {heroapi.title}
            </h1>
            <h1 className="text-[20px] text-slate-200 drop-shadow-sm font-semibold sm:text-[25px] md:text-[35px] lg:text-[40px] mb-[10px]">
              {heroapi.subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200
            shadow-slate-200 my-[40px] md:my-[25px]"
            >
              {heroapi.btntext}
            </button>
          </div>
          <div className="imgContent my-[20px]">
            <img
              src={heroapi.img}
              alt="bannerImage"
              className="w-[290px] transitions-theme
            rotate-[-25deg] hover:rotate-[0deg] sm:w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col videos absolute left-[1vh] top-[10vh] sm:left-[2vh] md:left-[5vh] md:top-[20vh]">
          {heroapi.videos?.map((video, index) => {
            return <Clip img={video.imgsrc} clip={video.clip} key={index} />;
          })}
        </div>
        <div className="flex flex-col absolute right-[2vh] top-[10vh] sm:right-[3vh] md:right-[5vh] md:top-[20vh]">
          {heroapi.sociallinks?.map((link, index) => {
            return <Social link={link.icon} key={index} />;
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
// blur-effect-theme