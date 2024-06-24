"use client";
import { fleet } from "@/app/contants/data";
import Image from "next/image";
import React from "react";
import Carousel from "nuka-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
const StepTwoForm = ({ form }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  const config = {
    nextButtonClassName: "rounded-full mr-5 ",
    nextButtonText: <IoIosArrowForward />,
    pagingDotsClassName: "me-2 w-4 h-4 ",
    pagingDotsContainerClassName: "",
    prevButtonClassName: "rounded-full ml-5 ",
    prevButtonText: <IoIosArrowBack />,
  };
  return (
    <Carousel
      defaultControlsConfig={config}
      slidesToShow={1}
      dragging={false}
      className="rounded-md overflow-hidden shadow-xl px-12"
    >
      {fleet.map((car, idx) => (
        <div
          key={idx}
          className=" flex flex-col lg:flex-row gap-8 mb-14   py-8 px-12  "
        >
          <Image
            src={car.image}
            width={1800}
            height={1800}
            className="h-80 w-full lg:min-w-[650px] lg:max-w-[700px] object-cover rounded-lg"
            alt={car.title}
          />
          <div className="flex flex-col mb-6  gap-6">
            <h1 className="text-2xl lg:text-6xl  text-gray-800 font-extrabold ">
              {car.title}
            </h1>
            <p className="text-md lg:text-lg text-gray-600">
              {car.description}
            </p>
            <button
              disabled={idx == option ? true : false}
              type="button"
              onClick={() => {
                router.push(`/booking/?index=2&option=${idx}`);
                form.setValue("imgUrl", car.image);
                form.setValue("title", car.title);
              }}
              className={`disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-main/70 bg-main/70  hover:bg-main duration-300  text-white rounded-lg p-2 lg:p-4  text-lg lg:text-2xl font-semibold`}
            >
              {option == idx ? "Choosed" : "Choose this one"}
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default StepTwoForm;
