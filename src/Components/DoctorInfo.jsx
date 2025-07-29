import styles from "./DoctorInfo.module.css";
import profile from "../assets/profile.png";
import Star from "./Star";
import { Patient } from "../DataBase/DataBase";
import Doctor from "../DataBase/DataBase";

export default function DoctorInfo() {
  return (
    <div className={styles.DoctorCard}>
      <div className={styles.card}>
        <center>
          <img src={profile} alt="Logo" height="100px" width="100px"></img>
          <h3>
            <u>{Patient.Name}</u>
          </h3>
          <Star rating={Doctor.rating} />
        </center>

        <div className={styles.Info}>
          <p>
            <b>Address : </b>
            {Patient.Address} <br></br>
            <b>Age : </b>
            {Patient.Age} yrs <br></br>
            <b>Blood Group : </b>
            {Patient.Bg}<br></br>
            <b>DOB : </b>
            {Patient.DOB}
          </p>
        </div>
      </div>
    </div>
  );
}
