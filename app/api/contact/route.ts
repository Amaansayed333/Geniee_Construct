import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, source } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send confirmation email to user

    // For demonstration, we'll log the contact info
    console.log("[v0] New contact form submission:", {
      name,
      email,
      phone,
      message,
      source,
      timestamp: new Date().toISOString(),
    })

    // Simulate email notification to admin
    console.log("[v0] Email notification sent to admin about new contact:", email)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We will get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
