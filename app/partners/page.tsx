"use client";

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import PartnersContent from "@/components/partners/partners-content";
import PartnersForm from "@/components/partners/partners-form";
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

export default function PartnersPage() {
  const highlights = [
    { number: "50+", label: "Active Partners", icon: Users },
    { number: "50+", label: "Cities Served", icon: TrendingUp },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Jobs Monthly", icon: CheckCircle }
  ];

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Premium Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden border-b border-blue-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-15 -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
                🚀 Grow Your Business
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Partner with <span className="text-blue-600">Blue Sky</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Unlimited Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join Michigan's most trusted waste management partner network. Scale your business with dedicated support, proven strategies, and access to 50+ cities.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:shadow-lg transition-all">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{highlight.number}</div>
                  <div className="text-sm md:text-base text-gray-600 mt-2 font-semibold">{highlight.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Content - Takes 2 columns on desktop */}
            <div className="lg:col-span-2">
              <PartnersContent />
            </div>

            {/* Right Form */}
            <div className="lg:col-span-1">
              <PartnersForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Partners Choose Blue Sky</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to succeed in the waste management business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Reliable Payments",
                description: "Quick turnaround with transparent billing and hassle-free payment options.",
                icon: "💰",
                color: "from-amber-50 to-orange-50",
                borderColor: "border-amber-200"
              },
              {
                title: "Dedicated Support",
                description: "Personalized account managers ready to help you succeed every step of the way.",
                icon: "👥",
                color: "from-pink-50 to-rose-50",
                borderColor: "border-pink-200"
              },
              {
                title: "50+ Cities",
                description: "Access to extensive network across Michigan with commercial and residential opportunities.",
                icon: "🌐",
                color: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200"
              },
              {
                title: "Growth Tools",
                description: "Marketing strategies and sales techniques to scale your business faster than ever.",
                icon: "📈",
                color: "from-green-50 to-emerald-50",
                borderColor: "border-green-200"
              },
              {
                title: "Flexible Terms",
                description: "Custom partnership setups tailored specifically to your business needs and goals.",
                icon: "⚡",
                color: "from-purple-50 to-indigo-50",
                borderColor: "border-purple-200"
              },
              {
                title: "Woman-Owned Trusted",
                description: "Partner with Michigan's leading woman-owned waste management company.",
                icon: "🎯",
                color: "from-red-50 to-pink-50",
                borderColor: "border-red-200"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" }}
                className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-8 border-2 ${benefit.borderColor} hover:border-opacity-100 transition-all cursor-pointer group`}
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Growing?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join our partner network today and unlock unlimited revenue potential. Our team will reach out within 24 hours to discuss custom partnership opportunities.
          </p>
          <motion.a 
            href="#apply" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Apply Now to Partner
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
