import Image from "next/image";
import styles from "./styles/WelcomePage.module.css";
import logoStyle from "./styles/logo.module.css";
import HunkerDownHeader from "./components/HunkerDownHeader";
import HomeButtons from "./components/homeButtons";
import logo from "./assets/images/bulldogs-logo.png";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className={styles.welcomeHeader}>Welcome to DawgWallet!</h1>
      </header>

      <main>
        <div className="container">
          <div className={logoStyle.logoContainer}>
            <Image src={logo} width={100} height={100} alt="bulldog" />'
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
