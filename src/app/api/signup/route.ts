import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/UserSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import messages from "@/app/constants/messages";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const { firstName, lastName, email, password } = await request.json();

    // check if an email already exists in the database
    if (await User.findOne({ email })) {
      return NextResponse.json(
        {
          message: messages.USER.EMAIL_IN_USE,
        },
        { status: 400 }
      );
    }

    // checking for password and password length < 6
    if (!password || password.length < 6) {
      return NextResponse.json({
        message: messages.USER.STRONGER_PASSWORD,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      budget: 0,
    });

    return NextResponse.json(
      { message: messages.USER.CREATION_SUCCESS },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: messages.USER.FAILED_CREATION },
      { status: 500 }
    );
  }
}
