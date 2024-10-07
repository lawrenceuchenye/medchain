import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.prescriptContainer}>
      <h4>Patient Name:</h4>
      <p style={{ textTransform: "uppercase" }}>Davii Hai</p>
      <h4 style={{ marginTop: "10px" }}>Patient ID:</h4>
      <p>0x34A...C54</p>
      <div className={styles.trashContainer}>
        <i className="fa fa-trash"></i>
      </div>

      <div className={styles.viewBtn}>
        <h3>View</h3>
      </div>
    </div>
  );
};

export default index;
