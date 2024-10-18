import { useEffect } from "react";
import styles from "./index.module.css";

const index = ({ file_data }) => {
  function getCurrentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0"); // Get day and format with leading zero
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed) and format
    const year = now.getFullYear(); // Get full year

    return `${month}/${day}/${year}`; // Return the formatted date
  }

  useEffect(() => {
    console.log(file_data);
  }, []);
  return (
    <div className={styles.fileContainer}>
      <div className={styles.fileTypeContainer}>
        {file_data.type.includes("image") ? (
          <i className="fa fa-image"></i>
        ) : file_data.type.includes("pdf") ? (
          <i className="fa fa-file-pdf"></i>
        ) : file_data.type.includes("docx") ? (
          <i className="fa fa-file-docx"></i>
        ) : (
          <i className="fa fa-file-word-o"></i>
        )}
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h4>{file_data.name}</h4>
          <p>{getCurrentDate()} </p>
        </div>
        <div>
          <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
