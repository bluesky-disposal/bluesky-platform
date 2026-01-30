"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Users, ShoppingCart, DollarSign, PieChart } from "lucide-react";

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

export default function OwnerDashboard() {
  const financialMetrics = [
    { label: "Total Revenue", value: "$156.8K", icon: DollarSign, color: "from-emerald-500 to-green-600", trend: "+18%" },
    { label: "This Month", value: "$24.5K", icon: TrendingUp, color: "from-cyan-500 to-blue-600", trend: "+12%" },
    { label: "Team Members", value: "24", icon: Users, color: "from-purple-500 to-pink-600", trend: "+3" },
    { label: "Active Fleet", value: "156", icon: ShoppingCart, color: "from-amber-500 to-orange-600", trend: "+8" },
  ];

  const revenueBreakdown = [
    { name: "Roll-Off Dumpsters", value: "65%", color: "bg-cyan-500" },
    { name: "Rubber-Wheeled", value: "22%", color: "bg-emerald-500" },
    { name: "Permanent", value: "13%", color: "bg-purple-500" },
  ];

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Owner Portal</h1>
        <p className="text-gray-600 dark:text-slate-400">Monitor your business performance and manage operations.</p>
      </motion.div>

      {/* Financial Overview */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {financialMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ translateY: -8 }}
              className={`bg-gradient-to-br ${metric.color} p-6 rounded-xl shadow-lg text-white border border-white/10`}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-white/40" />
                <span className="text-emerald-400 text-sm font-semibold">{metric.trend}</span>
              </div>
              <p className="text-white/80 text-sm font-medium mb-1">{metric.label}</p>
              <p className="text-white text-3xl font-bold">{metric.value}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Revenue Breakdown */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900/50 dark:backdrop-blur border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Revenue Breakdown</h2>
          <div className="space-y-4">
            {revenueBreakdown.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 dark:text-slate-300 font-medium">{item.name}</p>
                  <p className="text-gray-900 dark:text-white font-bold">{item.value}</p>
                </div>
                <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.value }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    className={`h-full ${item.color} rounded-full`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-br from-cyan-50 dark:from-cyan-500/20 to-blue-50 dark:to-blue-600/20 backdrop-blur border border-cyan-200 dark:border-cyan-400/20 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <PieChart className="w-6 h-6" />
            Key Insights
          </h2>
          <div className="space-y-3">
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4">
              <p className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold mb-1">Best Performing Service</p>
              <p className="text-gray-900 dark:text-white font-bold">20 Yard Roll-Off Dumpsters</p>
            </div>
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4">
              <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-1">Highest Profit Margin</p>
              <p className="text-gray-900 dark:text-white font-bold">Permanent Dumpsters (42%)</p>
            </div>
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4">
              <p className="text-purple-700 dark:text-purple-400 text-sm font-semibold mb-1">Growth Rate</p>
              <p className="text-gray-900 dark:text-white font-bold">+24% YoY</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Performance */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Top Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {([
            { name: "Sarah Johnson", role: "Operations Manager", rentals: "42", image: "SJ" },
            { name: "Mike Chen", role: "Fleet Manager", rentals: "38", image: "MC" },
            { name: "Emma Davis", role: "Customer Service", rentals: "35", image: "ED" },
          ]).map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)" }}
              className="bg-white dark:bg-slate-900/50 dark:backdrop-blur border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto shadow-lg">
                {member.image}
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold">{member.name}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm">{member.role}</p>
              </div>
              <p className="text-cyan-600 dark:text-cyan-400 text-2xl font-bold">{member.rentals} Rentals</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div variants={itemVariants} className="flex gap-4">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-6">
          View Detailed Reports
        </Button>
        <Button variant="outline" className="border-slate-300 dark:border-slate-600 text-gray-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
          Export Data
        </Button>
      </motion.div>
    </motion.div>
  );
}
