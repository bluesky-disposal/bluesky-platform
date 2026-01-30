"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            About Blue Sky Disposal
          </h2>
          <div className="w-32 h-1.5 bg-[#008CBA] mx-auto rounded-full mb-10" />

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Every successful environmental management project relies on working
            safely, professionally, and seamlessly. Blue Sky Disposal delivers just that.
          </p>

          <p className="text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
            With years of experience in the industry, we pride ourselves on reliability and customer satisfaction.
            Whether for home renovation, construction projects, or large-scale cleanups, our team ensures
            accurate and on-time disposal services tailored to your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
