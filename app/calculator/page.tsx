'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function CalculatorPage() {
  const [projectType, setProjectType] = useState('')
  const [wasteType, setWasteType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [duration, setDuration] = useState('')
  const [access, setAccess] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ projectType, wasteType, quantity, duration, access })
  }

  const projectTypes = [
    'Home Renovation',
    'Garden Cleanup',
    'Construction Project',
    'Demolition',
    'Commercial',
    'Other',
  ]

  const wasteTypes = [
    'Mixed Debris',
    'Soil & Dirt',
    'Concrete',
    'Metal Scrap',
    'Yard Waste',
    'Other',
  ]

  const durations = [
    '1 Day',
    '3 Days',
    '1 Week',
    '2 Weeks',
    '1 Month',
    'Custom',
  ]

  const accessTypes = [
    'Driveway/Parking Lot',
    'Street Access',
    'Alley',
    'Difficult Access',
  ]

  return (
    <main>
      <Header />

      {/* Page Header */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Dumpster Size Calculator</h1>
          <p className="text-gray-600 text-lg">
            Need help choosing the right dumpster size? Use our calculator to get personalized recommendations.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 rounded-full p-4 mb-4">
              <span className="text-4xl">📱</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Calculate Your Size</h2>
            <p className="text-gray-600">
              Let us help you find the perfect dumpster for your project
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project" className="block font-semibold text-gray-900 mb-3">
                  Project Type
                </label>
                <select
                  id="project"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Waste Type */}
              <div>
                <label htmlFor="waste" className="block font-semibold text-gray-900 mb-3">
                  Type of Waste
                </label>
                <select
                  id="waste"
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select waste type</option>
                  {wasteTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quantity and Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quantity" className="block font-semibold text-gray-900 mb-3">
                  Estimated Quantity (Cubic Yards)
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter estimated volume"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="duration" className="block font-semibold text-gray-900 mb-3">
                  Project Duration
                </label>
                <select
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select duration</option>
                  {durations.map((dur) => (
                    <option key={dur} value={dur}>
                      {dur}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Site Access */}
            <div>
              <label htmlFor="access" className="block font-semibold text-gray-900 mb-3">
                Site Access & Location
              </label>
              <select
                id="access"
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
              >
                <option value="">Select site access type</option>
                {accessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold mt-8"
            >
              📋 Get Personalized Recommendations
            </Button>
          </form>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Dumpster Size Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                size: '10 cubic yards',
                ideal: 'Small Projects',
                examples: 'Kitchen remodel, bathroom renovation, small cleanout',
              },
              {
                size: '20 cubic yards',
                ideal: 'Medium Projects',
                examples: 'Whole house cleanout, deck removal, garage cleanout',
              },
              {
                size: '40 cubic yards',
                ideal: 'Large Projects',
                examples: 'Major construction, demolition, complete renovation',
              },
            ].map((guide, i) => (
              <div key={i} className="p-8 bg-blue-50 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{guide.size}</h3>
                <p className="font-semibold text-gray-900 mb-3">{guide.ideal}</p>
                <p className="text-gray-600 text-sm">{guide.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
