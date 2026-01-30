"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Smartphone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get In <span className="text-blue-600">Touch With Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? Need a quote? Our friendly team is here to help. Reach out today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "(123) 456-7890",
                detail: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM",
                color: "from-blue-600 to-cyan-600",
                bgLight: "from-blue-50 to-cyan-50",
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@blueskydisposal.com",
                detail: "We respond within 24 hours",
                color: "from-purple-600 to-pink-600",
                bgLight: "from-purple-50 to-pink-50",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Detroit, MI 48201",
                detail: "123 Disposal Way",
                color: "from-emerald-600 to-teal-600",
                bgLight: "from-emerald-50 to-teal-50",
              },
              {
                icon: Smartphone,
                title: "Text Us",
                value: "(123) 456-7890",
                detail: "Quick responses to your SMS",
                color: "from-orange-600 to-red-600",
                bgLight: "from-orange-50 to-red-50",
              },
            ].map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`bg-gradient-to-br ${method.bgLight} rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-lg`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-base font-semibold text-gray-800 mb-1">{method.value}</p>
                  <p className="text-sm text-gray-600">{method.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Phone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(123) 456-7890"
                          className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        placeholder="Tell us more about your project..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none bg-white resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </>
                )}
              </form>
            </motion.div>

            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Info */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Main Office</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Address</p>
                      <p className="text-lg font-bold text-gray-900">123 Disposal Way</p>
                      <p className="text-gray-700">Detroit, MI 48201</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Phone</p>
                      <p className="text-lg font-bold text-gray-900">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Email</p>
                      <p className="text-lg font-bold text-gray-900">info@blueskydisposal.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", time: "7:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "8:00 AM - 4:00 PM" },
                    { day: "Sunday", time: "Closed" },
                    { day: "Holidays", time: "Call for availability" },
                  ].map((hour, i) => (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-blue-200 last:border-0 last:pb-0">
                      <span className="font-semibold text-gray-900">{hour.day}</span>
                      <span className="text-gray-700">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">5,000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions?</h2>
            <p className="text-gray-600">Check our FAQ or contact us directly</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="h-12 px-8 border-2 hover:bg-gray-50"
            >
              View FAQ
            </Button>
            <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
