import styles from "../../../../styles/DoctorDashboard.module.css";
import DrConsultationCard from "../../../../components/DrConsultationCard";
import PrescriptionCard from "../../../../components/PrescriptionCard";
import Activity from "../../../../components/Activity";
import Record from "../../../../components/Record";

const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.scheduleContainer}>
        <h1>Schedule</h1>
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
            <h1>Hi Dr. Kim!</h1>
            <div>
              <p>Medication Funds:0.02 ETH ~ 6,081.06 KES</p>
              <button className={styles.wthdrw}>Withdraw</button>
            </div>
          </div>
        </div>
        <div className={styles.actionBtnContainer}>
          <div>
            <h4>
              Ready to save lives <i className="fa fa-head-side-virus"></i>
            </h4>
          </div>
          <div>
            <h4>
              Summarize scanned picture <i className="fa fa-robot"></i>
            </h4>
          </div>
        </div>
        <div className={styles.utilsHeaderContainer}>
          <div className={styles.medWatchContainer}>
            <div className={styles.mwBanner}>
              <h2>2</h2>
              <h2>
                Prescriptions <i class="fas fa-file-prescription"></i>
              </h2>
              <div>
                <i className="fa fa-plus"></i>
              </div>
            </div>
            <div className={styles.prescriptionContainer}>
              <PrescriptionCard />
              <PrescriptionCard />
              <PrescriptionCard />
              <PrescriptionCard />
            </div>
          </div>
          <div className={styles.chartC}>
            <Activity />
          </div>
        </div>
        <div className={styles.recordsContainer}>
          <h1>Patients Medical Profiles</h1>
          <div className={styles.filesContainer}>
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
          </div>
          <div className={styles.addFileBtn}>
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
