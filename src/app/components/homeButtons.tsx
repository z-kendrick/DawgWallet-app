"use client";

import Link from "next/link";
import styles from "../styles/HomeButtons.module.css";
import { useState } from "react";

export default function HomeButtons() {
  return (
    <div className={styles.buttonContainer}>
      <Link href="/signIn">
        <button className={`${styles.fadeDown} ${styles.whiteButton}`}>
          Sign-in
        </button>
      </Link>
      <Link href="/pages/signUp">
        <button className={`${styles.fadeDown} ${styles.whiteButton}`}>
          Sign-up
        </button>
      </Link>
    </div>
  );
}
