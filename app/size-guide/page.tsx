"use client";

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import CallBanner from "@/components/size-guide/call-banner";
import DimensionsExplainer from "@/components/size-guide/dimensions";
import GuideIntro from "@/components/size-guide/intro";
import PointsToConsider from "@/components/size-guide/points";

export default function SizeGuidePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <GuideIntro />
      <DimensionsExplainer />
      <PointsToConsider />
      <CallBanner />

      <Footer />
    </main>
  )
}
