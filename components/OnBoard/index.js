import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );

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
        >
          <i className="fa fa-head-side-virus"></i>
          <h2>Patient</h2>
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
          <i className="fa fa-hand-holding-heart"></i>
          <h2>Volunteer</h2>
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
          <i className="fas fa-user-md"></i>
          <h2>Doctor</h2>
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
          <i className="fa fa-hand-holding-dollar"></i>
          <h2>Sponsor</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default index;
