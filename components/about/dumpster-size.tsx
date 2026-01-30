"use client";

import ImageWithFallback from "@/components/ui/image-with-fallback";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function DumpsterSizes() {
  const dumpsterOptions = [
    {
      size: "10 Yard",
      dimensions: "12' x 8' x 3.5'",
      ideal: "Small cleanouts, garage cleanup",
      pickup: "~3 pickup trucks",
    },
    {
      size: "15 Yard",
      dimensions: "14' x 8' x 4.5'",
      ideal: "Medium renovations, roofing",
      pickup: "~4.5 pickup trucks",
    },
    {
      size: "20 Yard",
      dimensions: "22' x 8' x 4.5'",
      ideal: "Large remodels, deck removal",
      pickup: "~6 pickup trucks",
    },
    {
      size: "30-40 Yard",
      dimensions: "22' x 8' x 6-8'",
      ideal: "Commercial projects, new construction",
      pickup: "~9-12 pickup trucks",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-white">Available Dumpster Sizes</h2>
          <p className="text-xl text-gray-200">
            Choose the perfect size for your project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dumpsterOptions.map((dumpster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-600"
            >
              <div className="text-center">
                <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full mb-4">
                  <span className="text-2xl">{dumpster.size}</span>
                </div>
                <p className="text-gray-600 mb-4">{dumpster.dimensions}</p>
                <div className="h-24 mb-4 flex items-center justify-center">
                  <Trash2 className="w-16 h-16 text-blue-600" />
                </div>
                <p className="mb-2">
                  <strong>Ideal for:</strong>
                </p>
                <p className="text-gray-600 mb-3">{dumpster.ideal}</p>
                <p className="text-sm text-gray-500">{dumpster.pickup}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
