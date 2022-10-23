import { Link } from "react-router-dom";
import styles from "./search-input.module.css";

export default function SearchInput({
  inputValue,
  setInputValue,
  onClickButton,
}) {
  return (
    <div className={styles.searchBar}>
      <Link to="/favorite"> Favorite </Link>
      <div>
        <h2>Unsplash API Search</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button onClick={onClickButton}>search</button>
      </div>
    </div>
  );
}
