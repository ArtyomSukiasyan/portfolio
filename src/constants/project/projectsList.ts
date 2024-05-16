import { IProject } from "../../models/project";
import { FUN_PROJECTS, JOB_PROJECTS, OPEN_SOURCE_PROJECTS } from "./projects";
import {
  freeTimeText,
  githubProjects,
  jobProjectsDescription,
  openSourceProjects,
} from "./projectTexts";

interface IProjectData {
  title: string;
  description: string;
  list: IProject[];
}

export const projectList: IProjectData[] = [
  {
    title: "My work projects",
    description: jobProjectsDescription,
    list: JOB_PROJECTS,
  },
  {
    title: "My open source live projects",
    description: openSourceProjects,
    list: OPEN_SOURCE_PROJECTS,
  },
  {
    title: githubProjects,
    description: freeTimeText,
    list: FUN_PROJECTS,
  },
];
