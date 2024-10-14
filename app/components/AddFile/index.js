import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";
import useStore from "../../store";
import { motion } from "framer-motion";

const index = () => {
  const setIsRequestAddFile = useStore((state) => state.setIsRequestAddFile);

  return (
    <motion.div
      className={styles.overlay}
      onClick={() => setIsRequestAddFile(false)}
    >
      <div
        className={styles.chatContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.FileContainer}>
          <input type="file" />
          <p>
            Tap to add File<i class="fa-solid fa-file"></i>
          </p>
        </div>

        <button>Save</button>
      </div>
    </motion.div>
  );
};

export default index;
