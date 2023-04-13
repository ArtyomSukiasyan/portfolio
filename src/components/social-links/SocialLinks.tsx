import { SOCIAL_LINKS } from "../../constants/socialLinks";
import Icon from "../icon/Icon";
import styles from "./style.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.wrapper}>
      {SOCIAL_LINKS.map((el) => (
        <a href={el.href} target="_blank" key={el.href} rel="noreferrer">
          <Icon path={el.path} />
        </a>
      ))}
    </div>
  );
}
