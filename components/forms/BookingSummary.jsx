import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getDistance } from "@/lib/calculateDistance";
import Link from "next/link";
const BookingSummary = ({ form }) => {
  const [price, setPrice] = useState();
  const {
    imgUrl,
    transfertype,
    title,
    firstname,
    lastname,
    email,
    phone,
    comment,
    source,
    destination,
  } = form.getValues();
  useEffect(() => {
    if (source?.length && destination?.length) {
      const sourceValue = source?.split(",");
      const destinationValue = destination?.split(",");

      const distanceInKm = getDistance(
        parseFloat(sourceValue[0]),
        parseFloat(sourceValue[1]),
        parseFloat(destinationValue[0]),
        parseFloat(destinationValue[1])
      );
      const finalPrice =
        transfertype == "one way"
          ? parseInt(distanceInKm)
          : 2 * parseInt(distanceInKm);

      setPrice(finalPrice);
    }
  }, [source, destination]);
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className=" grid grid-cols-1 p-4 mt-10">
        <div className="relative w-full mb-4 rounded overflow-hidden">
          <Image
            src={imgUrl}
            width={1800}
            height={1800}
            alt={title}
            className="rounded-md object-cover"
          />
        </div>
        <h3 className="font-bold text-2xl mt-8">Order information</h3>
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b mb-5 pb-5">
            <div className="">
              <h3 className="text-3xl font-bold mb-5">{title}</h3>
              <p className="text-lg font-bold">
                Price : <span className="text-2xl">${price}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 p-5 rounded-lg mb-8 gap-4">
              <div className="flex gap-4">
                <span>First name : </span>
                <span className="font-bold"> {firstname}</span>
              </div>
              <div className="flex gap-4">
                <span>Last name : </span>
                <span className="font-bold"> {lastname}</span>
              </div>
              <div className="flex gap-4">
                <span>Phone number: </span>
                <span className="font-bold"> {phone}</span>
              </div>
              <div className="flex gap-4">
                <span>Email : </span>
                <span className="font-bold"> {email}</span>
              </div>
              <div className="flex gap-4">
                <span>Comment : </span>
                <span className="font-bold"> {comment}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              href="/booking?index=3"
              className="flex items-center  gap-6 bg-black/80 hover:bg-black duration-500 text-white font-semibold px-6 py-2 md:px-10 md:py-3 text-md rounded-full md:text-xl"
            >
              Go back
            </Link>
            <Link
              href="/payment"
              className="flex items-center  gap-6 bg-main hover:bg-main/70 duration-500 text-white font-semibold px-6 py-2 md:px-10 md:py-3 text-md rounded-full md:text-xl"
            >
              Pay now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
