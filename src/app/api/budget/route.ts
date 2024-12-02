import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/UserSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const { userId, newBudget } = await request.json();
    await connectMongoDB();

    await User.findByIdAndUpdate(userId, { budget: newBudget });
    return NextResponse.json(
      { message: "Budget updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update budget" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get("userId");

      if (!userId) {
        return NextResponse.json(
          { message: "User ID is required" },
          { status: 400 }
        );
      }
  
      await connectMongoDB();
      const user = await User.findOne({ email: userId });
  
      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { budget: user.budget },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to retrieve budget" },
        { status: 500 }
      );
    }
  }

  export async function POST(request: NextRequest) {
    try {
      const { userId, budget } = await request.json();
  
      // Log the incoming data for debugging purposes
      console.log("Received data:", { userId, budget });
  
      if (!userId || !budget || budget <= 0) {
        return NextResponse.json(
          { message: "Invalid user ID or budget amount" },
          { status: 400 }
        );
      }
  
      await connectMongoDB();
  
      console.log("Looking for user with email:", userId);

      const user = await User.findOne({ email: userId });
  
      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }
  
      user.budget = budget;
      await user.save();
  
      return NextResponse.json(
        { message: "Budget saved successfully", budget: user.budget },
        { status: 201 }
      );
    } catch (error) {
      console.error("Error in POST /api/budget:", error); // Log the error for easier debugging
      return NextResponse.json(
        { message: "Failed to save budget" },
        { status: 500 }
      );
    }
  }