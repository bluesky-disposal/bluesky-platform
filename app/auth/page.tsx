"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  Building2, 
  Truck, 
  HardHat,
  Bell,
  Gift,
  Shield,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

type UserType = "customer" | "partner" | "contractor";
type AuthMode = "login" | "signup";

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [userType, setUserType] = useState<UserType>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    businessName: "",
  });

  const userTypes = [
    {
      type: "customer" as UserType,
      icon: User,
      title: "Individual Customer",
      description: "Rent dumpsters for personal use",
      benefits: ["Quick booking", "Easy payments", "24/7 support"]
    },
    {
      type: "partner" as UserType,
      icon: Building2,
      title: "Business Partner",
      description: "Partner with us for bulk orders",
      benefits: ["Volume discounts", "Priority service", "Dedicated manager"]
    },
    {
      type: "contractor" as UserType,
      icon: HardHat,
      title: "Contractor/Builder",
      description: "Construction site solutions",
      benefits: ["Project pricing", "Site management", "Multiple locations"]
    }
  ];

  const benefits = [
    { icon: Bell, text: "Get instant notifications for order updates" },
    { icon: Gift, text: "Earn rewards on every rental" },
    { icon: Shield, text: "100% secure & encrypted transactions" },
    { icon: CheckCircle2, text: "Easy booking & cancellation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Side - Benefits & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 lg:p-12 text-white lg:sticky lg:top-24"
            >
              <h2 className="text-3xl font-bold mb-4">
                {authMode === "login" ? "Welcome Back!" : "Join Blue Sky Disposal"}
              </h2>
              <p className="text-blue-50 mb-8 text-lg">
                {authMode === "login" 
                  ? "Sign in to access your account and manage your orders"
                  : "Create an account and get access to exclusive benefits"
                }
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <benefit.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold">5K+</div>
                  <div className="text-sm text-blue-100">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-blue-100">Service Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Auth Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {/* Toggle Login/Signup */}
              <div className="flex gap-2 mb-8 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setAuthMode("login")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    authMode === "login"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setAuthMode("signup")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    authMode === "signup"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <AnimatePresence mode="wait">
                {authMode === "signup" && (
                  <motion.div
                    key="user-type-selection"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-8"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Choose Account Type
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {userTypes.map((type) => (
                        <button
                          key={type.type}
                          onClick={() => setUserType(type.type)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            userType === type.type
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-200 hover:border-blue-300"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              userType === type.type ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                            }`}>
                              <type.icon size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-slate-900">{type.title}</div>
                              <div className="text-sm text-slate-600 mt-1">{type.description}</div>
                              {userType === type.type && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {type.benefits.map((benefit, idx) => (
                                    <span
                                      key={idx}
                                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                                    >
                                      {benefit}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form className="space-y-4">
                {authMode === "signup" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}

                {authMode === "signup" && userType !== "customer" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business/Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <Input
                        type="text"
                        placeholder="Enter business name"
                        className="pl-10"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {authMode === "signup" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {authMode === "login" && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-slate-300" />
                      <span className="text-sm text-slate-600">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot Password?
                    </Link>
                  </div>
                )}

                {authMode === "signup" && (
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 rounded border-slate-300" required />
                    <span className="text-sm text-slate-600">
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                      {" "}and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                    </span>
                  </label>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                >
                  {authMode === "login" ? "Sign In" : "Create Account"}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-slate-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </form>

              {authMode === "login" && (
                <p className="mt-6 text-center text-sm text-slate-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signup")}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign up now
                  </button>
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
