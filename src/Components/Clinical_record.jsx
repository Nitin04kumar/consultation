import { useState } from "react";
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

      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>New Clinical Record</h3>
            <form>
              <label>Patient Name:</label>
              <input type="text" placeholder="Enter name" />
              <br />
              <label>Diagnosis:</label>
              <input type="text" placeholder="Enter diagnosis" />
              <br />
              <div className={styles.buttonGroup}>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
