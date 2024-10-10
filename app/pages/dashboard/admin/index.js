import styles from "../../../styles/AdminDashboard.module.css";
import ReviewCard from "../../../components/ReviewCard";
import Record from "../../../components/Record";
import PlatFormStats from "../../../components/PlatfFormStats";

import { useEffect, useState } from "react";

const index = () => {
  const [isMobile, setIsMobile] = useState([false]);

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsMobile([true]);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      {!isMobile[0] && (
        <div className={styles.scheduleContainer}>
          <h1>Verification List</h1>
          <div className={styles.scheduleDivider}>
            <h3>Active</h3>
            <hr />
          </div>
          <ReviewCard />
          <div className={styles.scheduleDivider}>
            <h3>Queue (3)</h3>
            <hr style={{ width: "80px" }} />
          </div>
          <div className={styles.queueContainer}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      )}

      <div className={styles.sectionContainer}>
        <div>
          <div className={styles.header}>
            <h1>Hello David!</h1>
            <div>
              <p>Funds:0.02 ETH ~ 6,081.06 KES</p>
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

        <div className={styles.recordsContainer}>
          <h1>onBoard Data</h1>
          <div className={styles.onBoardDataContainer}>
            <div style={{ padding: "10px", fontWeight: "400px" }}>
              <h1>Kelvin Kurd</h1>
              <p>
                <b>Nationality:</b> Zimbawean
              </p>
              <p>
                <b>Date:</b> 20/12/2024
              </p>
              <p>
                <b>ID:</b> 0x3...6C1
              </p>
              <div className={styles.pfpContainer}></div>
              <div className={styles.filesContainer}>
                <div className={styles.fileContainer}>
                  <div className={styles.infoContainer}>
                    <div>
                      <h4>Personal Information</h4>
                    </div>
                    <div>
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.fileContainer}>
                  <div className={styles.infoContainer}>
                    <div>
                      <h4>Health Information</h4>
                    </div>
                    <div>
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.verifyBtn}>
                <h1>Verify</h1>
              </div>
            </div>
          </div>
          <PlatFormStats />
        </div>
      </div>

      {isMobile[0] && (
        <div className={styles.scheduleContainer}>
          <h1>Verification List</h1>
          <div className={styles.scheduleDivider}>
            <h3>Active</h3>
            <hr />
          </div>
          <ReviewCard />
          <div className={styles.scheduleDivider}>
            <h3>Queue (3)</h3>
            <hr style={{ width: "80px" }} />
          </div>
          <div className={styles.queueContainer}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      )}

      <div className={styles.scheduleContainer}>
        <h1 style={{ background: "var(--color-red)" }}>Reports</h1>
        <div className={styles.scheduleDivider}>
          <h3>Active</h3>
          <hr />
        </div>
        <ReviewCard />
        <div className={styles.scheduleDivider}>
          <h3>Queue (3)</h3>
          <hr style={{ width: "80px" }} />
        </div>
        <div className={styles.queueContainer}>
          <ReviewCard /> <ReviewCard /> <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default index;
