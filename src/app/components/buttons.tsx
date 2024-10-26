import styles from '../styles/buttons.module.css'

export default function Buttons() {
    return(
        <div className={styles.buttonContainer}>
            <button className={`${styles.fadeDown} ${styles.whiteButton}`}>Sign-in</button>
            <button className={styles.whiteButton}>Sign-up</button>
        </div>
    );
}