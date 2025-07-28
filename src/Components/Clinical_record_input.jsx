import styles from "./Clinical_record.module.css";

import { Consultant_record, Patient } from "../DataBase/DataBase";
import { useState } from "react";

export default function Clinical_record_input({ handleClose }) {
  const [symptoms, setSymptoms] = useState("");
  const [bp, setBp] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [medication, setMedication] = useState("");
  const [instruction, setInstruction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      Consultant_id: `CID${Date.now()}`, // unique ID
      patient_id: Patient.id,
      date: new Date().toLocaleDateString(),
      Symptoms: symptoms,
      bp,
      height,
      weight,
      description,
      medication,
      instruction,
    };

    Consultant_record.record.push(newRecord);
    console.log("Saved Record:", newRecord);

    handleClose(); // Close the popup
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h1>
          <u>Clinical Notes</u>
        </h1>
        <form>
          <h3>Symptoms</h3>
          <textarea
            rows="4"
            cols="50"
            name="symptoms"
            placeholder="Enter symptoms"
          />

          <h3>Additional Details</h3>
          <div className={styles.additionalDetails}>
            <input type="text" name="bp" placeholder="Blood Pressure" />
            <input type="text" name="height" placeholder="Height" />
            <input type="text" name="weight" placeholder="Weight" />
          </div>

          <h3>Description</h3>
          <textarea
            name="description"
            rows="4"
            cols="50"
            placeholder="Enter detailed description"
          ></textarea>

          <h3>
            <u>Prescription</u>
          </h3>
          <label htmlFor="medication" className={styles.Medication}>
            Medication :
          </label>
          <select name="medication" id="medication">
            <option value="" disabled>
              -- Select Medication --
            </option>
            <option value="paracetamol">Paracetamol</option>
            <option value="antibiotic">Antibiotic</option>
          </select>

          <h3>
            <label htmlFor="instruction">Instruction:</label>
          </h3>
          <textarea
            id="instruction"
            rows="4"
            cols="50"
            name="instruction"
            placeholder="..."
          />

          <div className={styles.buttonGroup}>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
