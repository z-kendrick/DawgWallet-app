import connectMongoDB from "@/app/libs/mongodb";
import Expense from "@/app/models/ExpenseSchema";
import {NextResponse} from "next/server";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    // GET all expenses from a specific user 
    try {
        await connectMongoDB();
        const userId = "" // This will need to be retreived from authentication session 
        const expenses = await Expense.find({userId: userId}); // List of user specific expenses returned by userId
        return NextResponse.json(expenses);
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch expenses" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    // Handle POST requests for addExpense
    try {
        const {userId, amount, category, date, description} = await request.json();
        await connectMongoDB();
        await Expense.create({userId, amount, category, date, description});
        return NextResponse.json({message: "Expense added succesfully"}, {status: 201}) 
    } catch (error) {
        return NextResponse.json({ error: "Failed to create expense" }, { status: 500});
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const{id} = await request.json(); // id created by mongoDB
        await connectMongoDB();

        const expense = await Expense.findByIdAndDelete(id)

        return NextResponse.json({ message: "Expense deleted successfully" })
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete expense" })
    }
}


