import { TITLE } from "../../constants/config";
import SocialLinks from "../social-links/SocialLinks";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>{TITLE}</div>
        <div className={styles.cv}>
          <SocialLinks />
          <a
            href="#"
            target="_blank"
            className={`btn ${styles.cvButton}`}
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
