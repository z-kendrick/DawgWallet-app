"use client";

import Link from "next/link";
import styles from "../styles/buttons.module.css";
import { useState } from "react";

export default function Buttons() {
  return (
    <div className={styles.buttonContainer}>
      <Link href="/pages/signIn">
        <button className={`${styles.fadeDown} ${styles.whiteButton}`}>
          Sign-in
        </button>
      </Link>
      <Link href="/pages/signUp">
        <button className={styles.whiteButton}>
            Sign-up
        </button>
      </Link>
    </div>
  );
}
