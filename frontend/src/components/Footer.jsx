import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------ Left Section ------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Supreme Physical Therapy is dedicated to helping you achieve peak
            wellness through personalized, cutting-edge care. Our expert team
            combines innovative techniques with a compassionate approach to
            empower you on your journey to recovery and optimal health.
          </p>
        </div>

        {/* ------ Center Section ------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ------ Right Section ------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(708) 620-4405</li>
            <li>sptherapy@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------ Copyright Text ------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Supreme Physical Therapy - All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
