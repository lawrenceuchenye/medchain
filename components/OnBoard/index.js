import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ConnectWallet from "@/components/ConnectWallet";

const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );

  const [userData, setUserData] = useState({ type: null });
  const [isOnBoardMe, setIsOnBoard] = useState(false);

  return (
    <div
      className={styles.overlay}
      onClick={() => setIsOnBoardingStatus(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.onBoardingOptions}
        initial={{ opacity: 0, y: "200px" }}
        animate={{
          opacity: 1,
          y: "0",
          transition: { type: "spring", delay: 1 },
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 1.5 },
          }}
        >
          Welcome! <span>#onChain</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 1.8 },
          }}
        >
          Please pick a catgory to get started
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 2.1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
          onClick={() => setUserData({ type: "patient" })}
        >
          <h2>Patient</h2>
          <i className="fa fa-head-side-virus"></i>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 2.4 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
        >
          <h2>Volunteer</h2>
          <i className="fa fa-hand-holding-heart"></i>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 2.7 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
        >
          <h2>Doctor</h2>
          <i className="fas fa-user-md"></i>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 3.1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
        >
          <h2>Sponsor</h2>
          <i className="fa fa-hand-holding-dollar"></i>
        </motion.div>
      </motion.div>

      {userData.type === "patient" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className={styles.patientOnBoardingContainer}
        >
          <div className={styles.patientInfoContainer}>
            <h1>Almost there...</h1>
            <p>Please fill this form.</p>
            <motion.div
              whileTap={{ scale: 1.2 }}
              className={styles.cancelBtn}
              onClick={() => setUserData({ type: null })}
            >
              <i className="fa fa-x"></i>
            </motion.div>
            <div className={styles.patientInfo}>
              <div className={styles.patientInfoHeadInputContainer}>
                <div>
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
              </div>
              <div style={{ margin: "20px 0" }}>
                <label>Address</label>
                <input type="text" placeholder="*Optional" />
              </div>
              <div
                className={styles.patientInfoHeadInputContainer}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <label>Age</label>
                  <input type="number" />
                </div>
                <div>
                  <label className={styles.thisLabel}>Gender</label>
                  <select>
                    <option value="male"></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsOnBoard(!isOnBoardMe)}
          >
            <h2>OnBoard</h2>
          </motion.button>
        </motion.div>
      )}

      {isOnBoardMe && (
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 0.3 },
          }}
          className={styles.onBoardContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <ConnectWallet />
        </motion.div>
      )}
    </div>
  );
};

export default index;
