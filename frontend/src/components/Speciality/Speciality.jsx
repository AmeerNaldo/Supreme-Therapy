import React from "react";
import { Link } from "react-router-dom";
import "./Speciality.css";
import speciality_1 from "../../assets/speciality_1.png";
import speciality_2 from "../../assets/speciality_2.png";
import speciality_3 from "../../assets/speciality_3.png";
import speciality_4 from "../../assets/speciality_4.png";
import speciality_5 from "../../assets/speciality_5.png";
import speciality_6 from "../../assets/speciality_6.png";

const Speciality = () => {
  return (
    <div className="specialities">
      <h1 className="specialities-title">Personalized Fitness Coaching and Wellness Solutions</h1>
      <p className="specialities-para">
        We offer offers customized fitness programs, guidance on exercise
        techniques, and motivation to help clients achieve their health and
        fitness goals. They provide personalized workouts, nutritional advice,
        and progress tracking to enhance overall well-being and performance.
      </p>
      <div className="speciality-img">
        <img className="transition-transform duration-300 transform hover:scale-110" src={speciality_1} alt="" />
        <img className="transition-transform duration-300 transform hover:scale-110" src={speciality_2} alt="" />
        <img className="transition-transform duration-300 transform hover:scale-110" src={speciality_3} alt="" />
        <img className="transition-transform duration-300 transform hover:scale-110" src={speciality_4} alt="" />
        <img className="transition-transform duration-300 transform hover:scale-110" src={speciality_5} alt="" />
        <img className="transition-transform duration-300 transform hover:scale-110" src={speciality_6} alt="" />
      </div>
    </div>
  );
};

export default Speciality;
