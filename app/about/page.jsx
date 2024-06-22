"use client";
import Banners from "@/components/Banners";
import { motion } from "framer-motion";
import { fadeIn, textVariant2 } from "../contants/motion";
import SubFooter from "@/components/home/SubFooter";

const AboutUsPage = () => {
  return (
    <div>
      <Banners img="/about.jpeg" text="" title="About us" />
      <div className="max-w-[1400px] mx-auto">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={textVariant2}
          className="text-5xl md:text-7xl text-center font-extrabold mt-16 text-main mb-16"
        >
          About us
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "string", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-500 text-sm md:text-lg text-left px-4 md:text-center pb-32"
        >
          Welcome to Carent, your premier destination for hassle-free car
          rentals tailored to your needs. At Carent, we believe in simplifying
          the journey of renting a car, ensuring that every customer experiences
          convenience, reliability, and exceptional service. Founded on the
          principle of making transportation effortless, Carent offers a diverse
          fleet of vehicles ranging from sleek sedans to spacious SUVs, all
          meticulously maintained to provide you with a safe and comfortable
          ride. Whether you're planning a weekend getaway, a business trip, or
          simply need a temporary replacement vehicle, we have the perfect
          option for you. What sets Carent apart is our commitment to customer
          satisfaction. Our dedicated team is here to assist you every step of
          the way, from selecting the ideal vehicle to ensuring a seamless
          rental process. We prioritize transparency and clarity, with no hidden
          fees or surprises, so you can rent with confidence. Explore the
          freedom of the open road with Carent. Discover why countless customers
          trust us for their car rental needs. Experience the difference in
          quality, service, and affordability that defines Carent as a leader in
          the industry
        </motion.p>
      </div>
      <SubFooter />
    </div>
  );
};

export default AboutUsPage;
