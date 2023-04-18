import { EDUCATION, WORK } from "../../../constants/about";
import { description } from "../../../constants/aboutTexts";
import { name } from "../../../constants/config";
import AboutItem from "../../shared/aboutItem/AboutItem";
import Container from "../../shared/container/Container";
import Img from "../../shared/img/Img";
import LastTechnologies from "../../shared/lastTechnologies/LastTechnologies";
import SocialLinks from "../../shared/social-links/SocialLinks";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.aboutItem}>
          <div className={styles.aboutText}>
            <div>
              <h2 className={styles.aboutTitle}>{name}</h2>
              <p className={styles.desc}>{description}</p>
              <SocialLinks className={styles.socialLinks} />
            </div>
            <LastTechnologies />
          </div>
        </div>
        <Img
          width={565}
          height={387}
          className={styles.aboutItem}
          src="/images/workspace.png"
          alt="workspace"
        />
        <AboutItem
          className={styles.education}
          type="Education"
          list={EDUCATION}
        />
        <AboutItem
          className={styles.work}
          type="Professional Experience"
          list={WORK}
        />
      </Container>
    </section>
  );
}
