"use client";
import styles from "@/app/styles/SignInForm.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const formData = await response.json();

      if (response.ok) {
        window.location.href = "/pages/dashboard";
      } else {
        throw new Error(formData.message);
      }
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.signInBox}>
        <h1 className={styles.login}>Login</h1>
        <h2 className={styles.enterDetails}>Please enter your details</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </div>
        <p className={styles.createAccount}>
          New to DawgWallet?
          <Link href="/pages/signUp">
            <span> Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
