"use client";
import Banners from "@/components/Banners";
import { motion } from "framer-motion";
import { fadeIn, textVariant2 } from "../contants/motion";
import Image from "next/image";
import { fleet } from "../contants/data";

const page = () => {
  return (
    <div>
      <Banners
        title="Our Fleet"
        text="Whether you're planning a weekend getaway, a business trip, or simply need a reliable daily driver, our meticulously curated fleet offers a wide selection to suit every need and preference"
        img="/fleet.jpg"
      />
      <div className="max-w-[1400px] mx-auto px-6 ">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={textVariant2}
          className="text-5xl md:text-7xl text-center font-extrabold mt-16 text-main mb-16"
        >
          Our fleet
        </motion.h1>
        {fleet.map((car, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", "string", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col md:flex-row gap-8 mb-14 border-b-4 border-gray-300 py-8   "
          >
            <Image
              src={car.image}
              width={1800}
              height={1800}
              className="h-80 w-full md:min-w-[650px] md:max-w-[700px] object-cover rounded-lg"
              alt={car.title}
            />
            <div className="flex flex-col mb-6  gap-6">
              <h1 className="text-2xl md:text-6xl  text-gray-800 font-extrabold ">
                {car.title}
              </h1>
              <p className="text-md md:text-lg text-gray-600">
                {car.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default page;
