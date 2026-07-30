import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate that the required fields exist
    if (!data.name || !data.email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    // TODO: In a real production app, wire this to a DB (e.g., Supabase, PostgreSQL)
    // For this assignment, we are mocking the storage via a console log.
    console.log("New Enterprise Lead Captured:", data);

    // Simulate a slight network delay for the loading state on the frontend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Lead captured successfully." });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
