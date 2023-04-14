import Image from "next/image";
import { name } from "../../constants/config";
import { description, getInTouch, skills } from "../../constants/previewTexts";
import { linkedinLink } from "../../constants/socialLinks";
import styles from "./Preview.module.css";

export default function Preview() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.heroInfo}>
          <h2 className={styles.name}>{name}</h2>
          <h2 className={styles.skills}>{skills}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.buttonWrapper}>
            <a
              href={linkedinLink}
              target="_blank"
              className={`btn ${styles.contactBtn}`}
              rel="noreferrer"
            >
              {getInTouch}
            </a>
          </div>
        </div>
        <Image
          priority={true}
          width={534}
          height={534}
          alt="profile"
          src="/images/profile_photo.jpg"
        />
      </div>
    </div>
  );
}
