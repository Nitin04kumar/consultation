import DoctorInfo from "./DoctorInfo";
import History from "./History";
import styles from "./Left.module.css";

export default function Left() {
  return (
    <div className={styles.leftContainer}>
      <DoctorInfo />
      <History />
    </div>
  );
}
