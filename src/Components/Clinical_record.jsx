import { useState } from "react";
import Clinical_record_input from "./Clinical_record_input";
import styles from "./Clinical_record.module.css";

export default function Clinical_record() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    <>
      <div className={styles.headerRow}>
        <span className={styles.heading}>Clinical Record</span>
        <span className={styles.New_button} onClick={handleClick}>
          New
        </span>
      </div>

      {showForm ? <Clinical_record_input /> : null}
    </>
  );
}
