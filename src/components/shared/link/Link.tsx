import styles from "./Link.module.css";

export default function Link({ link }: { link: string | void }) {
  if (!link) {
    return null;
  }
  
  return (
    <>
      <span> - </span>
      <a href={`https://${link}`} className={styles.link} target="_blank">
        {link}
      </a>
    </>
  );
}
