import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ConnectWallet from "@/components/ConnectWallet";

const index = () => {
    const setIsRequestConnect = useStore(
        (state) => state.setIsRequestConnect
      );

  return (
    <div
      className={styles.overlay}
      onClick={() => setIsRequestConnect(false)}
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
          Back! <span>#onChain</span>
        </motion.h1>
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

          <div>
            <ConnectWallet />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default index;
