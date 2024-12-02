import mongoose, { Schema, Document, Model } from "mongoose";

interface IExpense extends Document {
  amount: Number;
  category: string;
  date: Date;
  description?: string;
  userId: string; //Created by mongoDB on signup
}

const expenseSchema = new Schema<IExpense>({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
  },
  userId: { // Make sure userId is included in your schema
    type: String,  // Change this to ObjectId if you store ObjectId
    required: true,
  },
});
const Expense: Model<IExpense> =
  mongoose.models.Expense || mongoose.model<IExpense>("Expense", expenseSchema);
export default Expense;
