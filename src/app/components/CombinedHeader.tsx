import styles from "../styles/CombinedHeader.module.css";

export default function CombinedHeader() {
  return (
    <header>
      <h1 className={styles.welcomeHeader}>Welcome to DawgWallet!</h1>
      <h2 className={styles.hunkerDownHeader}>
        Hunker down on your financial journey.
      </h2>
    </header>
  );
}
