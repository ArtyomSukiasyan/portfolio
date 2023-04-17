import { lastTechnologiesText } from "../../../constants/aboutTexts";
import { lastTechnologies } from "../../../constants/lastTechnologies";
import styles from "./LastTechnologies.module.css";

export default function LastTechnologies() {
  return (
    <div>
      <h3 className={styles.tagsTitle}>{lastTechnologiesText}</h3>
      <div className={styles.skills}>
        {lastTechnologies.map((el) => (
          <div key={el.title}>
            <h4>{el.title}</h4>
            <div className={styles.tags}>
              {el.skills.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
