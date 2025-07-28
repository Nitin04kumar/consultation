import { useState } from "react";
import Clinical_record_input from "./Clinical_record_input";
import styles from "./Clinical_record.module.css";
import { Patient } from "../DataBase/DataBase";
import { Consultant_record } from "../DataBase/DataBase";

export default function Clinical_record() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);
  const today = new Date();
  const PatientId = Patient.id;

  const matchingRecord = Consultant_record.record.find(
    (rec) => rec.patient_id === PatientId
  );

  return (
    <>
      <div className={styles.headerRow}>
        <span className={styles.heading}>Clinical Record</span>
        <span className={styles.New_button} onClick={handleClick}>
          New
        </span>
      </div>
      <div className={styles.details}>
        <span>
          <b>Date:</b> {today.toLocaleDateString()}
        </span>
        <span>
          <b>Time:</b> {today.toLocaleTimeString()}
        </span>
        <span>
          <b>Place:</b> {Patient.Dist}, {Patient.State}
        </span>
      </div>
      <hr className={styles.line}></hr>

      <span className={styles.heading1}>Clinical Notes</span>

      <div className={styles.ClinicalNotes}>
        <span>
          <b>Symptoms :</b>
        </span>
        <span className={styles.Symptoms}>{matchingRecord.Symtoms}</span>
      </div>

      <div className={styles.ClinicalNotes}>
        <div className={styles.infoBlock}>
          <b>Height:</b> {matchingRecord.Height} Cm
        </div>
        <div className={styles.infoBlock}>
          <b>Weight:</b> {matchingRecord.Weight} Kg
        </div>
        <div className={styles.infoBlock}>
          <b>BP:</b> {matchingRecord.BloodPressure}
        </div>
      </div>

      <span className={styles.heading1}>Prescription</span>

      {showForm ? <Clinical_record_input handleClose={handleClose} /> : null}
    </>
  );
}
