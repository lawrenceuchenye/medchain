import styles from "./index.module.css";

const index=()=>{
    return(
        <div className={styles.navContainer}>
       
            <div className={styles.logoContainer}>
                <i className="fa fa-link"></i><h1>Med<span>Chain</span></h1>
            </div>
   
            <div className={styles.ulContainer}>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Support</h2>
            </div>

            <div className={styles.getStartedBtn}>
                <h1>Get Started</h1>
                <i class="fa-solid fa-rocket"></i>
            </div>
        </div>
    );
}

export default index;