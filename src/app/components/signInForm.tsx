import styles from "../styles/SignInForm.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/bulldogs-logo.png";

export default function SignInForm() {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.signInBox}>
        <h1 className={styles.signIn}>Sign in</h1>
        <h2 className={styles.createAccount}>
          New to DawgWallet?{" "}
          <Link href="/pages/signUp">
            <span>Sign up</span>
          </Link>
        </h2>
        <div className={styles.logoContainer}>
          <Image src={logo} width={84} height={97} alt="bulldog" />
        </div>
      </div>
      <form>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
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
        <button className={styles.submitButton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
