"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  LogOut,
  Settings,
  User,
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Users,
  BarChart3,
  Wallet,
  Truck,
  Clock,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const userRole = pathname.split("/")[2]; // admin, customer, owner

  const navItems = {
    customer: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/customer" },
      { icon: ShoppingCart, label: "My Rentals", href: "/dashboard/customer/rentals" },
      { icon: FileText, label: "Invoices", href: "/dashboard/customer/invoices" },
      { icon: Clock, label: "History", href: "/dashboard/customer/history" },
    ],
    admin: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/admin" },
      { icon: Users, label: "Manage Users", href: "/dashboard/admin/users" },
      { icon: Truck, label: "Manage Dumpsters", href: "/dashboard/admin/dumpsters" },
      { icon: ShoppingCart, label: "Orders", href: "/dashboard/admin/orders" },
      { icon: BarChart3, label: "Analytics", href: "/dashboard/admin/analytics" },
    ],
    owner: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/owner" },
      { icon: BarChart3, label: "Revenue", href: "/dashboard/owner/revenue" },
      { icon: Users, label: "Team", href: "/dashboard/owner/team" },
      { icon: ShoppingCart, label: "Orders", href: "/dashboard/owner/orders" },
      { icon: Wallet, label: "Financials", href: "/dashboard/owner/financials" },
      { icon: Settings, label: "Settings", href: "/dashboard/owner/settings" },
    ],
  };

  const items = navItems[userRole as keyof typeof navItems] || navItems.customer;

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-950/95 dark:backdrop-blur-lg border-r border-slate-200 dark:border-slate-700/50 transition-all duration-300 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 p-6 border-b border-slate-200 dark:border-slate-700/50">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-white text-lg">Blue Sky</span>
              <span className="text-xs text-gray-500 dark:text-slate-400 capitalize">{userRole}</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                        : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700/50 space-y-2">
            <Link href="/dashboard/profile">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              >
                <User className="w-5 h-5" />
                Profile
              </motion.div>
            </Link>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-950/50 dark:backdrop-blur border-b border-slate-200 dark:border-slate-700/50 shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block capitalize">
            {userRole} Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
