import connectMongoDB from "@/app/libs/mongodb";
import Expense from "@/app/models/expenseSchema";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
      // Retrieve the userId from query params
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get("userId");
  
      if (!userId) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
      }
  
      await connectMongoDB();
      const expenses = await Expense.find({ userId }); // Filter expenses by userId
      console.log(userId)
      return NextResponse.json(expenses, { status: 200 });
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
      return NextResponse.json({ error: "Failed to fetch expenses" }, { status: 500 });
    }
  }
  
  export async function POST(request: NextRequest) {
    try {
      const { amount, category, date, description, userId } = await request.json();
  
      if (!userId || !amount || !category || !date) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
  
      await connectMongoDB();
  
      // Create new expense for the user
      const expense = await Expense.create({
        amount,
        category,
        date,
        description,
        userId, // Use userId passed from client-side
      });
  
      return NextResponse.json({ message: "Expense added successfully", expense }, { status: 201 });
    } catch (error) {
      console.error("Failed to create expense:", error);
      return NextResponse.json({ error: "Failed to create expense" }, { status: 500 });
    }
  }

export async function DELETE(request: NextRequest) {
    try {
        const{id} = await request.json(); // id created by mongoDB

        if (!id) {
          return NextResponse.json({error: "Missing Expense ID"}, {status: 400});
        }

        await connectMongoDB();
        const expense = await Expense.findByIdAndDelete(id)
        if (!expense) {
          return NextResponse.json({error: "Expense not found"}, {status : 404})
        }

        return NextResponse.json(
          { message: "Expense deleted successfully", deletedExpense: expense},
          {status: 200}
        );
    } catch (error) {
       console.error("Failed to delete expense:", error)
       return NextResponse.json(
        {error: "Failed to delete expense"},
        {status: 500}
      );
    }
}


