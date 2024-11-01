import styles from "@/app/styles/SignInForm.module.css";
import Link from "next/link";

export default function SignInForm() {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.signInBox}>
        <h1 className={styles.login}>Login</h1>
        <h2 className={styles.enterDetails}>Please enter your details</h2>
      </div>
      <form>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
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
