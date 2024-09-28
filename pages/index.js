import styles from "@/styles/index.module.css";

const index=()=>{
  return(
    <div className={styles.mainMainContainer}>
    <div className={styles.mainContainer}>
      <div className={styles.infoContainer}>
          <h1>Healthcare Anywhere Anytime <i class="fa-solid fa-wifi"></i></h1>
         <p>MedChain an onChain network bridging healthcare gaps across Africa! by connecting health professionals, volunteers, and sponsors across Africa to deliver telemedicine to patients in need. We leverage technology to unite on-chain and off-chain care, ensuring healthcare reaches remote and war-torn areas. Together, we make healthcare accessible for all!</p>
           <div className={styles.imgDiv}>
           </div>
           <div className={styles.imgDiv2}>
           </div>
           <div className={styles.imgDiv3}>
           </div>
           <div className={styles.joinBtn}>
            <h2>Join the Network! <i className="fa fa-user-plus"></i></h2>
           </div>
      </div>
     </div>

     <div className={styles.featureContainer}>
          <h1>Features</h1>
          <div className={styles.featuresContainer}>
              <div className={styles.feature}>
                <h1>Health Data Privacy & Security</h1>
                <p>MedChain employs the blockchain to store medical records making it resistant against attacks and data loss ensuring the safety and privacy of your health data.</p>
                <i class="fa-solid fa-vault"></i>
              </div>
              <div className={styles.feature}>
              <h1>Easy Volunteer Mentoring</h1>
              <p>One-on-one virtual audio and visual interactions between doctors and volunteers boost medical awareness, improving coordination in addressing local healthcare issues and emergencies.</p>
              <i className="fa fa-school"></i>
              </div>
                <div className={styles.feature}>
                   <h1>Funds Disbursment Transparency/Tracking</h1>
                   <p>Sadly,the African contient has a corruption issue and often times funds sent out for charity hardly get to the intended people in need of such MedChain fixes this issue by utilizing the openess of transactions on the blockchain to foster sponsors confidence.  </p>
                  <i className="fa fa-money-bill"></i>
                </div>
                <div className={styles.feature}>
                 <h1>Language Translation</h1>
                 <p>By integrating Google Translate, MedChain enables users of different languages to easily access, navigate, and collaborate, enhancing the experience for patients, volunteers, doctors, and sponsors.</p>
                <i className="fa fa-language"></i>
                </div>
          </div>
      </div>

      
     <div className={styles.benefitContainer}>
          <h1>Benefits</h1>
          <div className={styles.benefitsContainer}>
              <div className={styles.benefit}>
                <h1>Cost Efficiency</h1>
                <p>MedChain's network of decentralized health professionals and volunteers reduces transport costs for personnel, allowing costs to be effectively utilized, alongside lower payment costs over the base network.</p>
                 <i class="fa-solid fa-cut"></i>
              </div>
              <div className={styles.benefit}>
              <h1>Reduced Risk</h1>
              <p>Through volunteers in high-risk regions, MedChain enables ease access to healthcare professionals, allowing effective collaboration without the need for risky travel by providers.</p>
              <i className="fa fa-user-shield"></i>
              </div>
                <div className={styles.benefit}>
                   <h1>Work load sharing</h1>
                   <p>MedChain facilitates consultations and screenings between patients and doctors, enabling care in conflict-prone areas while leveraging volunteers to reduce the workload on local clinics.</p>
                   <i className="fa fa-minimize"></i>
                </div>
                <div className={styles.benefit}>
                 <h1>Reduction of Language Barriers & Data Safety/Privacy </h1>
                 <p>Employing Google Translate to improve collaboration for multilingual users, enhancing the experience for patients, volunteers, doctors, and sponsors, while blockchain ensures health data privacy.</p>
                  <i className="fa fa-link"></i>
                </div>
          </div>
      </div>

      <div className={styles.goalContainer}>
        <h1>"The creation of an #onChain decentralized network of health professionals and volunteers scattered across Africa!"</h1>
        <h2>Our Goal</h2>
      </div>
    </div>
  );
}

export default index;