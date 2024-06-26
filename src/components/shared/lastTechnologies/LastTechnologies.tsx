import { lastTechnologies } from "../../../constants/lastTechnologies";
import { skills } from "../../../constants/previewTexts";
import styles from "./LastTechnologies.module.css";

export default function LastTechnologies() {
  return (
    <div>
      <h3 className={styles.tagsTitle}>{skills}</h3>
      <div className={styles.skills}>
        {lastTechnologies.map((el) => (
          <div className={styles.tags}>
            {el.skills.map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
