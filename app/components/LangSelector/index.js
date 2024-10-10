import styles from "./index.module.css";
import useStore from "../../store";
import { useState } from "react";

const index=()=>{
    const isTranslating=useStore((state)=>state.isTranslating);
    const setLang=useStore((state)=>state.setLang);
    const [isExpand,setIsExpand]=useState(false);


    return(
        <div className={styles.langsContainer} style={{ bottom:isExpand && "80px"}}>
            <button  className={styles.mBtn} style={{ transform:isExpand && "rotate(180deg)"}} onClick={()=>setIsExpand(!isExpand)}><i className="fas fa-angle-double-up"></i></button>
            {!isTranslating && (<div>
                <button onClick={()=>{
                    if(!isTranslating){
                    setLang("Igbo")
                    }
                }}>Igbo</button>
                 <button onClick={()=>{
                    if(!isTranslating){
                    setLang("Yoruba")
                    }
                }}>Yoruba</button>
                 <button onClick={()=>{
                    if(!isTranslating){
                    setLang("Hausa")
                    }
                }}>Hausa</button>
                 <button onClick={()=>{
                    if(!isTranslating){
                    setLang("Xhosa")
                    }
                }}>Xhosa</button>
                 <button onClick={()=>{
                    if(!isTranslating){
                    setLang("Swahili")
                    }
                }}>Swahili</button>
                 <button onClick={()=>{
                    if(!isTranslating){
                    setLang("Bemba")
                    }
                }}>Bemba</button>
                 <button onClick={()=>{
                    if(!isTranslating){
                    setLang("English")
                    }
                }}>English</button>
            </div>)}
        </div>
    );
}

export default  index;