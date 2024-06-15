"use client";
import Image from "next/image";
import React from "react";

const ExploreCard = ({ info }) => {
  return (
    <div className="w-full sm:mx-auto mt-16 shadow-xl py-4 border-2 rounded-lg border-main text-gray-900 px-10 hover:scale-105 duration-500">
      <div className="mx-auto w-32 h-32 relative border-4  border-white rounded-full overflow-hidden">
        <Image
          src={info.image}
          height={1500}
          width={1500}
          alt={info.title}
          className="rounded-lg object-cover object-center h-32"
        />
      </div>
      <p className="text-center font-semibold text-main mt-12 text-md md:text-2xl">
        {info.title}
      </p>
      <p className="text-sm  text-gray-500 text-center py-4 px-2">
        {info.description}
      </p>
    </div>
  );
};

export default ExploreCard;
