import AddBudget from "@/app/components/BudgetForm"
import { SessionProvider } from "next-auth/react";

export default function Budget() {
    return (
      <SessionProvider>
        <div>
          <AddBudget />
        </div>
      </SessionProvider>
    );
  }
  