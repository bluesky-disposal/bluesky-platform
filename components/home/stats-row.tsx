"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "20+" },
  { label: "Projects Done", value: "1000+" },
  { label: "Dumpsters Delivered", value: "10000+" },
  { label: "Active Customers", value: "110289+" },
];

export default function StatsRow() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4"
            >
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
