import styles from "./Clinical_record.module.css";

export default function Clinical_record_input() {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>New Record</h3>
        <form></form>
      </div>
    </div>
  );
}
