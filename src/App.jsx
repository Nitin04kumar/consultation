import StatusBar from "./Components/StatusBar";
import styles from "./Components/App.module.css";
import DoctorInfo from "./Components/DoctorInfo";
import History from "./Components/History";
import Right from "./Components/Right";

export default function App() {
  return (
    <>
      <StatusBar />
      <div className={styles.main}>
        <div className={styles.leftColumn}>
          <DoctorInfo />
          <History />
        </div>
        <div className={styles.rightColumn}>
          <Right />
        </div>
      </div>
    </>
  );
}
