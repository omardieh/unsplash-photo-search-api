import styles from "./thumb.module.css";

export default function Thumb({ element, onClick }) {
  const {
    urls: { thumb },
    alt_description,
  } = element;

  return (
    <img
      onClick={onClick}
      src={thumb}
      alt={alt_description}
      className={styles.thumb}
    />
  );
}
