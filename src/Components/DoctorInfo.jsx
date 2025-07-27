import styles from "./DoctorInfo.module.css";
import profile from "../assets/profile.png";
import Star from "./Star";
import Doctor from "../DataBase/DataBase";

export default function DoctorInfo() {
  return (
    <div className={styles.DoctorCard}>
      <div className={styles.card}>
        <center>
          <img src={profile} alt="Logo" height="100px" width="100px"></img>
          <h3>
            <u>Dr. {Doctor.Name}</u>
          </h3>
          <Star rating={Doctor.rating} />
        </center>

        <div className={styles.Info}>
          <p>
            <b>Specialization : </b>
            {Doctor.Specialization} <br></br>
            <b>Experience : </b>
            {Doctor.Experience} yrs <br></br>
            <b>Qualification : </b>
            {Doctor.Qualification}
          </p>
        </div>
      </div>
    </div>
  );
}
