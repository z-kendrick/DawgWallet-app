"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/ExpenseForm.module.css";

export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Expense Added:");
    console.log({ amount, category, date, description });

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
          window.location.href = "/pages/dashboard";
        }}
      >
        Go to Dashboard
      </button>
    </form>
  );
}