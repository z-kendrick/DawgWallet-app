import CombinedHeader from "@/app/components/CombinedHeader";
import styles from "@/app/styles/CombinedHeader.module.css";
import SignInForm from "@/app/components/signInForm";

export default function signIn() {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.wrapper}>
        <CombinedHeader />
        <SignInForm />
      </div>
    </div>
  );
}
