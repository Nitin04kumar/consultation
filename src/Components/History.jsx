import styles from "./History.module.css";

export default function History() {
  return (
    <div className={styles.HistoryCard}>
      <div className={styles.card}>
        <center>
          <h3>
            <u>History</u>

            <hr className={styles.line}></hr>
          </h3>
        </center>
      </div>
    </div>
  );
}
