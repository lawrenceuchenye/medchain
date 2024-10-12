
import styles from "./index.module.css";

const index=({ isLeft,content})=>{
    return(
        <div className={styles.chat} style={{ marginLeft:isLeft && "auto"}}>
            <p>{content}</p>
        </div>
    );

}

export default index;