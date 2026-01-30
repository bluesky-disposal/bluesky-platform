"use client";

import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export function Hero() {
  const [address, setAddress] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["Michigan's", "Trusted", "Waste", "Management", "Solution"];

  useEffect(() => {
    if (wordIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + (prev ? " " : "") + words[wordIndex]);
        setWordIndex(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayText("");
        setWordIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [wordIndex]);

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image Container - Fixed flickering */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/Home_page_main.png"
          alt="Blue Sky Disposal Services"
          className="w-full h-full object-cover object-[center_75%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg"
        >
          <span className="text-lg">👩</span>
          <span>Women-Owned & Operated</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
        >
          Blue Sky Disposal
        </motion.h1>

        {/* Animated Subheading */}
        <div className="min-h-[60px] sm:min-h-[70px] mb-8 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 drop-shadow-lg px-4"
          >
            {displayText || "\u00A0"}
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 max-w-4xl mx-auto drop-shadow-lg px-4"
        >
          Professional dumpster rental services for residential, commercial, and construction projects across Michigan
        </motion.p>

        {/* Address Search Box - Fixed Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto mb-12 px-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" size={22} />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address to check service area"
                  className="w-full h-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none text-slate-900 text-base sm:text-lg transition-all"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-full min-h-[56px] text-base sm:text-lg rounded-xl whitespace-nowrap font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                Check Service
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/10 transition-all">
            <div className="text-5xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-white/90 font-medium text-base">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/10 transition-all">
            <div className="text-5xl font-bold text-cyan-400 mb-2">5K+</div>
            <div className="text-white/90 font-medium text-base">Happy Customers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/10 transition-all">
            <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-white/90 font-medium text-base">Service Areas</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
