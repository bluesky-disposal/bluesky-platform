"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import {
  User,
  Package,
  Bell,
  Heart,
  MapPin,
  CreditCard,
  Gift,
  Settings,
  LogOut,
  Star,
  ShoppingBag,
  Award,
  HelpCircle,
  FileText,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("orders");

  if (!isLoggedIn) {
    router.push("/auth");
    return null;
  }

  const menuItems = [
    {
      id: "orders",
      icon: Package,
      label: "My Orders",
      count: 5,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "rewards",
      icon: Gift,
      label: "Super Coins",
      count: user?.rewards || 0,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      id: "wishlist",
      icon: Heart,
      label: "Wishlist",
      count: 3,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Notifications",
      count: 12,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "addresses",
      icon: MapPin,
      label: "Addresses",
      count: 2,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "payments",
      icon: CreditCard,
      label: "Payment Methods",
      count: 0,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const quickActions = [
    { icon: HelpCircle, label: "Help Center", href: "/help" },
    { icon: FileText, label: "Terms & Conditions", href: "/terms" },
    { icon: Shield, label: "Privacy Policy", href: "/privacy" },
    { icon: Settings, label: "Account Settings", href: "/settings" }
  ];

  const recentOrders = [
    {
      id: "ORD-2024-001",
      date: "Dec 15, 2024",
      status: "Delivered",
      items: "20 Yard Roll-off Dumpster",
      price: "$412.00",
      statusColor: "text-green-600"
    },
    {
      id: "ORD-2024-002",
      date: "Dec 10, 2024",
      status: "In Progress",
      items: "10 Yard Rubber-wheeled Dumpster",
      price: "$295.00",
      statusColor: "text-blue-600"
    }
  ];

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* User Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white mb-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-1">{user?.name}</h1>
                  <p className="text-blue-100">{user?.email}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      <Gift size={16} />
                      <span className="font-semibold">{user?.rewards} Coins</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      <Star size={16} fill="currentColor" />
                      <span className="font-semibold">Gold Member</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleLogout}
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <LogOut size={18} className="mr-2" />
                Logout
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Menu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
                <h2 className="text-lg font-bold text-slate-900 mb-4">My Account</h2>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        activeTab === item.id
                          ? `${item.bgColor} ${item.color}`
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.count > 0 && (
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          activeTab === item.id ? "bg-white/50" : "bg-slate-100"
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </button>
                  ))}
                  
                  <div className="border-t border-slate-200 my-4"></div>
                  
                  {quickActions.map((action) => (
                    <Link key={action.label} href={action.href}>
                      <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-all">
                        <action.icon size={20} />
                        <span className="font-medium">{action.label}</span>
                      </button>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              {activeTab === "orders" && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">My Orders</h2>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <ShoppingBag size={20} className="text-blue-600" />
                              <span className="font-semibold text-slate-900">{order.id}</span>
                              <span className={`text-sm font-medium ${order.statusColor}`}>
                                • {order.status}
                              </span>
                            </div>
                            <p className="text-slate-600 mb-1">{order.items}</p>
                            <p className="text-sm text-slate-500">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-slate-900 mb-2">{order.price}</p>
                            <Button size="sm" variant="outline">Track Order</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "rewards" && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-4">
                      <Gift size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {user?.rewards} Super Coins
                    </h2>
                    <p className="text-slate-600">Redeem coins for exclusive discounts!</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-2 border-amber-200 rounded-lg p-4 hover:border-amber-400 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">$10 Off</span>
                        <span className="text-amber-600 font-bold">100 Coins</span>
                      </div>
                      <p className="text-sm text-slate-600">On orders above $200</p>
                    </div>
                    <div className="border-2 border-amber-200 rounded-lg p-4 hover:border-amber-400 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">$25 Off</span>
                        <span className="text-amber-600 font-bold">250 Coins</span>
                      </div>
                      <p className="text-sm text-slate-600">On orders above $500</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Notifications</h2>
                  <div className="space-y-3">
                    {[
                      { type: "order", message: "Your order #ORD-2024-001 has been delivered", time: "2 hours ago", unread: true },
                      { type: "offer", message: "Special offer: Get 20% off on your next rental", time: "1 day ago", unread: true },
                      { type: "payment", message: "Payment successful for order #ORD-2024-002", time: "3 days ago", unread: false }
                    ].map((notif, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          notif.unread ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Bell size={20} className={notif.unread ? "text-blue-600" : "text-slate-400"} />
                          <div className="flex-1">
                            <p className="text-slate-900 font-medium">{notif.message}</p>
                            <p className="text-sm text-slate-500 mt-1">{notif.time}</p>
                          </div>
                          {notif.unread && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add more tab content as needed */}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
