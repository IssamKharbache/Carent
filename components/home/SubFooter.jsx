"use client";
import { rentingNeeding } from "@/app/contants/data";
import { fadeIn, textVariant2 } from "@/app/contants/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SubFooter = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-lg">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src="/brabus.jpg"
          alt="Brabus"
          height={1800}
          width={1800}
          className="h-full object-cover rounded-none md:rounded-lg"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 gap-4 mx-auto w-full ml-8 md:ml-0"
      >
        {rentingNeeding.map((type, idx) => {
          const Icon = type.icon;
          return (
            <div
              className="bg-slate-200/70 rounded-lg mr-16 px-4 py-3 mb-8"
              key={idx}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex">
                  <span className="text-4xl bg-slate-300 rounded-full p-4">
                    <Icon className="text-main" />
                  </span>
                </div>

                <div className="">
                  <h5 className="text-2xl text-center md:text-left text-gray-900 font-bold mb-6  mt-0 md:mt-8 ">
                    {type.title}
                  </h5>
                  <p className="mb-4 border-l-8 border-main px-3 rounded-lg text-sm md:text-base">
                    {type.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SubFooter;
