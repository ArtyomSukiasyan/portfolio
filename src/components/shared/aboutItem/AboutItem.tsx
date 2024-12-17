import { IAboutItemProps } from "../../../models/aboutItemProps";
import styles from "./AboutItem.module.css";

export default function AboutItem({ type, list, className }: IAboutItemProps) {
  return (
    <div className={styles.aboutItem}>
      <h2 className={`${styles.experienceType} ${className}`}>{type}</h2>
      <div className={styles.experienceList}>
        {list.map(({ title, date, role, country }) => (
          <div key={`${title}${date}`} className={styles.experienceItem}>
            <div className={styles.experienceTitle}>
              {title} {country ? `- ${country}` : ""}
            </div>
            <div className={styles.experienceRole}>{role}</div>
            <div className={styles.experienceDate}>{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
