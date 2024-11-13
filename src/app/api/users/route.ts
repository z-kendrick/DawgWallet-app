import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/userSchema";
import {NextResponse} from "next/server";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    // Handle GET requests for sign in 
    try {
        await connectMongoDB();
        const {email, password} = await request.json();
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json(
              { error: "User not found" }, 
              { status: 404 }
            );
        }
        if (user.password !== password) {  // Need to implement hashing 
            return NextResponse.json(
              { error: "Invalid password" }, 
              { status: 401 }
            );
        }

        return NextResponse.json(
            {
              message: "Login successful",
              user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                budget: user.budget
              }
            },
            { status: 200 }
          );
    } catch(error) {
        return NextResponse.json(
            { error: "Login failed" }, 
            { status: 500 }
          );
    }
}

export async function POST(request: NextRequest) {
    // Handle POST requests for sign up
    try {
        const {firstName, lastName, email, password} = await request.json();
        await connectMongoDB();
        await User.create({firstName, lastName, email, password});
        return NextResponse.json({message: "User created succesfully"}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "Failed to create user"}, {status: 500})
    }
}

export async function PATCH(request: NextRequest) {
    // Handle PATCH for edit budget 
    try {
        const { userId, newBudget } = await request.json();
        await connectMongoDB();
        await User.findByIdAndUpdate(userId, { budget: newBudget });
        return NextResponse.json({message: "Budget updated successfully"}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "Failed to update budget"}, {status: 500})
    }
  }


