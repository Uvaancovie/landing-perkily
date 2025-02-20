// app/api/calltoaction/route.ts
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the client
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Connect to Neon using your DATABASE_URL environment variable
    const sql = neon(process.env.DATABASE_URL!);

    // Insert the email into the "CallToAction" table
    await sql`
      INSERT INTO "CallToAction" (email)
      VALUES (${email});
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error inserting CallToAction:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
