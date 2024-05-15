import { github } from "../../../constants/config";
import {
  FUN_PROJECTS,
  JOB_PROJECTS,
  OPEN_SOURCE_PROJECTS,
} from "../../../constants/projects";
import {
  freeTimeText,
  githubProjects,
  jobProjectsDescription,
  openSourceProjects,
} from "../../../constants/projectTexts";
import Button from "../../shared/button/Button";
import Container from "../../shared/container/Container";
import Project from "./Project";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <Container className={styles.container}>
        <h2 className={styles.sectionTitle}>My work projects</h2>
        <h3>{jobProjectsDescription}</h3>
        <div className={styles.projectsWrapper}>
          {JOB_PROJECTS.map((project) => (
            <Project project={project} />
          ))}
        </div>
        <h2 className={styles.sectionTitle}>My open source live projects</h2>
        <h3>{openSourceProjects}</h3>
        <div className={styles.projectsWrapper}>
          {OPEN_SOURCE_PROJECTS.map((project) => (
            <Project project={project} />
          ))}
        </div>
        <h2 className={styles.funProjectTitle}>{githubProjects}</h2>
        <h3>{freeTimeText}</h3>
        <div className={styles.projectsWrapper}>
          {FUN_PROJECTS.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </Container>
      <div className={styles.moreButtonWrapper}>
        <Button
          href={github}
          className={styles.moreButton}
          text="More in my Github"
        />
      </div>
    </section>
  );
}
