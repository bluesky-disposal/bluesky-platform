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
    title: "Online Booking",
    description:
      "Call or book online to discuss your project needs and get a free quote",
    icon: Phone,
    image: "/images/step1.jpg",
  },
  {
    number: 2,
    title: "Choose Your Dumpster",
    description:
      "Select the perfect size for your residential or commercial project",
    icon: Trash2,
    image: "/images/step2.jpg",
  },
  {
    number: 3,
    title: "Schedule Delivery",
    description:
      "Pick a date and time that works best for your project timeline",
    icon: Calendar,
    image: "/images/step3.jpg",
  },
  {
    number: 4,
    title: "We Deliver",
    description:
      "Our professional team delivers the dumpster to your specified address",
    icon: Truck,
    image: "/images/step4.jpg",
  },
  {
    number: 5,
    title: "Fill at Your Pace",
    description:
      "Take your time filling the dumpster according to your project schedule",
    icon: Clock,
    image: "/images/step5.jpg",
  },
  {
    number: 6,
    title: "We Pick Up",
    description:
      "Call us when you're ready and we'll haul away your waste responsibly",
    icon: CheckCircle,
    image: "/images/step6.jpg",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-20 px-6 bg-gray-50 overflow-hidden">
      {/* Section Heading */}
      <div className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900"
        >
          How Our Rental Process Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-gray-600"
        >
          A simple & smooth 6-step booking experience
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circle Image */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden bg-white"
              >
                <ImageWithFallback
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Step Badge */}
              <span className="mt-4 mb-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow">
                Step {step.number}
              </span>

              {/* Title + Icon aligned */}
              <div className="flex items-center justify-center gap-2 min-h-[48px] px-2">
                <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-[220px]">
                {step.description}
              </p>

              {/* Arrow (hidden on last & mobile for cleanliness) */}
              {index < processSteps.length - 1 && (
                <ArrowRight className="hidden xl:block w-5 h-5 text-blue-400 mt-6" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
