"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, TrendingUp, Handshake, Award } from "lucide-react";

export default function PartnersContent() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Quick Payments",
      description: "Fast payment options with transparent billing"
    },
    {
      icon: Zap,
      title: "Sales Support",
      description: "Cutting-edge marketing and sales strategies"
    },
    {
      icon: Users,
      title: "Dedicated Manager",
      description: "Personal account manager for your success"
    },
    {
      icon: TrendingUp,
      title: "Custom Setup",
      description: "Partnership tailored to your business"
    },
    {
      icon: Handshake,
      title: "Diverse Projects",
      description: "Commercial and residential opportunities"
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Michigan's most trusted waste company"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Partner with Blue Sky and <span className="text-blue-600">Scale Your Business</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Join forces with Michigan's leading waste management company. We're equipped with top-notch equipment and a proven track record of success. Now we're looking for partners like you to expand our network and deliver exceptional service across 50+ cities.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          Whether you're looking to add waste management to your service offerings or scale an existing operation, Blue Sky provides the support, tools, and opportunities you need to succeed.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-8">What You Get</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const borderColors = [
              "border-blue-400",
              "border-indigo-400",
              "border-cyan-400",
              "border-teal-400",
              "border-purple-400",
              "border-pink-400"
            ];
            const bgHoverColors = [
              "hover:bg-blue-50",
              "hover:bg-indigo-50",
              "hover:bg-cyan-50",
              "hover:bg-teal-50",
              "hover:bg-purple-50",
              "hover:bg-pink-50"
            ];
            const iconColors = [
              "text-blue-600",
              "text-indigo-600",
              "text-cyan-600",
              "text-teal-600",
              "text-purple-600",
              "text-pink-600"
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`bg-white p-5 rounded-xl border-2 ${borderColors[index % 6]} ${bgHoverColors[index % 6]} transition-all group cursor-pointer shadow-sm hover:shadow-md`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className={`w-6 h-6 ${iconColors[index % 6]} group-hover:scale-125 transition-transform`} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* How It Works - Timeline Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-12">How It Works</h3>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-teal-400" />
          
          <div className="space-y-8">
            {[
              { step: 1, emoji: "📝", title: "Fill Out the Form", description: "Tell us about your business and goals", color: "blue" },
              { step: 2, emoji: "⚡", title: "Quick Review", description: "We'll evaluate your application within 24 hours", color: "indigo" },
              { step: 3, emoji: "💬", title: "Personalized Call", description: "Discuss custom partnership terms and opportunities", color: "cyan" },
              { step: 4, emoji: "🚀", title: "Launch", description: "Start generating revenue with Blue Sky", color: "teal" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 8 }}
                className="pl-24 relative group"
              >
                {/* Step Badge */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-2xl transition-all"
                >
                  {item.step}
                </motion.div>

                {/* Content Card */}
                <div className={`bg-gradient-to-r ${
                  item.color === 'blue' ? 'from-blue-50 to-blue-100' :
                  item.color === 'indigo' ? 'from-indigo-50 to-indigo-100' :
                  item.color === 'cyan' ? 'from-cyan-50 to-cyan-100' :
                  'from-teal-50 to-teal-100'
                } rounded-2xl p-6 border-2 ${
                  item.color === 'blue' ? 'border-blue-400' :
                  item.color === 'indigo' ? 'border-indigo-400' :
                  item.color === 'cyan' ? 'border-cyan-400' :
                  'border-teal-400'
                } hover:shadow-xl transition-all group/card cursor-pointer`}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover/card:scale-125 transition-transform">{item.emoji}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg group-hover/card:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Completion Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              ✨ Ready to Partner with Blue Sky? Start Here!
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
