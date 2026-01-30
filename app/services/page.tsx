'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, TrendingUp, Shield, Truck, Clock, Award, ArrowRight, Star, Users, Zap as ZapIcon } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: 'Roll-Off Dumpster',
      tagline: 'Perfect for Construction & Large Projects',
      image: '/images/roll-off-dumpster.png',
      description: 'Our most versatile option, ideal for temporary projects and large-scale waste removal with flexible sizing.',
      capacity: '10-40 cubic yards',
      prices: 'Starting from $425',
      badge: 'Most Popular',
      badgeColor: 'from-amber-500 to-orange-500',
      icon: Truck,
      color: 'from-blue-600 to-cyan-600',
      bgLight: 'from-blue-50 to-cyan-50',
      gradientCard: 'from-blue-500 via-cyan-500 to-blue-500',
      uses: ['Construction debris', 'Large cleanouts', 'Demolition projects', 'Renovation waste'],
      stats: { number: '3,400+', label: 'Projects Completed' }
    },
    {
      id: 2,
      name: 'Rubber-Wheeled Dumpster',
      tagline: 'Flexible & Mobile Solutions',
      image: '/images/rubber-wheel-dumpster.png',
      description: 'Mobile dumpsters perfect for businesses with regular waste needs and ongoing operations.',
      capacity: '2-8 cubic yards',
      prices: 'Starting from $325',
      badge: 'Flexible',
      badgeColor: 'from-emerald-500 to-teal-500',
      icon: Truck,
      color: 'from-purple-600 to-pink-600',
      bgLight: 'from-purple-50 to-pink-50',
      gradientCard: 'from-purple-500 via-pink-500 to-purple-500',
      uses: ['Restaurants & food service', 'Retail stores', 'Apartment complexes', 'Events & festivals'],
      stats: { number: '2,100+', label: 'Active Customers' }
    },
    {
      id: 3,
      name: 'Permanent Dumpster',
      tagline: 'Long-Term Professional Solutions',
      image: '/images/permanent-dumpster.png',
      description: 'A long-term solution for consistent waste management with a professional appearance.',
      capacity: '2-8 cubic yards',
      prices: 'Starting from $299/month',
      badge: 'Best Value',
      badgeColor: 'from-rose-500 to-red-500',
      icon: Shield,
      color: 'from-emerald-600 to-teal-600',
      bgLight: 'from-emerald-50 to-teal-50',
      gradientCard: 'from-emerald-500 via-teal-500 to-emerald-500',
      uses: ['Commercial buildings', 'Shopping centers', 'Industrial facilities', 'Multi-family housing'],
      stats: { number: '1,200+', label: 'Long-Term Contracts' }
    },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Expert Team',
      description: 'Trained professionals with 15+ years of experience',
      color: 'from-blue-500 to-cyan-500',
      number: '15+'
    },
    {
      icon: Zap,
      title: 'Same-Day Service',
      description: 'Quick delivery available in most areas',
      color: 'from-purple-500 to-pink-500',
      number: '24H'
    },
    {
      icon: TrendingUp,
      title: 'Best Pricing',
      description: 'Competitive rates without quality compromise',
      color: 'from-emerald-500 to-teal-500',
      number: '#1'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence and service',
      color: 'from-orange-500 to-red-500',
      number: '50+'
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4" />
              <span className="text-sm font-bold">Trusted Waste Management Partner</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional <span className="text-blue-600">Dumpster Services</span> <br /> for Every Project
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive waste management solutions tailored to your needs. From small residential cleanups to large construction projects, we have the perfect dumpster for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards - Enhanced */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -16, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
                  className={`bg-gradient-to-br ${service.bgLight} rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-all shadow-lg hover:shadow-2xl group relative`}
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className={`absolute top-6 right-6 z-10 bg-gradient-to-r ${service.badgeColor} text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg backdrop-blur-sm`}>
                      {service.badge}
                    </div>
                  )}

                  {/* Image Section with Overlay */}
                  <div className="relative h-80 bg-white overflow-hidden">
                    <Image
                      src={service.image || '/placeholder.svg'}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradientCard} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Price Tag with better styling */}
                    <div className={`absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/50`}>
                      <p className="text-xs font-bold text-gray-600 uppercase">Price</p>
                      <p className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.prices}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <p className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2 uppercase tracking-wide`}>
                          {service.tagline}
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                      </div>
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                    {/* Capacity Badge */}
                    <div className={`bg-gradient-to-r ${service.color} rounded-2xl p-4 mb-6 text-white`}>
                      <p className="text-xs font-bold uppercase opacity-80">Capacity</p>
                      <p className="text-lg font-bold">{service.capacity}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b-2 border-gray-200">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <p className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.stats.number}</p>
                        <p className="text-xs text-gray-600 font-semibold">{service.stats.label}</p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-yellow-500">⭐4.9</p>
                        <p className="text-xs text-gray-600 font-semibold">Rating</p>
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 uppercase mb-3">Perfect For</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.uses.slice(0, 4).map((use, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            <span className="text-sm text-gray-700 font-medium">{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className={`w-full h-12 text-base font-bold bg-gradient-to-r ${service.color} text-white hover:shadow-lg transform hover:scale-105 transition-all rounded-xl relative overflow-hidden group/btn`}
                    >
                      <Link href={`/services/dumpster-rental/${service.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose Blue Sky?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional service and reliable solutions for all your waste management needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-3xl p-6 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  >
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <p className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent text-center mb-2`}>
                    {benefit.number}
                  </p>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process - Enhanced */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Simple, straightforward process to get your dumpster rental started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector Line */}
            <div className="absolute top-12 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hidden md:block -z-10"></div>

            {[
              { number: '1', title: 'Get a Quote', desc: 'Tell us your project details', icon: '📋' },
              { number: '2', title: 'Schedule', desc: 'Choose your preferred date', icon: '📅' },
              { number: '3', title: 'Fill It Up', desc: 'Use it at your own pace', icon: '📦' },
              { number: '4', title: 'We Pick It Up', desc: 'We handle everything', icon: '🚚' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all transform">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-white">{step.number}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-4xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact us today for a free quote or to schedule your dumpster delivery. We're here to help!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 h-12 text-base font-bold px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 h-12 text-base font-bold px-8">
                <Link href="tel:1234567890" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Smartphone } from 'lucide-react';
