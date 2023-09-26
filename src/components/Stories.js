import React from "react";
import { story } from "../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Navigation from "swiper";
// import Pagination from "swiper";

// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const Stories = () => {
  return (
    <section className="my-[60px]">
      <div className="container">
        <div className="head w-full text-left mb-[15px] ps-[10px]">
          <h2 className="text-[25px] font-extrabold text-slate-900 sm:text-[30px] md:text-[40px] lg:text-[50px]">
            {story.title}
          </h2>
        </div>
        <div className="row">
          <Swiper
            className="w-full"
            breakpoints={{
              280: {
                width: 280,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              992: {
                width: 992,
                slidesPerView: 3,
              },
              1200: {
                width: 1200,
                slidesPerView: 4,
              },
            }}
            spaceBetween={30}
            slidesPerView={4}
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            // modules={[Navigation,Pagination]}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {story.news.map((stor, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className="rounded-t-[5px] bg-white p-[10px]"
                  style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-t-[5px] ">
                    <img
                      src={stor.img}
                      className="rounded-t-[5px] object-cover"
                    />
                  </div>
                  <div className="feat my-[15px] flex items-start">
                    <p className="me-[20px] ms-[10px]">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="text-red-600 text-[20px] transition-all duration-300 hover:scale-[1.1] me-[3px]"
                      />
                      <span>{stor.like}</span>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faClock} />{" "}
                      <span>{stor.time}</span>
                    </p>
                  </div>
                  <h3 className="text-[18px] font-semibold mb-[5px]">
                    {stor.title}
                  </h3>
                  <p className="tracking-[1px] text-[15px]">{stor.text}</p>
                  <a
                    href={stor.url}
                    target="_blank"
                    className="bg-slate-900 text-white block py-[5px] text-center rounded-[5px] mt-[10px]"
                  >
                    {stor.btn}
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Stories;
