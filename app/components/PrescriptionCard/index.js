import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.prescriptContainer}>
      <p>
        <b>Medicine:</b>
      </p>
      <p style={{ color: "#64748b" }}>Aspirin</p>
      <p>
        <b>Prescription:</b>
        <p style={{ color: "#64748b" }}>
          <b>Dosage:</b> 2 <b>Interval:</b> 6 Hours <b>Days:</b> 4
        </p>
      </p>
    </div>
  );
};

export default index;
