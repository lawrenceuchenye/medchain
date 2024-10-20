import styles from "./index.module.css";

const index = ({ medicine, dosage, interval, days }) => {
  return (
    <div className={styles.prescriptContainer}>
      <h4>Medicine:</h4>
      <p style={{ textTransform: "uppercase" }}>{medicine}</p>
      <h4>Prescription:</h4>
      <div className={styles.infoContainer}>
        <p>
          <b>Dosage:</b> {dosage}
        </p>
        <p>
          <b>Interval:</b> {interval} Hours
        </p>
        <p>
          <b>Days:</b> {days}
        </p>
      </div>
      <div className={styles.trashContainer}>
        <i className="fa fa-trash"></i>
      </div>
    </div>
  );
};

export default index;
