"use client";
import styles from "@/app/styles/SignInForm.module.css";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (result?.error) {
      alert("Invalid Credentials")
      console.log(result.error);
    } else {
      console.log(result);
      window.location.href = "/dashboard";
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
          <Link href="/signUp">
            <span> Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
