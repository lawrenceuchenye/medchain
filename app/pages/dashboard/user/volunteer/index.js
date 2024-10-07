import styles from "../../../../styles/VolunteerDashboard.module.css";
import DrConsultationCard from "../../../../components/DrConsultationCard";
import Task from "../../../../components/Task";
import Activity from "../../../../components/Activity";
import Record from "../../../../components/Record";

const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.scheduleContainer}>
        <h1>Training</h1>
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
            <h1>
              Hello David! <i class="fa-solid fa-award"></i>{" "}
            </h1>
            <div>
              <p>Medication Funds:0.02 ETH ~ 6,081.06 KES</p>
              <button className={styles.wthdrw}>Withdraw</button>
              <button
                className={styles.wthdrw}
                style={{ background: "var(--color-red)" }}
              >
                Earn
              </button>
            </div>
          </div>
        </div>
        <div className={styles.actionBtnContainer}>
          <div>
            <h4>
              Certified to save lives <i className="fa fa-fire"></i>
            </h4>
          </div>
          <div>
            <h4>
              Study with medMate <i className="fa fa-robot"></i>
            </h4>
          </div>
          <div>
            <h4>
              0 Messages <i class="fa-solid fa-message"></i>{" "}
            </h4>
          </div>
        </div>
        <div className={styles.utilsHeaderContainer}>
          <div className={styles.medWatchContainer}>
            <div className={styles.mwBanner}>
              <h2>2</h2>
              <h2>
                Tasks <i class="fa-solid fa-book"></i>
              </h2>
            </div>
            <div className={styles.prescriptionContainer}>
              <Task />
              <Task />
              <Task />
            </div>
          </div>
          <div className={styles.chartC}>
            <Activity />
          </div>
        </div>
        <div className={styles.recordsContainer}>
          <h1>Study Resources</h1>
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
