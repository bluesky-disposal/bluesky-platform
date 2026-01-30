"use client";

import { motion } from "framer-motion";
import { ClipboardList, Calendar, Package, Truck, ArrowRight, Clock, CheckCircle } from "lucide-react";
import ImageWithFallback from "@/components/ui/image-with-fallback";

const steps = [
  {
    number: 1,
    title: "Online Booking (Preferred)",
    description: "Call or book online to discuss your project needs and get a free quote",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1558731991-cb3430a08bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 2,
    title: "Choose Your Dumpster",
    description: "Select the perfect size for your residential or commercial project",
    icon: Package,
    image: "https://images.unsplash.com/photo-1653202143301-7fb80a90010c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 3,
    title: "Schedule Delivery",
    description: "Pick a date and time that works best for your project timeline",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 4,
    title: "We Deliver",
    description: "Our professional team delivers the dumpster to your specified location",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 5,
    title: "Fill at Your Pace",
    description: "Take your time filling the dumpster according to your project schedule",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1653202143301-7fb80a90010c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    number: 6,
    title: "We Pick Up",
    description: "Call us when you're ready and we'll haul away your waste responsibly",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1653406384710-08688ec6b979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Section Heading */}
      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
          How Our Rental Process Works
        </h2>
        <p className="text-xl text-gray-500 font-medium">
          A simple & smooth 6-step booking experience
        </p>
      </div>

      {/* Flow Section */}
      <div className="relative max-w-[1400px] mx-auto">
        {/* The Blue Line - Aligned with the 'Step' badges */}
        <div className="hidden xl:block absolute top-[110px] left-10 right-10 h-1.5 bg-[#3b82f6] rounded-full opacity-100 z-0" />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Image Wrapper */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md overflow-hidden bg-white z-10 relative"
                  >
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Step Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="block px-5 py-1 bg-blue-600 text-white text-xs md:text-sm font-bold rounded-full shadow-sm whitespace-nowrap border-2 border-white">
                      Step {step.number}
                    </span>
                  </div>
                </div>

                {/* Spacer for badge */}
                <div className="h-6" />

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-gray-900 flex items-center justify-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm px-2 leading-relaxed h-16">
                  {step.description}
                </p>

                {/* Arrow (Blue arrow below text - Mobile Only) */}
                <div className="h-6 flex items-center justify-center mt-2 md:hidden">
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-blue-600 transform rotate-90" />
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
