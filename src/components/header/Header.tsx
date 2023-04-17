import CVButton from "../CV-button/CV-button";
import SocialLinks from "../social-links/SocialLinks";
import Container from "../shared/container/Container";
import { fullName } from "../../constants/config";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <Container className={styles.menu}>
          <div className={styles.logo}>{fullName}</div>
          <SocialLinks className={styles.socialLinks} />
          <CVButton />
        </Container>
      </div>
    </header>
  );
}
