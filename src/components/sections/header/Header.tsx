import Contact from "../contact/Contact";
import Container from "../../shared/container/Container";
import Img from "../../shared/img/Img";
import { fullName } from "../../../constants/config";
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
          <Contact />
        </Container>
      </div>
    </header>
  );
}
