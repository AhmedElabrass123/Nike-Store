import React from "react";
import { footerAPI } from "../data/Data";
const Footer = () => {
  return (
    <footer className="py-[30px] bg-blue-600 text-white">
      <div className="container">
        <div className="row flex justify-center items-start flex-wrap  sm:justify-between">
          <ul className="w-[95%] mb-[15px] sm:w-[43%] md:w-[33%] sm:mb-[15px]">
            <li className="mb-[10px]">
              <h3
                style={{ boxShadow: "0 0 4px rgba(0,0,0,.2)" }}
                className="text-[20px] font-semibold bg-blue-600 w-fit py-[2px] px-[7px] rounded-[2px]"
              >
                About Nike
              </h3>
            </li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Prupose</li>
            <li>Sustainability</li>
          </ul>
          <ul className="w-[95%] mb-[15px] sm:w-[43%] md:w-[33%] sm:mb-[15px]">
            <li className="mb-[10px]">
              <h3
                style={{ boxShadow: "0 0 4px rgba(0,0,0,.2)" }}
                className="text-[20px] font-semibold bg-blue-600 w-fit py-[2px] px-[7px] rounded-[2px]"
              >
                Get Help
              </h3>
            </li>
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
          <ul className="w-[95%] mb-[15px]  sm:w-[43%] md:w-[33%] sm:mb-[15px]">
            <li className="mb-[10px]">
              <h3
                style={{ boxShadow: "0 0 4px rgba(0,0,0,.2)" }}
                className="text-[20px] font-semibold bg-blue-600 w-fit py-[2px] px-[7px] rounded-[2px]"
              >
                Company
              </h3>
            </li>
            <li>Gift Cards</li>
            <li>Promotions</li>
            <li>Find A Store</li>
            <li>Signup</li>
            <li>Nike Jouneral</li>
            <li>Send Us Feeback</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
