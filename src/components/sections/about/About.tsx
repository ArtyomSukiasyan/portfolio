import { EDUCATION, WORK } from "../../../constants/about";
import { description, lichessText } from "../../../constants/aboutTexts";
import { name } from "../../../constants/config";
import { lichessLink } from "../../../constants/socialLinks";
import AboutItem from "../../shared/aboutItem/AboutItem";
import Button from "../../shared/button/Button";
import Container from "../../shared/container/Container";
import Img from "../../shared/img/Img";
import LastTechnologies from "../../shared/lastTechnologies/LastTechnologies";
import SocialLinks from "../../shared/social-links/SocialLinks";
import workSpacePhoto from "../../../../public/images/workspace.webp";
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
              <p className={styles.desc}>
                <Button
                  href={lichessLink}
                  text={lichessText}
                  className={styles.lichess}
                />
              </p>
              <SocialLinks className={styles.socialLinks} />
            </div>
            <LastTechnologies />
          </div>
        </div>
        <Img
          className={styles.aboutItem}
          src={workSpacePhoto}
          alt="workspace"
        />
        <AboutItem
          className={styles.education}
          type="Education"
          list={EDUCATION}
        />
        <AboutItem className={styles.work} type="Work Experience" list={WORK} />
      </Container>
    </section>
  );
}
