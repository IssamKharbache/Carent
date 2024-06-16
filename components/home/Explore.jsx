"use client";
import React from "react";
import styles from "../../app/contants/styles";
import TitleText from "./TitleText";
import { cardsInfo } from "@/app/contants/data";
import ExploreCard from "@/components/home/ExploreCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant2 } from "@/app/contants/motion";

const Explore = () => {
  return (
    <section className="px-6 py-10 mb-12 min-h-[90vh] mt-24 ">
      <div className={`${styles.innerWidth} mx-auto flex flex-col `}>
        <TitleText
          title={
            <span className="text-gray-900 font-extrabold text-4xl md:text-7xl">
              Why Carent ?
            </span>
          }
        />
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32"
        >
          {cardsInfo?.map((info, idx) => {
            return <ExploreCard key={idx} info={info} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
