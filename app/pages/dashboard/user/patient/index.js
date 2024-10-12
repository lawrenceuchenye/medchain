import styles from "../../../../styles/PatientDashboard.module.css";
import DrConsultationCard from "../../../../components/DrConsultationCard";
import PrescriptionCard from "../../../../components/PrescriptionCard";
import Activity from "../../../../components/Activity";
import Record from "../../../../components/Record";
import useStore from "../../../../store";
import { useState,useEffect } from "react";
import { getName } from "@coinbase/onchainkit/identity";
import { base } from 'viem/chains';

const index = () => {
  const walletAddress = useStore((state) => state.walletAddress);
  const setIsTranslating=useStore((state)=> state.setIsTranslating);
  const setIsRequestDES=useStore((state)=>state.setIsRequestDES);

  const [baseName,setBaseName]=useState(null);
  const [address,setAddress]=useState("0x48Ea1279d1A299Dc1B29d54603ca52A7eC42259f");


const name =getName({ address, chain: base });

const getBASEName=async ()=>{
  await name.then((res)=>{
    setBaseName(res);
  });
}
useEffect(()=>{
  setAddress(walletAddress);
  if(!walletAddress){

    getBASEName();
  }
  console.log(walletAddress)
  setIsTranslating(false);
  
},[walletAddress]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.scheduleContainer}>
        <h1>Appointments</h1>
        <div className={styles.scheduleDivider}>
          <h3>Upcoming</h3>
          <hr />
        </div>
        <DrConsultationCard />
        <div className={styles.scheduleDivider}>
          <h3>Queue (3)</h3>
          <hr style={{ width: "80px" }} />
        </div>
        <div className={styles.queueContainer}>
          <DrConsultationCard />
          <DrConsultationCard />
          <DrConsultationCard />
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <div>
          <div className={styles.header}>
            <div style={{ boxShadow:"none",background:"transparent",width:"auto"}}>
            <h1>Hello { baseName ? `${baseName.length > 6 ? baseName.slice(0,6) : baseName}` : "David!" }</h1>
            <p style={{marginTop:"10px"}}>{ walletAddress && !baseName ? `${walletAddress.slice(0,8)}....${walletAddress.slice(37)}` : baseName ? `${baseName}`:"Loading..."}</p>
            </div>
            <div>
              <p>Medication Funds:0.02 ETH ~ 6,081.06 KES</p>
              <button className={styles.wthdrw}>Withdraw</button>
              <button
                className={styles.wthdrw}
                style={{ background: "var(--color-red)" }}
              >
                Earn
              </button>
            </div>
          </div>
        </div>
        <div className={styles.actionBtnContainer}>
          <div>
            <h4>
              Find a doctor <i className="fa fa-user-md"></i>
            </h4>
          </div>
          <div onClick={()=>setIsRequestDES(true)}>
            <h4>
              DE-stress with medMate <i className="fa fa-robot"></i>
            </h4>
          </div>
          <div>
            <h4>
              0 Messages <i class="fa-solid fa-message"></i>{" "}
            </h4>
          </div>
        </div>
        <div className={styles.utilsHeaderContainer}>
          <div className={styles.medWatchContainer}>
            <div className={styles.mwBanner}>
              <h2>2</h2>
              <h2>
                MedWatch <i class="fas fa-capsules"></i>
              </h2>
              <div>
                <i className="fa fa-plus"></i>
              </div>
            </div>
            <div className={styles.prescriptionContainer}>
              <PrescriptionCard />
              <PrescriptionCard />
              <PrescriptionCard />
              <PrescriptionCard />
            </div>
          </div>
          <div className={styles.chartC}>
            <Activity />
          </div>
        </div>
        <div className={styles.recordsContainer}>
          <h1>Medical Records</h1>
          <div className={styles.filesContainer}>
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
            <Record />
          </div>
          <div className={styles.addFileBtn}>
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
