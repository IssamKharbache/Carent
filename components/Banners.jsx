"use client";
//icons
import { SlMouse } from "react-icons/sl";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/contants/motion";

import { FaArrowDownLong } from "react-icons/fa6";
const Banners = ({ title, img, text }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="w-full flex flex-col items-center justify-center  h-screen bg-cover bg-center pt-5 bg-no-repeat relative "
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-95"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative py-8 px-12">
        <h1 className="text-center text-5xl py-4 md:px-8 md:text-8xl font-extrabold text-gray-100 uppercase">
          {title}
        </h1>
      </div>
      <p className="px-24 text-center  py-4 text-gray-300 font-semibold text-lg md:text-2xl relative mb-4">
        {text}
      </p>
      <div className="flex relative text-8xl text-white mt-24 animate-bounce">
        <SlMouse />
        <FaArrowDownLong />
      </div>
    </motion.div>
  );
};

export default Banners;
