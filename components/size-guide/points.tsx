"use client";

const points = [
  {
    title: "Type of Waste",
    desc: "Certain types of waste may require special handling or specific types of dumpsters (e.g., hazardous waste, construction debris).",
    icon: "📦",
  },
  {
    title: "Amount of Waste",
    desc: "The volume of waste you need to dispose of is a primary factor. Larger quantities require bigger dumpsters.",
    icon: "📊",
  },
  {
    title: "Space Availability",
    desc: "The area where the dumpster will be placed affects the size that can be accommodated. Consider access for delivery and removal as well.",
    icon: "📍",
  },
  {
    title: "Duration of Use",
    desc: "How long you need the dumpster will impact the size and type. Short-term projects might require smaller dumpsters that can be emptied more frequently.",
    icon: "⏱️",
  },
  {
    title: "Budget",
    desc: "Larger dumpsters generally cost more than smaller ones, so your budget will influence the size you choose.",
    icon: "💰",
  },
  {
    title: "Logistics",
    desc: "Consider logistical factors like pickup frequency, ease of loading, and transportation costs associated with larger dumpsters.",
    icon: "🚚",
  },
];

export default function PointsToConsider() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Key Points to Consider
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Make the right choice by keeping these important factors in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-400 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold flex items-center justify-center text-sm">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 pr-12">
                {point.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {point.desc}
              </p>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-8 -mb-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
