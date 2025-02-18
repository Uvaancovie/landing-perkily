// app/api/contact/route.ts
import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

// This route is server-side only
export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { name, email, message } = await request.json()

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    // Connect to Neon
    const sql = neon(process.env.DATABASE_URL!)

    // Insert into "contact" table
    await sql`
      INSERT INTO contact (name, email, message)
      VALUES (${name}, ${email}, ${message});
    `

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error inserting contact:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
