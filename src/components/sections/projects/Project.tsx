import { sourceCode, visitSite } from "../../../constants/projectTexts";
import { IProject } from "../../../models/project";
import Button from "../../shared/button/Button";
import Img from "../../shared/img/Img";
import styles from "./Projects.module.css";

export default function Project({ project }: { project: IProject }) {
  return (
    <div key={project.title} className={styles.projectItem}>
      <Img src={project.image} alt={project.title} />
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
          {project.githubLink && (
            <Button
              href={project.githubLink}
              className={styles.siteButton}
              text={sourceCode}
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
  );
}
