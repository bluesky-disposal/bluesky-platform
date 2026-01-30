"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much is a dumpster rental?",
    answer: "Pricing depends on the dumpster size, rental period, and your address. Contact us for a free, transparent quote."
  },
  {
    question: "What size dumpster do I need?",
    answer: "For small cleanouts, a 10-yard dumpster is usually sufficient. For large renovations, we recommend 30 or 40-yard dumpsters. Check our size guide for details."
  },
  {
    question: "How long is the rental period?",
    answer: "Our standard rental period is 7 days, but we offer flexible scheduling to meet your project timeline."
  },
  {
    question: "What items are prohibited?",
    answer: "Hazardous materials, batteries, tires, and electronics are generally prohibited. Please ask for a full list of restricted items."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Michigan Dumpster Rentals: Frequently Asked Questions</h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-blue-500 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AccordionItem value={`item-${i}`} className="border rounded-lg px-6 bg-blue-50 border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Animated Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
              View All FAQs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
