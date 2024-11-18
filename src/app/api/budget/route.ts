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
