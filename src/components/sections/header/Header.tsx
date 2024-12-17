import Button from "../../shared/button/Button";
import SocialLinks from "../../shared/social-links/SocialLinks";
import Container from "../../shared/container/Container";
import Img from "../../shared/img/Img";
import { CV_LINK, CV_Text, fullName } from "../../../constants/config";
import favicon from "../../../../public/images/favicon.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <Container className={styles.menu}>
          <section className={styles.logoSection}>
            <Img src={favicon} alt="logo" />
            <p className={styles.fullName}>{fullName}</p>
          </section>
          <section className={styles.links}>
            <SocialLinks className={styles.socialLinks} />
            <Button className={styles.cvButton} href={CV_LINK} text={CV_Text} />
          </section>
        </Container>
      </div>
    </header>
  );
}
