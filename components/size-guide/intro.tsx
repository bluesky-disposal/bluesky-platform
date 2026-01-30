"use client";

import { useState } from "react";

const dumpsterSizes = [
  {
    size: "10",
    uses: "Small cleanouts & yard debris",
    details: "Perfect for small projects like garage cleanouts, yard debris, or minor remodeling work."
  },
  {
    size: "20",
    uses: "Home remodels & renovations",
    details: "Ideal for larger home cleanouts, home renovations, or small to medium construction jobs."
  },
  {
    size: "30",
    uses: "Large construction projects",
    details: "Great for larger construction projects, major home renovations, or commercial cleanouts."
  },
  {
    size: "40",
    uses: "Major demolition & commercial",
    details: "Perfect for major demolition projects, large commercial work, or significant waste disposal needs."
  },
];

export default function GuideIntro() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Dumpster Size Guide</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We help you choose the perfect dumpster size for your project with expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Text */}
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-blue-600">
              What Size Dumpster Do I Need?
            </p>
            <p className="text-base">
              We understand that choosing the right dumpster size can be challenging. That's why we're committed to assisting you in making the best choice for your specific needs.
            </p>
            <p className="text-base">
              The size of a dumpster is influenced by several factors that are important to consider based on your unique project requirements and constraints.
            </p>
            <p className="text-base">
              While sizes can vary slightly between companies, our guide provides a comprehensive overview to help you select the perfect dumpster size for your project.
            </p>
          </div>

          {/* Right Grid of Sizes - Interactive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dumpsterSizes.map((item, i) => (
              <div
                key={i}
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                className={`group cursor-pointer bg-white rounded-xl p-6 border-2 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative ${
                  expandedCard === i
                    ? "border-blue-500 shadow-xl ring-2 ring-blue-200"
                    : "border-slate-200 hover:border-blue-400"
                }`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.size}
                    </div>
                    <p className="text-sm text-slate-700 font-medium">Cubic Yard</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">{item.uses}</p>
                  </div>
                  
                  {/* Expand Icon */}
                  <div className={`ml-2 text-2xl transition-transform duration-300 ${expandedCard === i ? 'rotate-180' : ''}`}>
                    ⌄
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedCard === i && (
                  <div className="mt-4 pt-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-slate-600 leading-relaxed">{item.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
