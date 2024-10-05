import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.fileContainer}>
      <div className={styles.fileTypeContainer}>
        <i className="fa fa-image"></i>
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h4>Brain Scan</h4>
          <p>21/10/2024</p>
        </div>
        <div>
          <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
