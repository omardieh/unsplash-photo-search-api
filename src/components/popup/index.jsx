import styles from "./popup.module.css";

export default function Popup({ element, onClickIcon }) {
  const {
    urls: { regular },
    user: { username },
    alt_description,
  } = element;

  return (
    <div className={styles.popupWrapper}>
      <i onClick={onClickIcon} className={styles.close}>
        X
      </i>
      <img src={regular} alt={alt_description} className={styles.popup} />
      <p className={styles.title}> by {username} </p>
    </div>
  );
}
