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
      ></motion.div>
    </div>
  );
};

export default index;
