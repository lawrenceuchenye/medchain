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
          <p
            style={{
              textTransform: "uppercase",
              background: "rgb(53, 114, 239,0.1)",
              color: "var(--color-blue)",
              padding: "5px",
              borderRadius: "4px",
              textAlign: "center",
              fontWeight: "800",
              margin: "4px 0",
            }}
          >
            Patient
          </p>
          <p>21/08/2024</p>
        </div>
      </div>
      <div className={styles.info1Container}>
        <p>
          <b>ID:</b> 0x29...E5A
        </p>
      </div>
      <div className={styles.cardType}>
        <p>Review</p>
      </div>
    </div>
  );
};

export default index;
