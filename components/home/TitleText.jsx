"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/app/contants/motion";
const TitleText = ({ textStyles, title }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-2 text-main font-bold md:text-[36px] text-[36px] text-center ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
