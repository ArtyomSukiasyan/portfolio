import { SOCIAL_LINKS } from "../../../constants/socialLinks";
import Icon from "../icon/Icon";
import styles from "./SocialLinks.module.css";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {SOCIAL_LINKS.map((el) => (
        <a
          href={el.href}
          target="_blank"
          key={el.name}
          rel="noreferrer"
          aria-label={el.name}
        >
          <Icon path={el.path} />
        </a>
      ))}
    </div>
  );
}
