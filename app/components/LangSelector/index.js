import styles from "./index.module.css";
import useStore from "../../store";

const index=()=>{
    const isTranslating=useStore((state)=>state.isTranslating);
    const setLang=useStore((state)=>state.setLang);

    return(
        <div className={styles.langsContainer}>
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
                    setLang("English")
                    }
                }}>English</button>
            </div>)}
        </div>
    );
}

export default  index;