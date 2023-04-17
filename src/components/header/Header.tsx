import Button from "../shared/button/Button";
import SocialLinks from "../shared/social-links/SocialLinks";
import Container from "../shared/container/Container";
import { CV_LINK, CV_Text, fullName } from "../../constants/config";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <Container className={styles.menu}>
          <div className={styles.logo}>{fullName}</div>
          <SocialLinks className={styles.socialLinks} />
          <Button className={styles.cvButton} href={CV_LINK} text={CV_Text} />
        </Container>
      </div>
    </header>
  );
}
