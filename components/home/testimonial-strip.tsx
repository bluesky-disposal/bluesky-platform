"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    text: "Working with Blue Sky was a breeze! They delivered the dumpster on time and picked it up exactly when I asked. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "John Roberts",
    text: "We use Blue Sky for all our construction projects. Their drivers are professional and careful with placement. Great service every time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Emily Anderson",
    text: "The best waste management company I've used. Fair pricing and transparent billing. Will definitely use them again for my next cleanout.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
];

export default function TestimonialStrip() {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        {/* Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our verified customers have to say about their experience with Blue Sky Disposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex gap-1"
                    >
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                      ))}
                    </motion.div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    "{t.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Google Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg lg:sticky lg:top-24 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </motion.div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Rate Us On Google</div>
                <div className="text-sm text-gray-500">See our reviews and ratings</div>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-gray-900"
              >
                4.5
              </motion.span>
              <div className="mb-2">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-1 mb-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : i === 4 ? "text-yellow-400 fill-yellow-400 opacity-50" : "text-gray-300"}`} />
                  ))}
                </motion.div>
                <span className="text-sm text-gray-500">Based on 145 reviews</span>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              {[5, 4, 3, 2, 1].map((stars, idx) => (
                <motion.div
                  key={stars}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="w-3 text-gray-500">{stars}</span>
                  <Star className="w-3 h-3 text-gray-400" />
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 1 ? '5%' : '2%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="h-full bg-yellow-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-[#008CBA] hover:bg-[#007ba3] text-white transition-all duration-300">
                Review us on Google
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
