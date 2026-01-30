"use client";

import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  MapPin,
  Users
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. What we quote is what you pay.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Same-day and next-day delivery available across Michigan.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Michigan-owned with deep understanding of local needs.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Friendly team ready to help every step of the way.",
  },
];

export default function WhyChooseBenefits() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Our Commitment to Excellence</h2>
          <p className="text-xl text-gray-600">
            Experience the difference of working with Michigan's premier
            dumpster rental service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
