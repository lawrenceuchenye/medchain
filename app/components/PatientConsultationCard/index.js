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
            height: "max-content",
          }}
        >
          <h4>Greg Dave</h4>
          <p>56 - male</p>
          <p>Diabetic</p>
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
