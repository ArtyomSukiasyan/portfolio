import { SOCIAL_LINKS } from "../../constants/socialLinks";
import Icon from "../shared/icon/Icon";
import styles from "./style.module.css";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {SOCIAL_LINKS.map((el) => (
        <a href={el.href} target="_blank" key={el.href} rel="noreferrer">
          <Icon path={el.path} />
        </a>
      ))}
    </div>
  );
}
