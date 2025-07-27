import styles from "./StatusBar.module.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

export default function StatusBar() {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.leftSection}>
          <span className={styles.image}>
            <img src={logo} alt="Logo" height="50px" width="50px"></img>
          </span>
          <span className={styles.HospitalName}>
            <p>Hospital name</p>
          </span>
        </div>

        <span className={styles.ProfileName}>Dr. Name</span>
        <img src={profile} alt="Logo" height="50px" width="50px"></img>
      </div>
      <hr></hr>
    </>
  );
}
