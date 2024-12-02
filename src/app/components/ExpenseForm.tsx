"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/ExpenseForm.module.css";
import { useSession } from "next-auth/react";

export default function AddExpense() {
  const { data: session, status } = useSession();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(amount),
          category,
          date,
          description,
          userId: session.user.email, // Use email as userId
        }),
      });

      if (response.ok) {
        console.log("Expense added successfully!");
        console.log("User ID (Email):", session.user.email);
      } else {
        console.error("Failed to add expense.");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    //console.log("Expense Added:");
    //console.log({ amount, category, date, description });

    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="number"
          id="amount"
          name="amount"
          placeholder="Amount Spent"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          autoComplete="off"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          id="category"
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          autoComplete="off"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          autoComplete="off"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          autoComplete="off"
        />
      </div>

      <button className={styles.submitButton} type="submit">
        Add Expense
      </button>

      <button
        className={styles.submitButton}
        onClick={() => {
          window.location.href = "/dashboard";
        }}
      >
        Go to Dashboard
      </button>
    </form>
  );
}
