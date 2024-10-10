import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.fileContainer}>
      <div className={styles.fileTypeContainer}>
        <i className="fa fa-user"></i>
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h4>David Thunderman</h4>
          <p style={{ marginBottom: "10px" }}>
            {" "}
            he is a bit diagbetice ans eojeidjied ejfdhue eqjdj
            sjiepiuicdnk,cn...
          </p>
          <p>
            <b>ID:</b> 0x23...7E2
          </p>
          <p>
            <b>TIMESTAMP:</b> 21/10/2024
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
