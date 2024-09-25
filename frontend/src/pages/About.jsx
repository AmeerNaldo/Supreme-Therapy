import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            At Supreme Physical Therapy, we are passionate about helping our
            clients achieve their health and wellness goals. With a team of
            skilled therapists, we provide personalized treatment plans that
            address individual needs, whether it’s recovering from an injury,
            managing pain, or enhancing performance.
          </p>
          <p>
            Our holistic approach combines cutting-edge techniques with
            compassionate care, ensuring that each patient feels supported and
            empowered throughout their recovery journey. We believe in fostering
            a positive environment where everyone can thrive, and we’re
            committed to guiding you towards a stronger, healthier future.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Supreme Physical Therapy, our vision is to empower individuals to
            reclaim their mobility and well-being through personalized care and
            innovative rehabilitation strategies.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined Appointment Scheduling That Fits Into Your Busy
            Lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access To A Network Of Trusted Healthcare Professionals In Your
            Area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored Recommendations And Reminders To Help You Stay On Top Of
            Your Health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
