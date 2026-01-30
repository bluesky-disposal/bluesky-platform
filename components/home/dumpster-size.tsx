"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const dumpsterTypes = [
  {
    title: "Roll Off Dumpsters",
    description: "Perfect for construction and large cleanups",
    image: "/images/roll-off-dumpster.png",
    action: "Book Now",
    link: "/services/dumpster-rental/roll-off",
    gradient: "from-blue-500 to-cyan-500",
    bgLight: "from-blue-50 to-cyan-50",
    badge: "Most Popular"
  },
  {
    title: "Rubber Wheeled Dumpsters",
    description: "Flexible solution for ongoing waste management",
    image: "/images/rubber-wheel-dumpster.png",
    action: "Book Now",
    link: "/services/dumpster-rental/rubber-wheeled",
    gradient: "from-indigo-500 to-purple-500",
    bgLight: "from-indigo-50 to-purple-50"
  },
  {
    title: "Permanent Dumpsters",
    description: "Long-term waste management solution",
    image: "/images/permanent-dumpster.png",
    action: "Book Now",
    link: "/services/dumpster-rental/permanent",
    gradient: "from-teal-500 to-emerald-500",
    bgLight: "from-teal-50 to-emerald-50"
  }
];

export default function DumpsterTypeSelection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Dumpster</span> Type
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Find the perfect solution for your waste management needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dumpsterTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
              className={`group relative bg-gradient-to-br ${type.bgLight} rounded-3xl overflow-hidden border-2 border-transparent hover:border-gray-200 transition-all flex flex-col h-full shadow-lg hover:shadow-2xl`}
            >
              {/* Badge */}
              {type.badge && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${type.gradient} text-white text-sm font-bold rounded-full z-10`}
                >
                  {type.badge}
                </motion.div>
              )}

              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h3>

                <p className="text-gray-600 text-sm mb-8 flex-grow">
                  {type.description}
                </p>

                {/* Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${type.gradient} hover:shadow-lg text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group/btn`}
                  >
                    <Link href={type.link} className="flex items-center gap-2">
                      {type.action}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
