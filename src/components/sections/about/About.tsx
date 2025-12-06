import { EDUCATION, WORK } from "../../../constants/about";
import AboutItem from "../../shared/aboutItem/AboutItem";
import Container from "../../shared/container/Container";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <AboutItem className={styles.work} type="Work Experience" list={WORK} />
        <AboutItem
          className={styles.education}
          type="Education"
          list={EDUCATION}
        />
      </Container>
    </section>
  );
}
