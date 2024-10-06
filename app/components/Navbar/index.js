import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );
  const translate = useStore((state) => state.translate);
  const translatedPage = useStore((state) => state.translatedPage);
  const [translatedWords, setTranslatedWords] = useState({ Med: " Med" });
  const [isTranslated, setIsTranslated] = useState(false);
  const logoRef = useRef(null);

  const Translate = async () => {
    let tr = await translate(JSON.stringify(translatedWords), "yoruba");
    console.log(tr.Med);
    if (tr.Med) {
      logoRef.current.innerHTML = `${tr.Med}<span>Chain</span>`;
    }
    setIsTranslated(true);
  };

  useEffect(() => {
    if (!isTranslated) {
      Translate();
    }
  }, [translatedWords]);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <i className="fa fa-link"></i>
        <h1 ref={logoRef}>
          Med
          <span>Chain</span>
        </h1>
      </div>

      <div className={styles.ulContainer}>
        <h2>
          <Link href="/">Home</Link>
        </h2>
        <h2>About</h2>
        <h2>Support</h2>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        className={styles.getStartedBtn}
        onClick={() => setIsOnBoardingStatus(true)}
      >
        <h1>Connect</h1>
        <i class="fa-solid fa-network-wired"></i>
      </motion.div>
    </div>
  );
};

export default index;
