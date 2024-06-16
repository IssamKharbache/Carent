"use client";
import { faqQuestions } from "@/app/contants/data";
import { fadeIn } from "@/app/contants/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      className=" mt-4 md:py-10 bg-[#f6f5f4] max-w-[1400px]
      rounded-3xl mx-auto mb-8
    "
    >
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black mb-4">
          FAQS
        </div>
        <div className="  font-semibold text-xl md:text-6xl text-gradient bg-gradient-to-r from-main to-emerald-600 t bg-clip-text text-transparent mb-8">
          Common questions
        </div>
        {faqQuestions.map((item, idx) => (
          <Accordion key={idx} type="single" collapsible>
            <AccordionItem className="text-xl" value="item-1">
              <AccordionTrigger className="text-sm md:text-lg text-left md:text-center">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-lg font-semibold">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
