import { FUN_PROJECTS, PROJECTS } from "../../constants/projects";
import { internalProjectsText, visitSite } from "../../constants/projectTexts";
import Button from "../shared/button/Button";
import Container from "../shared/container/Container";
import Img from "../shared/img/Img";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <Container className={styles.container}>
        <h2 className={styles.sectionTitle}>I create jobs</h2>
        <h3>{internalProjectsText}</h3>
        <div className={styles.projectsWrapper}>
          {PROJECTS.map((project) => (
            <div key={project.title} className={styles.projectItem}>
              <Img
                src={`/images${project.image}`}
                width={500}
                height={500}
                alt={project.title}
              />
              <div className={styles.projectContent}>
                <div className={styles.roles}>
                  {project.roles.map((role) => (
                    <span className={styles.role} data-role={role} key={role}>
                      {role}
                    </span>
                  ))}
                </div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectText}>{project.text}</p>
                <div className={styles.projectFooter}>
                  {project.otherHref && (
                    <Button
                      href={project.otherHref}
                      className={styles.siteButton}
                      text={project.otherHrefText}
                    />
                  )}
                  <Button
                    href={project.href}
                    className={styles.siteButton}
                    text={visitSite}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.funProjectTitle}>Projects for fun</h2>
        <h3>In my free time I create various features and publish them in my Github</h3>
        <div className={styles.projectsWrapper}>
          {FUN_PROJECTS.map((project) => (
            <div key={project.title} className={styles.projectItem}>
              <Img
                src={`/images${project.image}`}
                width={500}
                height={500}
                alt={project.title}
              />
              <div className={styles.projectContent}>
                <div className={styles.roles}>
                  {project.roles.map((role) => (
                    <span className={styles.role} data-role={role} key={role}>
                      {role}
                    </span>
                  ))}
                </div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectText}>{project.text}</p>
                <div className={styles.projectFooter}>
                  <Button
                    href={project.href}
                    className={styles.siteButton}
                    text={visitSite}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
