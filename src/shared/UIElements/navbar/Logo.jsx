import { GiHotMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <GiHotMeal />
        <span>R-Recipe</span>
      </Link>
    </div>
  );
}

export default Logo;
