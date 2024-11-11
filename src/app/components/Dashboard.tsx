"use client";

import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";

export default function DashHome() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Dashboard</h1>

            <div className={styles.buttonsContainer}>
                <Link href="/pages/addBudget">
                    <button className={styles.budgetButton}>
                        Add Budget
                    </button>
                </Link>
                <Link href="/pages/addExpense">
                    <button className={styles.expenseButton}>
                        Add Expense
                    </button>
                </Link>
            </div>
        </div>
    );
  }
  