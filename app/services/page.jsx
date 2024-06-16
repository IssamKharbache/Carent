"use client";
import Image from "next/image";
import React from "react";
import { services } from "../contants/data";
import { motion } from "framer-motion";
import { fadeIn } from "../contants/motion";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const page = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(/alpha.jpg)`,
        }}
        className="w-full h-96 bg-cover bg-center pt-5 bg-no-repeat relative"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-90"></div>
        <div className="flex items-center justify-between relative py-8 px-12">
          <h1 className="text-left py-4 px-8 text-8xl font-semibold text-main">
            Services
          </h1>
          <Button className="flex font-semibold bg-main hover:bg-main/70">
            Contact us for more
          </Button>
        </div>
        <p className="px-24 text-center py-4 text-white font-semibold text-2xl relative">
          Experience our comprehensive service section for seamless car rentals,
          ensuring your journey is as smooth as your ride
        </p>
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="max-w-[1400px] py-4 px-8 mx-auto"
      >
        <h1 className="text-4xl md:text-7xl text-center font-extrabold mt-16 text-main">
          Our services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-8 mb-12 mt-24 ">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col mx-auto items-center justify-center max-w-[550px] bg-main/50 shadow-lg py-4 px-12 rounded-lg hover:scale-105 duration-300 "
            >
              <h1 className="text-4xl text-center mt-16 mb-12 font-semibold">
                {service.title}
              </h1>
              <Image
                src={service.image}
                alt="alt"
                width={1900}
                height={1920}
                quality={80}
                className="w-full h-64 rounded-md  object-cover "
              />
              <p className="text-center text-md  md:text-lg font-semibold  mt-8">
                {service.description}
              </p>
              <Dialog>
                <DialogTrigger className="text-center text-lg font-semibold  mt-8 mb-6 bg-main/2 border-4 border-white hover:bg-main duration-200  rounded-xl py-3 px-7 hover:text-white">
                  Show features
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-3xl mb-8">
                      {service.title} features
                    </DialogTitle>
                    <DialogDescription className="text-lg md:text-xl  mt-6">
                      {service.features}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default page;
