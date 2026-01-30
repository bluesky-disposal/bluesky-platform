"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect to customer dashboard by default
    // In production, check user role from auth context/session
    router.push("/dashboard/customer");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-pulse mx-auto"></div>
        <p className="text-gray-600 dark:text-slate-400">Loading dashboard...</p>
      </div>
    </div>
  );
}
