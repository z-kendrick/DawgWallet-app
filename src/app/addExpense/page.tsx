import AddExpense from "@/app/components/ExpenseForm";
import { SessionProvider } from "next-auth/react";

export default function Expense() {
  return (
    <SessionProvider>
      <div>
        <AddExpense />
      </div>
    </SessionProvider>
    
  );
}
