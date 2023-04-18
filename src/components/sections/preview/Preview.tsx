import { name } from "../../../constants/config";
import {
  description,
  getInTouch,
  skills,
} from "../../../constants/previewTexts";
import { linkedinLink } from "../../../constants/socialLinks";
import Button from "../../shared/button/Button";
import Container from "../../shared/container/Container";
import Img from "../../shared/img/Img";
import styles from "./Preview.module.css";

export default function Preview() {
  return (
    <div className={styles.content}>
      <Container className={styles.container}>
        <div className={styles.heroInfo}>
          <h2 className={styles.name}>{name}</h2>
          <h2 className={styles.skills}>{skills}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.contactBtn}
              href={linkedinLink}
              text={getInTouch}
            />
          </div>
        </div>
        <Img
          width={534}
          height={534}
          src="/images/profile_photo.webp"
          alt="profile photo"
        />
      </Container>
    </div>
  );
}
