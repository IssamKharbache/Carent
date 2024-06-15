import { faqQuestions } from "@/app/contants/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div
      className=" mt-4 md:py-10 bg-[#f6f5f4] max-w-[1400px]
    rounded-3xl mx-auto
    "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black mb-4">
          FAQS
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-main to-memerald-600 bg-clip-text text-transparent mb-8">
          Common questions
        </div>
        {faqQuestions.map((item, idx) => (
          <Accordion type="single" collapsible>
            <AccordionItem className="text-xl" value="item-1">
              <AccordionTrigger className="text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg font-semibold">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
