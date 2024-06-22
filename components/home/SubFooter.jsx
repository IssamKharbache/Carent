"use client";
import { rentingNeeding } from "@/app/contants/data";
import Image from "next/image";
import React from "react";

const SubFooter = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12  rounded-lg mb-6">
      <div>
        <Image
          src="/brabus.jpg"
          alt="Brabus"
          height={1800}
          width={1800}
          className="h-full object-cover rounded-none md:rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 w-full  md:w-2/3  mx-auto">
        {rentingNeeding.map((type, idx) => {
          const Icon = type.icon;
          return (
            <div
              className="bg-slate-200/70 rounded-lg py-6 px-4   mb-8"
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
      </div>
    </div>
  );
};

export default SubFooter;
