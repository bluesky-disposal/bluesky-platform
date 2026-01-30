"use client";

import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { useState } from "react";

export default function DimensionsExplainer() {
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(4);

  const calculateCubicYards = () => {
    return ((length * width * height) / 27).toFixed(1);
  };

  const getCubicYards = () => {
    const cy = parseFloat(calculateCubicYards());
    if (cy <= 10) return 10;
    if (cy <= 20) return 20;
    if (cy <= 30) return 30;
    return 40;
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Understanding Cubic Yards
          </h2>
          <p className="text-lg text-slate-600">
            Calculate the perfect dumpster size for your project
          </p>
        </div>

        {/* Main Grid - Image & Info on Left, Calculator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Info */}
          <div className="space-y-6">
            {/* Image */}
            <div className="w-full">
              <div className="relative w-full">
                <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-blue-100 hover:shadow-3xl transition-all duration-500">
                  <ImageWithFallback
                    src="/images/cubic-yard-demo.png"
                    alt="Cubic Yard Dimensions"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-2xl text-center font-semibold shadow-lg text-sm">
                  1 Cubic Yard = 3ft × 3ft × 3ft
                </div>
              </div>
            </div>

            {/* What is a Cubic Yard Info Box */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                What is a Cubic Yard?
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                One cubic yard is a cube measuring 3 feet (36 inches) on each side.
              </p>
              <div className="bg-white p-3 rounded-xl border border-blue-200">
                <p className="text-xs font-mono text-blue-600 font-bold text-center">
                  (length × width × height) ÷ 27 = cubic yards
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Calculator */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">📊</span>
              <h3 className="text-2xl font-bold text-slate-900">
                Interactive Calculator
              </h3>
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              {[
                { label: "Length", value: length, setter: setLength, max: 30, icon: "↔️" },
                { label: "Width", value: width, setter: setWidth, max: 20, icon: "↕️" },
                { label: "Height", value: height, setter: setHeight, max: 15, icon: "⬆️" },
              ].map((input, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 min-w-fit">
                      <span className="text-xl">{input.icon}</span>
                      <label className="text-sm font-bold text-slate-800 whitespace-nowrap">
                        {input.label}
                      </label>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">{input.value}</span>
                      <span className="text-xs text-slate-600 ml-1">ft</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={input.max}
                    value={input.value}
                    onChange={(e) => input.setter(parseInt(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>1 ft</span>
                    <span>{input.max} ft</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

            {/* Results */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                Calculation Results
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* Total Cubic Feet */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200">
                  <p className="text-xs text-blue-700 font-semibold mb-2 uppercase tracking-wider">
                    Total Cubic Feet
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {(length * width * height).toLocaleString()}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">cu ft</p>
                </div>

                {/* Cubic Yards */}
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-2xl border border-cyan-200">
                  <p className="text-xs text-cyan-700 font-semibold mb-2 uppercase tracking-wider">
                    Cubic Yards
                  </p>
                  <p className="text-3xl font-bold text-cyan-600">
                    {calculateCubicYards()}
                  </p>
                  <p className="text-xs text-cyan-600 mt-1">cu yd</p>
                </div>
              </div>

              {/* Recommended Size */}
              <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl mt-4">
                <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">
                  Recommended Dumpster Size
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black">{getCubicYards()}</span>
                  <span className="text-lg font-bold pb-1">Yard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tip - Full Width */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-7 rounded-2xl hover:shadow-lg transition-all">
          <p className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Pro Tip
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            <span className="font-semibold">Always round up</span> when calculating! If you get 10.6 cubic yards, rent a 20 yard dumpster to ensure you don't overflow.
          </p>
        </div>
      </div>
    </section>
  );
}
