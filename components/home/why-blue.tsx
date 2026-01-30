"use client";

import { motion } from "framer-motion";
import { Award, Clock, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Women-Owned Company",
    subtitle: "Strong Women Foundation",
    description: "",
    gradient: "from-pink-500 to-rose-500",
    bgLight: "from-pink-50 to-rose-50"
  },
  {
    icon: Clock,
    title: "15+ Years",
    subtitle: "Experience",
    description: "",
    gradient: "from-blue-500 to-indigo-500",
    bgLight: "from-blue-50 to-indigo-50"
  },
  {
    icon: MapPin,
    title: "50+ Cities",
    subtitle: "Servicing",
    description: "",
    gradient: "from-cyan-500 to-blue-500",
    bgLight: "from-cyan-50 to-blue-50"
  },
  {
    icon: Users,
    title: "10,000+",
    subtitle: "Customers Served",
    description: "",
    gradient: "from-teal-500 to-emerald-500",
    bgLight: "from-teal-50 to-emerald-50"
  }
];

export default function WhyBlueSky() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600">Blue Sky</span> Disposal?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">We're more than just a waste management company—we're Michigan's trusted partner for quality service and innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className={`group bg-gradient-to-br ${feature.bgLight} rounded-2xl p-8 border-2 border-transparent hover:border-gray-200 transition-all cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all`}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </motion.div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <p className="text-sm text-gray-600 mt-2 font-semibold">
                      {feature.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
