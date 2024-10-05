import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.drProfileContainer}>
        <div></div>
        <div
          style={{
            width: "80%",
            borderRadius: "0px",
            textAlign: "left",
            background: "var(--color-white)",
            marginBottom: "8px",
          }}
        >
          <h4>Dr. Ken. Kurd..</h4>
          <p>Neurosurgen..</p>
        </div>
      </div>
      <div className={styles.info1Container}>
        <p>
          <i className="far fa-clock"> </i>6:00pm - 9:00pm
        </p>
        <div></div>
      </div>
      <div className={styles.cardType}>
        <p>Consultation</p>
      </div>
    </div>
  );
};

export default index;
