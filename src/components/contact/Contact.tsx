import { getInTouch } from "../../constants/previewTexts";
import { linkedinLink } from "../../constants/socialLinks";
import Button from "../shared/button/Button";
import Container from "../shared/container/Container";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <Container className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Lets build your <br /> project together
        </h2>
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.contactButton}
            href={linkedinLink}
            text={getInTouch}
          />
        </div>
      </Container>
    </section>
  );
}
