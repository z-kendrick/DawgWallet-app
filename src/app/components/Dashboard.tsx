"use client";

import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";
import AddBudget from "./BudgetForm";
import AddExpense from "./ExpenseForm";
import { useSession } from "next-auth/react";

export default function DashHome() {
  const { data: session, status } = useSession();
  console.log(session);
  const [budget, setBudget] = useState(1000); // Replace with actual state management logic
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      amount: 200,
      category: "Groceries",
      date: "2024-11-01",
      description: "Weekly shopping",
    },
    {
      id: 2,
      amount: 50,
      category: "Transport",
      date: "2024-11-03",
      description: "Gas",
    },
    {
      id: 3,
      amount: 120,
      category: "Entertainment",
      date: "2024-11-05",
      description: "Movie night",
    },
  ]);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const progress = Math.min((totalExpenses / budget) * 100, 100);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.splitContainer}>
        <div className={styles.leftPane}>
          <h2 className={styles.heading2}>Welcome</h2>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div>
              <p className={styles.info}>{`Total Budget: $${budget}`}</p>
              <p
                className={styles.info}
              >{`Total Expenses: $${totalExpenses}`}</p>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Link href="/pages/addBudget">
              <button className={styles.budgetButton}>Edit Budget</button>
            </Link>
            <Link href="/pages/addExpense">
              <button className={styles.expenseButton}>Add Expense</button>
            </Link>
          </div>

          <div className={styles.logoutContainer}>
            <button
              className={styles.logoutButton}
              onClick={() => (window.location.href = "/")}
            >
              Logout
            </button>
          </div>
        </div>

        <div className={styles.rightPane}>
          <h2 className={styles.heading2}>Transaction History</h2>
          <div className={styles.transactionHistory}>
            {expenses.map((expense) => (
              <div key={expense.id} className={styles.transactionCard}>
                <p className={styles.info}>
                  <strong>Amount:</strong> ${expense.amount}
                </p>
                <p className={styles.info}>
                  <strong>Category:</strong> {expense.category}
                </p>
                <p className={styles.info}>
                  <strong>Date:</strong> {expense.date}
                </p>
                <p className={styles.info}>
                  <strong>Description:</strong> {expense.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
