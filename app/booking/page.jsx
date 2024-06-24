"use client";
import { steps } from "../contants/data";
import { GoCheckCircleFill } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";

// booking steps
import StepOneForm from "@/components/forms/StepOneForm";
import StepTwoForm from "@/components/forms/StepTwoForm";
import ContactDetailsForm from "@/components/forms/ContactDetailsForm";
import BookingSummary from "@/components/forms/BookingSummary";

const BookingPage = ({ searchParams }) => {
  const currentStep = parseInt(searchParams.index) || 1;

  const form = useForm();

  return (
    <div className="pt-20 mb-20 ">
      <div className="hidden lg:flex justify-center items-center mt-10 ml-24">
        <div className="grid grid-cols-4 gap-5 mt-5 items-center w-[75%] mb-12">
          {steps?.map((item, index) => (
            <div className="" key={index}>
              <div className="flex items-center gap-5">
                <GoCheckCircleFill
                  className={`text-6xl cursor-pointer ${
                    currentStep >= index + 1 ? "text-main" : ""
                  }`}
                />
                {index !== 3 && (
                  <div
                    className={`w-full h-0.5 ${
                      currentStep > index + 1 ? "bg-main" : "bg-black"
                    }`}
                  ></div>
                )}
              </div>
              <p className="w-full font-semibold text-sm uppercase text-slate-400">
                Step {index + 1}
              </p>
              <p className="w-full font-semibold text-xl uppercase text-slate-600">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {currentStep === 1 && <StepOneForm form={form} />}
      {currentStep === 2 && <StepTwoForm form={form} />}
      {currentStep === 3 && <ContactDetailsForm form={form} />}
      {currentStep === 4 && <BookingSummary form={form} />}
      <div
        className={`${
          currentStep == 4 ? "hidden" : "flex"
        } justify-between items-center mx-10 py-3 mt-4`}
      >
        <Link
          href={`/booking?index=${
            currentStep === 1 ? currentStep : currentStep - 1
          }`}
          className="flex items-center gap-6 bg-black hover:bg-black/80 duration-500 text-white font-semibold px-6 py-2 md:px-10 md:py-3 rounded-full text-md md:text-xl"
        >
          <FaArrowLeftLong />
          Back
        </Link>
        <Link
          href={`/booking?index=${currentStep + 1}`}
          className="flex items-center gap-6 bg-main hover:bg-main/70 duration-500 text-white font-semibold px-6 py-2 md:px-10 md:py-3 text-md rounded-full md:text-xl"
        >
          Next
          <FaArrowLeftLong className="rotate-180" />
        </Link>
      </div>
    </div>
  );
};

export default BookingPage;
