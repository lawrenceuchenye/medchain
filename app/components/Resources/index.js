import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.fileContainer}>
      <div className={styles.fileTypeContainer}>
        <i class="fa-solid fa-file-pdf"></i>
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h4>Brain and Neurons Road</h4>
          <p>
            eihcfjrewaf ewlijdo34of eilwe 32ii3 qwekd sdcj wska q2sw q w e4rf
            3243 qq g..
          </p>
          <p style={{ marginTop: "10px" }}>
            <b>Recommended by </b> Dr. Jerry
          </p>
        </div>
        <div>
          <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
