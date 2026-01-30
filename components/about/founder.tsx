"use client";

import ImageWithFallback from "@/components/ui/image-with-fallback";
import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Founder
        </motion.h2>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden md:flex"
        >
          {/* Founder Image */}
          <div className="md:w-1/2 h-[450px] overflow-hidden">
            <ImageWithFallback
              src="https://www.blueskydisposal.com/wp-content/themes/bluesky/images/migena_photo.jpg"
              alt="Founder Migena Gjonaj"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Founder Content */}
          <div className="md:w-1/2 p-10">
            <h3 className="text-3xl font-bold mb-2">Migena Gjonaj</h3>
            <p className="text-blue-600 text-lg font-medium mb-6">
              Founder & CEO
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Migena Gjonaj, a tenacious and visionary entrepreneur, is the
              proud founder of Blue Sky Disposal, built with passion and
              dedication to transform Michigan's waste management industry.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Born in Tirana, Albania, Migena and her sisters Annie and Elvana
              moved to the United States chasing opportunity and building a
              legacy grounded in hard work, service, and integrity.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Starting her journey as a phone operator at Allied Waste in 2000,
              she mastered dispatch, logistics, and operations—skills that later
              shaped Blue Sky Disposal into a customer-first, community-driven
              business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
