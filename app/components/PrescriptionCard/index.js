import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.prescriptContainer}>
      <h4>Medicine:</h4>
      <p style={{ textTransform: "uppercase" }}>Aspirin</p>
      <h4>Prescription:</h4>
      <div className={styles.infoContainer}>
        <p>
          <b>Dosage:</b> 2
        </p>
        <p>
          <b>Interval:</b> 6 Hours
        </p>
        <p>
          <b>Days:</b> 8
        </p>
      </div>
      <div className={styles.trashContainer}>
        <i className="fa fa-trash"></i>
      </div>
    </div>
  );
};

export default index;
