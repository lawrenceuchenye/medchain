
import { useRef } from "react";
import styles from "./index.module.css";
import { useEffect } from "react";

const index=({ isLeft,content})=>{

    return(
        <div className={styles.chat} style={{ marginLeft:isLeft && "auto"}}>
            <p>{content}</p>
        </div>
    );

}

export default index;