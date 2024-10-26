import Image from "next/image";
import styles from "./styles/WelcomePage.module.css";
import logoStyle from "./styles/logo.module.css"
import WelcomeHeader from "./components/WelcomeHeader";
import HunkerDownHeader from "./components/HunkerDownHeader";
import Buttons from "./components/buttons";
import logo from "./assets/images/bulldogs-logo.png"



export default function Home() {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.wrapper}>
      <WelcomeHeader />
      <Image 
      className={logoStyle.logoPosition}
      src={logo}
      width={100}
      height={100}
      alt="bulldog"
      />
      <Buttons />
      <HunkerDownHeader />
      </div>
    </div>
  );
}
 