"use client";

import { motion } from "framer-motion";
import { Clock, Recycle, Shield, Truck } from "lucide-react";

const bgColors: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

export default function WhyBlue() {
  const items = [
    {
      icon: Truck,
      title: "Modern Fleet",
      description:
        "Well-maintained trucks and equipment for reliable service delivery",
      color: "blue",
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      description:
        "Committed to sustainable waste management and recycling practices",
      color: "green",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Same-day and next-day service available for your convenience",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Fully Licensed",
      description:
        "Licensed and insured to serve all of Michigan with confidence",
      color: "orange",
    },
  ];

  return (
    <div className="w-full">
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose Blue Sky Disposal?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${bgColors[item.color]
                      } rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
