"use client";
import dynamic from "next/dynamic";

const CustomerDashboard = dynamic(() => import("./CustomerDashboard"), { ssr: false });

export default function Page() {
  return <CustomerDashboard />;
}
