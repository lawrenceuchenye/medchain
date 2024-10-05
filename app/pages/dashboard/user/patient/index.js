import styles from "../../../../styles/PatientDashboard.module.css";
import DrConsultationCard from "../../../../components/DrConsultationCard";
import PrescriptionCard from "../../../../components/PrescriptionCard";

const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.scheduleContainer}>
        <h1>Appointments</h1>
        <div className={styles.scheduleDivider}>
          <h3>Upcoming</h3>
          <hr />
        </div>
        <DrConsultationCard />
        <div className={styles.scheduleDivider}>
          <h3>Queue (3)</h3>
          <hr style={{ width: "80px" }} />
        </div>
        <div className={styles.queueContainer}>
          <DrConsultationCard />
          <DrConsultationCard />
          <DrConsultationCard />
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <div>
          <div className={styles.header}>
            <h1>Hello David!</h1>
            <div>
              <p>Medication Funds:0.02 ETH ~ 6,081.06 KES</p>
              <button className={styles.wthdrw}>Withdraw</button>
            </div>
          </div>
        </div>
        <div className={styles.medWatchContainer}>
          <h2>
            MedWatch <i class="fa-solid fa-binoculars"></i>
          </h2>
          <div>
            <PrescriptionCard />
            <PrescriptionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
