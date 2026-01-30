"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Lock, Eye, EyeOff, Building2, HardHat, Bell, Gift, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth-context";

type UserType = "customer" | "partner" | "contractor";
type AuthMode = "login" | "signup";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [userType, setUserType] = useState<UserType>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  
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
      description: "Rent dumpsters for personal use"
    },
    {
      type: "partner" as UserType,
      icon: Building2,
      title: "Business Partner",
      description: "Partner with us for bulk orders"
    },
    {
      type: "contractor" as UserType,
      icon: HardHat,
      title: "Contractor/Builder",
      description: "Construction site solutions"
    }
  ];

  const benefits = [
    { icon: Bell, text: "Instant notifications" },
    { icon: Gift, text: "Earn rewards" },
    { icon: Shield, text: "Secure transactions" },
    { icon: CheckCircle2, text: "Easy booking" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login
    if (authMode === "signup" || authMode === "login") {
      login({
        id: "user-" + Date.now(),
        name: formData.name || "Demo User",
        email: formData.email,
        phone: formData.phone,
        userType: userType,
        rewards: 150,
        joinedDate: new Date().toISOString()
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X size={24} className="text-slate-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh]">
            {/* Left Side - Benefits */}
            <div className="hidden md:block bg-gradient-to-br from-blue-600 to-cyan-500 p-8 lg:p-12 text-white overflow-y-auto">
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-3xl font-bold mb-3">
                    {authMode === "login" ? "Welcome Back!" : "Join Blue Sky"}
                  </h2>
                  <p className="text-blue-50 mb-8">
                    {authMode === "login" 
                      ? "Sign in to access your account"
                      : "Create account for exclusive benefits"
                    }
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                          <benefit.icon size={20} />
                        </div>
                        <span className="font-medium">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5K+</div>
                    <div className="text-xs text-blue-100">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-blue-100">Areas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-xs text-blue-100">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {/* Toggle Login/Signup */}
              <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setAuthMode("login")}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all text-sm ${
                    authMode === "login"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setAuthMode("signup")}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all text-sm ${
                    authMode === "signup"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* User Type Selection (Signup Only) */}
              {authMode === "signup" && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Account Type
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {userTypes.map((type) => (
                      <button
                        key={type.type}
                        onClick={() => setUserType(type.type)}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          userType === type.type
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            userType === type.type ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                          }`}>
                            <type.icon size={18} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-slate-900">{type.title}</div>
                            <div className="text-xs text-slate-600">{type.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {authMode === "signup" && (
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        className="pl-10 h-11"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input
                      type="email"
                      placeholder="Enter email"
                      className="pl-10 h-11"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {authMode === "signup" && (
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <Input
                        type="tel"
                        placeholder="Enter phone"
                        className="pl-10 h-11"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="pl-10 pr-10 h-11"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11">
                  {authMode === "login" ? "Sign In" : "Create Account"}
                </Button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-slate-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button type="button" variant="outline" className="h-11">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button type="button" variant="outline" className="h-11">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
