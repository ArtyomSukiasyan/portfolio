import Project from "./Project";
import Container from "../../shared/container/Container";
import Button from "../../shared/button/Button";
import { githubLink } from "../../../constants/config";
import { projectList } from "../../../constants/project/projectsList";
import styles from "./Projects.module.css";
import React from "react";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <Container className={styles.container}>
        {projectList.map((el) => (
          <React.Fragment key={el.title}>
            <h2 className={styles.sectionTitle}>{el.title}</h2>
            <h3>{el.description}</h3>
            <div className={styles.projectsWrapper}>
              {el.list.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </Container>
      <div className={styles.moreButtonWrapper}>
        <Button
          href={githubLink}
          className={styles.moreButton}
          text="More in my Github"
        />
      </div>
    </section>
  );
}
