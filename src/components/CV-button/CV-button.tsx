import { CV_LINK, CV_Text } from "../../constants/config";
import styles from "./CV-button.module.css";

export default function CVButton() {
  return (
    <a
      href={CV_LINK}
      target="_blank"
      className={`btn ${styles.cvButton}`}
      rel="noreferrer"
    >
      {CV_Text}
    </a>
  );
}
