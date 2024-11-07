"use client";
import styles from "@/app/styles/SignUpForm.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.signUpBox}>
        <h1 className={styles.signUp}>Sign up</h1>
        <h2 className={styles.enterDetails}>Please fill in the form below</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="fname"
            id="fname"
            name="fname"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="lname"
            id="lname"
            name="lname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
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
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/pages/dashboard">
            <button className={styles.submitButton} type="submit">
              Sign up
            </button>
          </Link>
        </div>
        <p className={styles.signIn}>
          Already have an account?
          <Link href="/pages/signIn">
            <span> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
