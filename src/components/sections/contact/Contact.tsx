import { CV_LINK, CV_Text } from "../../../constants/config";
import Button from "../../shared/button/Button";
import SocialLinks from "../../shared/social-links/SocialLinks";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.links}>
      <SocialLinks />
      <Button className={styles.cvButton} href={CV_LINK} text={CV_Text} />
    </section>
  );
}
