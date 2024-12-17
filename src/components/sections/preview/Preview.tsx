import { description, summary } from "../../../constants/previewTexts";
import Container from "../../shared/container/Container";
import styles from "./Preview.module.css";
import LastTechnologies from "../../shared/lastTechnologies/LastTechnologies";

export default function Preview() {
  return (
    <div className={styles.content}>
      <Container className={styles.container}>
        <div className={styles.heroInfo}>
          <h2>{summary}</h2>
          <p className={styles.desc}>{description}</p>
        </div>
        <LastTechnologies />
      </Container>
    </div>
  );
}
