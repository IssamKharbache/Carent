"use client";
import { ourObjective } from "@/app/contants/data";
import { fadeIn } from "@/app/contants/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const OurObjective = () => {
  return (
    <div
      className="mt-4 md:py-10 bg-[#f6f5f4] max-w-[1400px]
    rounded-3xl mx-auto mb-8"
    >
      <motion.h1
        variants={fadeIn("up", "spring", 0.5, 1)}
        whileInView="show"
        initial="hidden"
        className="text-center font-extrabold text-4xl md:text-6xl mt-24 mb-24"
      >
        Our objective
      </motion.h1>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        whileInView="show"
        initial="hidden"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 mt-8 gap-8 "
      >
        {ourObjective.map((objective, idx) => {
          return (
            <div
              className="py-8 mr-4 flex flex-col items-center  ml-8 border-2 border-gray-200 rounded-lg shadow-xl hover:scale-105 duration-300"
              key={idx}
            >
              <div className="">
                <Image
                  src={objective.image}
                  height={1400}
                  width={1800}
                  className="w-40  object-cover h-40 md:h-80 md:w-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl md:text-3xl text-center font-bold mt-6 mb-6">
                  {objective.title}
                </h1>
                <p className="text-md md:text-lg text-center">
                  {objective.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OurObjective;
