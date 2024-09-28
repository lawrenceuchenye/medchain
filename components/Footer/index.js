
import styles from "./index.module.css";

const index=()=>{
    return(

        <div className={styles.footerContainer}>
            <div className={styles.usefullinksContainer}> 
                <h3>Useful link</h3>
                <p>About us</p>
                <p>Privacy Policy</p>
                <p>Support</p>
            </div>

             <div className={styles.contactContainer}>
                <h1>Contact us</h1>
                <div>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
             </div>
            <div className={styles.logoContainer}>
                <i className="fa fa-link"></i><h1>Med<span>Chain</span></h1>
            </div>
        </div>
    )
}

export default index;