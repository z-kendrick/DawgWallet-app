import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/UserSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import messages from "@/app/constants/messages";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "default-secret-key";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const { email, password, firstName } = await request.json();

    // email validation
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: messages.USER.INVALID_LOGIN,
        },
        { status: 400 }
      );
    }

    // password validation
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          message: messages.USER.INVALID_LOGIN,
        },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, firstName: user.firstName },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({
      message: "Login successful",
      token: token,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: messages.USER.INVALID_LOGIN },
      { status: 500 }
    );
  }
}
