import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is vivid AI?",
    answer:
      "Vivid AI is an advanced artificial intelligence system designed to enhance user experience.",
  },
  {
    question: "What is vivid AI?",
    answer:
      "Vivid AI is an advanced artificial intelligence system designed to enhance user experience.",
  },
  {
    question: "What is vivid AI?",
    answer:
      "Vivid AI is an advanced artificial intelligence system designed to enhance user experience.",
  },
  {
    question: "What is vivid AI?",
    answer:
      "Vivid AI is an advanced artificial intelligence system designed to enhance user experience.",
  },
  {
    question: "What is vivid AI?",
    answer:
      "Vivid AI is an advanced artificial intelligence system designed to enhance user experience.",
  },
];

const Faq = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#171717] text-white flex flex-col md:flex-row items-center justify-evenly gap-10">
      {/* Left Section */}
      <div className=" md:w-1/2 flex flex-col gap-4 items-center md:items-start justify-around md:pl-30">
        <h2 className="text-3xl mt-10 md:text-4xl text-center md:text-start">
          Ask us anything
          <br /> we're here for you!
        </h2>
        <div>
          <Button
            variant="outline"
            className="border-red-500 w-auto inline-flex bg-transparent rounded-3xl text-red-500 hover:bg-red-500 hover:text-white mt-2"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Right Section - FAQ List */}
      <div className="w-full md:w-1/2 md:px-12 px-12 mb-6 md:pr-24 space-y-2">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="justify-between text-xl hover:bg-[#353434b3] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
