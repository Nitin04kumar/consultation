import Clinical_record from "./Clinical_record";
import styles from "./Right.module.css";

export default function Right() {
  return (
    <div className={styles.Right}>
      <div className={styles.box}>
        <Clinical_record />
      </div>
    </div>
  );
}
