import Image from "next/image";
import styles from "./styles/WelcomePage.module.css";
import logoStyle from "./styles/logo.module.css";
import HunkerDownHeader from "./components/HunkerDownHeader";
import HomeButtons from "./components/homeButtons";
import archLogo from "./assets/images/arch-logo.png";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className={styles.welcomeHeader}>Welcome to DawgWallet!</h1>
      </header>

      <main>
        <div className="container">
          <div className={logoStyle.logoContainer}>
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
