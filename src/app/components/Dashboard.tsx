"use client";

import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import AddBudget from "./BudgetForm";
import AddExpense from "./ExpenseForm";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";
import { Session } from "next-auth";

export default function DashHome() {


  const { data: session, status } = useSession();
  const [budget, setBudget] = useState<number | null>(null); 
  const [expenses, setExpenses] = useState<any[]>([]);

  useEffect(() => {
    console.log("Session data:", session); // Log session to check for `user.id`
  }, [session])
  
  const name = session?.user?.name;
  

  useEffect(() => {
    if (session && session.user?.email) {

      const userEmail = session?.user?.email;

      //fetch budget
      fetch(`/api/budget?userId=${userEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data?.budget) {
            setBudget(data.budget);
          } else {
            setBudget(0); // If no budget is set for the user, set to 0
          }
        })
        .catch((error) => console.error("Error fetching budget:", error));

        //fetch expenses
        fetch(`/api/expenses?userId=${userEmail}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched Expenses:", data);
            if (Array.isArray(data)) {
              setExpenses(data); // Set the fetched expenses data
            } else {
              console.error("Error fetching expenses:", data?.error);
              setExpenses([]); // Set empty array if no expenses are found
            }
        })
        .catch((error) => console.error("Error fetching expenses:", error));
    
    }
  }, [session]);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const progress = Math.min((totalExpenses / budget) * 100, 100);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.splitContainer}>
        <div className={styles.leftPane}>
          <h2 className={styles.heading2}>Welcome, {name}</h2>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div>
              <p className={styles.info}>{`Total Budget: ${budget}`}</p>
              <p
                className={styles.info}
              >{`Total Expenses: $${totalExpenses}`}</p>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
          {budget === null ? ( 
              <Link href="/addBudget">
                <button className={styles.budgetButton}>Add Budget</button>
              </Link>
            ) : (
              <>
                <Link href="/addBudget">
                  <button className={styles.budgetButton}>Edit Budget</button>
                </Link>
                <Link href="/addExpense">
                  <button className={styles.expenseButton}>Add Expense</button>
                </Link>
              </>
            )}
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
            {expenses.length === 0 ? (
              <p>No expenses recorded yet.</p>
            ) : (
              
              expenses.map((expense) => (
                <div key={expense._id} className={styles.transactionCard}>
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
