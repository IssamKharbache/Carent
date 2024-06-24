import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto h-screen flex flex-col md:flex-row items-center justify-center ">
      <Image
        src="/paymentrest.png"
        height={1500}
        width={1500}
        alt="payment"
        className="w-[750px]"
      />
      <h2 className="font-semibold text-md px-6 text-center md:text-4xl">
        The payment step is not implemented due to country restriction
      </h2>
    </div>
  );
};

export default page;
