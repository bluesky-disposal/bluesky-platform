"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, User, Phone, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().optional(),
  message: z.string().optional(),
});

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function PartnersForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Application submitted successfully! We'll be in touch within 24 hours.");
    reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200 sticky top-20 hover:shadow-2xl transition-all hover:border-blue-300"
    >
      {/* Header */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 pb-6 border-b-2 border-blue-100"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-900">Ready to Partner?</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">Fill out this form and let's talk about growing your business together. Our team will contact you within 24 hours.</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Name Field */}
        <motion.div 
          variants={itemVariants}
          className="space-y-2 group"
        >
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
            <User className="w-4 h-4 text-blue-600" />
            Full Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            {...register("name")}
            className="w-full border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 transition-all bg-white"
            placeholder="John Doe"
          />
          {errors.name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-semibold">{errors.name.message}</motion.p>}
        </motion.div>

        {/* Email Field */}
        <motion.div 
          variants={itemVariants}
          className="space-y-2 group"
        >
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
            <Mail className="w-4 h-4 text-blue-600" />
            Email Address
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            {...register("email")}
            type="email"
            className="w-full border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 transition-all bg-white"
            placeholder="john@example.com"
          />
          {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-semibold">{errors.email.message}</motion.p>}
        </motion.div>

        {/* Phone Field */}
        <motion.div 
          variants={itemVariants}
          className="space-y-2 group"
        >
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
            <Phone className="w-4 h-4 text-blue-600" />
            Phone Number
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            {...register("phone")}
            type="tel"
            className="w-full border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 transition-all bg-white"
            placeholder="(555) 123-4567"
          />
          {errors.phone && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-semibold">{errors.phone.message}</motion.p>}
        </motion.div>

        {/* Company Field */}
        <motion.div 
          variants={itemVariants}
          className="space-y-2 group"
        >
          <label className="text-sm font-semibold text-gray-700 block group-hover:text-blue-600 transition-colors">
            Company Name <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            {...register("company")}
            className="w-full border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 transition-all bg-white"
            placeholder="Your Business Name"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div 
          variants={itemVariants}
          className="space-y-2 group"
        >
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            Tell Us About Your Business
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            {...register("message")}
            className="w-full border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 resize-none transition-all bg-white"
            placeholder="What services do you currently offer? What are your goals?"
            rows={4}
          />
          {errors.message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-semibold">{errors.message.message}</motion.p>}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 h-auto relative overflow-hidden group"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.span>
          </Button>
        </motion.div>

        {/* Footer Notes */}
        <motion.div 
          variants={itemVariants}
          className="pt-4 border-t-2 border-blue-100 space-y-3"
        >
          <div className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors group cursor-pointer">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
            </motion.div>
            <span>We'll respond within 24 hours</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors group cursor-pointer">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
            </motion.div>
            <span>No spam, just great partnership opportunities</span>
          </div>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
