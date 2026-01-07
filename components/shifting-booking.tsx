"use client"

import { useState } from "react"

export function ShiftingBooking() {
  const [pickup, setPickup] = useState("")
  const [drop, setDrop] = useState("")
  const [size, setSize] = useState("1BHK")
  const [date, setDate] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { pickup, drop, size, date }
    console.log("[v0] Shifting booking submitted:", payload)
    setSubmitted(true)
  }

  return (
    <section id="shifting" className="section-secondary">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="heading-strong text-4xl mb-4">Shifting & Relocation Services</h2>
          <p className="text-soft max-w-2xl mx-auto">
            Safe, insured and hassle-free home & office relocation. We handle packing, transport and delivery – you relax.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Why shift with Smartgeniee?</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="icon-box">🚚</div>
                <div>
                  <div className="font-semibold">Professional Packing</div>
                  <div className="text-soft text-sm">High-quality materials to protect fragile and valuable items.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box">🛡️</div>
                <div>
                  <div className="font-semibold">Insured Transport</div>
                  <div className="text-soft text-sm">Your goods are fully insured during transit for complete peace of mind.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box">⏱️</div>
                <div>
                  <div className="font-semibold">On-Time Delivery</div>
                  <div className="text-soft text-sm">Committed timelines with real-time coordination.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box">💰</div>
                <div>
                  <div className="font-semibold">Transparent Pricing</div>
                  <div className="text-soft text-sm">No hidden charges. What you see is what you pay.</div>
                </div>
              </div>
            </div>

            {/* STEPS */}
            <div className="mt-12">
              <h4 className="font-semibold mb-4">How it works</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card-premium text-center">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <div className="font-semibold">Submit Details</div>
                  <div className="text-soft text-sm mt-1">Tell us your pickup, drop and house size.</div>
                </div>
                <div className="card-premium text-center">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <div className="font-semibold">Get Quote</div>
                  <div className="text-soft text-sm mt-1">Our team shares a clear and fair price.</div>
                </div>
                <div className="card-premium text-center">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <div className="font-semibold">We Shift</div>
                  <div className="text-soft text-sm mt-1">Sit back while we handle everything.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="card-premium">

            <h3 className="text-2xl font-semibold mb-2">Get a Free Shifting Quote</h3>
            <p className="text-soft mb-6">
              Share your details and our logistics team will contact you within 24 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Pickup Location</label>
                  <input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup address"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Drop Location</label>
                  <input
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder="Enter drop address"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">House Size</label>
                  <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option>1BHK</option>
                    <option>2BHK</option>
                    <option>3BHK</option>
                    <option>4BHK</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="w-full btn-primary">
                    Get Quote
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-2xl font-semibold mb-2">Request Received ✅</div>
                <div className="text-soft">
                  Our logistics team will contact you with a custom quote within 24 hours.
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShiftingBooking
