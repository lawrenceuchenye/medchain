import { useState } from "react";
import useStore from "../../store";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const index = () => {
  const setIsRequestAddMed = useStore((state) => state.setIsRequestAddMed);
  const addToMedWatchList = useStore((state) => state.addToMedWatchList);

  const [medData, setMedData] = useState({});

  return (
    <motion.div
      className={styles.overlay}
      onClick={() => setIsRequestAddMed(false)}
    >
      <div className={styles.medForm} onClick={(e) => e.stopPropagation()}>
        <div className={styles.form}>
          <label>Medicine</label>
          <br />
          <input
            type="text"
            onChange={(e) =>
              setMedData({ ...medData, medicine: e.target.value })
            }
          />
          <label>Dosage</label>
          <br />
          <input
            type="number"
            onChange={(e) => setMedData({ ...medData, dosage: e.target.value })}
          />
          <label>Interval(Hours)</label>
          <br />
          <input
            type="number"
            onChange={(e) =>
              setMedData({ ...medData, interval: e.target.value })
            }
          />
          <label>Days</label>
          <br />
          <input
            type="number"
            onChange={(e) => setMedData({ ...medData, days: e.target.value })}
          />
          <div
            className={styles.btnDiv}
            onClick={() => {
              addToMedWatchList(medData);
              setIsRequestAddMed(false);
            }}
          >
            <h3>SAVE</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
