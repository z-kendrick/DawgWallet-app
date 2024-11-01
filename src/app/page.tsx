import Image from "next/image";
import styles from "./styles/Home.module.css";
import archLogoStyles from "./styles/archLogo.module.css";
import HunkerDownHeader from "./components/HunkerDownHeader";
import HomeButtons from "./components/HomeButtons";
import archLogo from "./assets/images/arch-logo.png";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className={styles.welcomeHeader}>Welcome to DawgWallet!</h1>
      </header>

      <main>
        <div className="container">
          <div className={archLogoStyles.logoContainer}>
            <Image src={archLogo} width={64} height={64} alt="arch" />'
          </div>
          <div className={styles.buttonContainer}>
            <HomeButtons />
            <HunkerDownHeader />
          </div>
        </div>
      </main>
    </div>
  );
}
