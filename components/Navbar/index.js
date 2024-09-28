import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <i className="fa fa-link"></i>
        <h1>
          Med<span>Chain</span>
        </h1>
      </div>

      <div className={styles.ulContainer}>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Support</h2>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        className={styles.getStartedBtn}
        onClick={() => setIsOnBoardingStatus(true)}
      >
        <h1>Get Started</h1>
        <i class="fa-solid fa-user-doctor"></i>
      </motion.div>
    </div>
  );
};

export default index;
