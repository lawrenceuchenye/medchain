import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.prescriptContainer}>
      <h4>Instructor:</h4>
      <p style={{ textTransform: "uppercase" }}>Dr. MATT</p>
      <h4>Assignment:</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an ...
      </p>
      <div className={styles.btnContainer}>
        <div>
          <h3>View</h3>
        </div>
        <div>
          <h3>Submit</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
