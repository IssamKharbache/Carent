import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1400px] py-4 px-8 mx-auto">
      <h1 className="text-4xl md:text-7xl text-center font-extrabold">
        Our services
      </h1>
      <div className="">
        <h1>Lorem ipsum dolo</h1>
        <Image src="/brabus.jpg" />
      </div>
    </div>
  );
};

export default page;
