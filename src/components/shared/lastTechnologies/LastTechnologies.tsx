import { lastTechnologies } from "../../../constants/lastTechnologies";
import { skills } from "../../../constants/previewTexts";
import styles from "./LastTechnologies.module.css";

export default function LastTechnologies() {
  return (
    <div>
      <h2>{skills}</h2>
      <div className={styles.skills}>
        {Object.entries(lastTechnologies).map(([category, items]) => (
          <div key={category}>
            <p className={styles.categoryTitle}>{category}</p>
            <div className={styles.tags}>
              {items.map((item) => (
                <span className={styles.tag} key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
