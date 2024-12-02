"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/BudgetForm.module.css";
import { useSession } from "next-auth/react";

export default function AddBudget() {
  const [budget, setBudget] = useState(0);
  const { data: session, status } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (budget <= 0) {
    alert("Please enter a valid budget amount.");
    return;
  }

  if (!session) {
    alert("You must be logged in to set a budget.");
    return;
  }

  // Log the request body before sending
  console.log({
    userId: session.user.email, // session.user.email as userId
    budget: budget,
  });

  try {
    const response = await fetch("/api/budget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session.user.email, budget: budget }), // set email as userId
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Budget of $${budget} added!`);
      window.location.href = "/dashboard";
    } else {
      alert(`Error: ${data.message || "Failed to add budget"}`);
    }
  } catch (error) {
    console.error("Error adding budget:", error);
    alert("An error occurred while adding the budget. Please try again.");
  }
};

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <p className={styles.enterDetails}>Amount</p>

        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            placeholder="Enter Budget"
            required
          />
          <button className={styles.submitButton} type="submit">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}