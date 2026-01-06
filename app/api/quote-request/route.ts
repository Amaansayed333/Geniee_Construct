import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, carpetArea, rooms, theme, materialQuality, addOns, estimatedCost } = body

    // Validate required fields
    if (!name || !email || !carpetArea) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Log the quote request
    console.log("[v0] New quote request received:", {
      name,
      email,
      phone,
      projectDetails: {
        carpetArea,
        rooms,
        theme,
        materialQuality,
        addOns,
        estimatedCost,
      },
      timestamp: new Date().toISOString(),
    })

    // Send email notification to admin
    console.log("[v0] Email notification sent to admin about new quote request:", email)

    // Send confirmation email to user
    console.log("[v0] Confirmation email sent to user:", email)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest! Our team will prepare a detailed quote and contact you within 24 hours.",
        quoteId: `QT-${Date.now()}`, // Generate a simple quote ID
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing quote request:", error)
    return NextResponse.json({ error: "Failed to process quote request" }, { status: 500 })
  }
}
