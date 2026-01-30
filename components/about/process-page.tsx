"use client";

import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  Trash2,
  Truck,
} from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Online Booking (Preferred)",
    description:
      "Call or book online to discuss your project needs and get a free quote",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1558731991-cb3430a08bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 2,
    title: "Choose Your Dumpster",
    description:
      "Select the perfect size for your residential or commercial project",
    icon: Trash2,
    image:
      "https://images.unsplash.com/photo-1653202143301-7fb80a90010c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 3,
    title: "Schedule Delivery",
    description:
      "Pick a date and time that works best for your project timeline",
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 4,
    title: "We Deliver",
    description:
      "Our professional team delivers the dumpster to your specified address",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 5,
    title: "Fill at Your Pace",
    description:
      "Take your time filling the dumpster according to your project schedule",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1653202143301-7fb80a90010c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 6,
    title: "We Pick Up",
    description:
      "Call us when you're ready and we'll haul away your waste responsibly",
    icon: CheckCircle,
    image:
      "https://images.unsplash.com/photo-1653406384710-08688ec6b979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#3b82f6"
            d="M0,32L60,42.7C120,53,240,75,360,112C480,149,600,203,720,213.3C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192V320H0Z"
          />
        </svg>
      </div>

      {/* Section Heading */}
      <div className="relative text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          How Our Rental Process Works
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto mb-6 max-w-xs"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 font-medium"
        >
          A simple &amp; smooth 6-step booking experience
        </motion.p>
      </div>

      {/* Flow Section */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-[85px] left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full" />

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-16 relative z-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* Circle Image */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-xl overflow-hidden bg-white ring-2 ring-offset-2 ring-blue-300"
                >
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Step Number */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="relative -mt-4 mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg text-sm font-bold tracking-wide">
                    Step {step.number}
                  </span>
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold text-gray-900 flex items-center gap-2 text-center leading-tight ${index === 0 ? "mr-8" : ""
                    } ${index === 1 ? "ml-6" : ""}`}
                >
                  <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{step.title}</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-3 text-center px-3 leading-relaxed max-w-[180px]">
                  {step.description}
                </p>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-blue-500 mt-4 h-6 flex items-center"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
