import { lastTechnologies } from "../../../constants/lastTechnologies";
import { skills } from "../../../constants/previewTexts";
import styles from "./LastTechnologies.module.css";

export default function LastTechnologies() {
  return (
    <div>
      <h2>{skills}</h2>
      <div className={styles.skills}>
        {lastTechnologies.map((el) => (
          <div className={styles.tags} key={el}>
            <span className={styles.tag}>{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
