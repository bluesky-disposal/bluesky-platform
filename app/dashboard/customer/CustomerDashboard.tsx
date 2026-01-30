"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock, CheckCircle, Calendar, MapPin, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CustomerDashboard() {
  const stats = [
    { label: "Active Rentals", value: "2", icon: ShoppingCart, color: "from-cyan-500 to-blue-600" },
    { label: "Total Spent", value: "$1,240", icon: TrendingUp, color: "from-emerald-500 to-green-600" },
    { label: "Pending Orders", value: "1", icon: Clock, color: "from-amber-500 to-orange-600" },
    { label: "Completed", value: "12", icon: CheckCircle, color: "from-purple-500 to-pink-600" },
  ];

  const rentals = [
    {
      id: 1,
      dumpster: "20 Yard Roll-Off",
      address: "123 Main St, New York",
      startDate: "Jan 15, 2024",
      endDate: "Jan 22, 2024",
      status: "Active",
      price: "$380",
    },
    {
      id: 2,
      dumpster: "10 Yard Roll-Off",
      address: "456 Oak Ave, Brooklyn",
      startDate: "Jan 20, 2024",
      endDate: "Jan 27, 2024",
      status: "Upcoming",
      price: "$320",
    },
  ];

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome back, Alex!</h1>
        <p className="text-gray-600 dark:text-slate-400">Here's what's happening with your rentals today.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ translateY: -5 }}
              className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl shadow-lg text-white border border-white/10`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <p className="text-white text-3xl font-bold">{stat.value}</p>
                </div>
                <Icon className="w-12 h-12 text-white/30" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Active Rentals */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rentals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {rentals.map((rental) => (
            <motion.div
              key={rental.id}
              whileHover={{ boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)" }}
              className="bg-white dark:bg-slate-900/50 dark:backdrop-blur border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{rental.dumpster}</h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    {rental.address}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    rental.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                      : "bg-amber-500/20 text-amber-700 dark:text-amber-400"
                  }`}
                >
                  {rental.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/30">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs uppercase font-semibold mb-1">Start Date</p>
                  <p className="text-gray-900 dark:text-white font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {rental.startDate}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs uppercase font-semibold mb-1">End Date</p>
                  <p className="text-gray-900 dark:text-white font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {rental.endDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/30">
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{rental.price}</p>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                  Manage
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
            New Rental
          </Button>
          <Button variant="outline" className="h-12 border-slate-300 dark:border-slate-600 text-gray-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
            View History
          </Button>
          <Button variant="outline" className="h-12 border-slate-300 dark:border-slate-600 text-gray-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
            Download Invoice
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
