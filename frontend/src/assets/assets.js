import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.jpg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Ala Abdelhadi",
    image: doc1,
    speciality: "Doctor in Physical Therapy",
    degree: "PHD",
    experience: "8 Years",
    about:
      "Dr. Abdelhadi is a dedicated physical therapist with a passion for helping patients regain their mobility and improve their quality of life. With expertise in rehabilitation techniques and a compassionate approach, he specializes in creating personalized treatment plans tailored to individual needs. Dr. Abdelhadi believes in empowering patients through education and support, fostering a collaborative environment that encourages healing and resilience. Committed to staying current with the latest advancements in the field, he strives to inspire others on their journey to recovery.",
    fees: 50,
    address: {
      line1: "13341 SW Hwy",
      line2: " Orland Park, IL, 60462",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Waseem Abdelhadi",
    image: doc1,
    speciality: "Doctor in Physical Therapy",
    degree: "Student",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "13341 SW Hwy",
      line2: "Orland Park, IL, 60462",
    },
  },
];
