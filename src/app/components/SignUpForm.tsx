import styles from "@/app/styles/SignUpForm.module.css";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.signUpBox}>
        <h1 className={styles.signUp}>Sign up</h1>
        <h2 className={styles.enterDetails}>Please fill in the form below</h2>
      </div>
      <form>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="fname"
            id="fname"
            name="fname"
            placeholder="First Name"
            required
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="lname"
            id="lname"
            name="lname"
            placeholder="Last Name"
            required
          />
        </div>
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
