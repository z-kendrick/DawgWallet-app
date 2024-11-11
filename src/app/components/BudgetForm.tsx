"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/BudgetForm.module.css";

export default function AddBudget() {
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Budget of $${budget} added!`);
    window.location.href = "/pages/dashboard";
  };

  return (
    <div onSubmit={handleSubmit} className={styles.formWrapper}>
      <form>
        <p className={styles.enterDetails}>Amount</p>

        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="budget"
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