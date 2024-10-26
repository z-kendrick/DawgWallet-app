import Image from "next/image";
import styles from "./styles/WelcomePage.module.css";

export default function Home() {
  return (
    <div className={styles.backgroundImage}>
      <h1>Welcome to Dawg Wallet</h1>
    </div>
  );
}
