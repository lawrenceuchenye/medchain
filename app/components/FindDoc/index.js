import styles from "./index.module.css";
import Chat from "../Chat";
import { useState,useEffect,useRef } from "react";
import OpenAI from "openai";
import  useStore  from "../../store";


const index=()=>{
    const setIsRequestDoc=useStore((state)=>state.setIsRequestDoc);

    const [docs,setDoctors]=useState(["Neuorsurgeon","Cardiologist","Physiologist"])
    const [chat,setChat]=useState("");
    const [isRecommending,setIsRecommeding]=useState(false);

    const reply=async (res)=>{
        let _doctors="";
        docs.map((drObj)=>{
          console.log("io")
          _doctors=_doctors.concat(` a ${drObj}`);
        });
        console.log(_doctors);
        try{
        const openai = new OpenAI({
            apiKey:
              "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",
            dangerouslyAllowBrowser: true,
          });
    
          const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: `Your a friendly doctor recommender assistant and put your reply` 
            },
              {
                role: "user",
                content: `"translate ${res} to english then recommend between ${_doctors} give me an array ordered by who would be the most helpful to treat me must be only an array in response put the array in a single string`,
              },
            ],
          });
          console.log("done");
          console.log(completion.choices[0].message.content);
           return JSON.parse(completion.choices[0].message.content);
        } catch (err) {
            console.log(err);
          return err;
        }
    }
        
   

    return(
        <div className={styles.overlay} onClick={()=>setIsRequestDoc(false)}>
            <div className={styles.chatContainer} onClick={(e)=>e.stopPropagation()}>
                <textarea onChange={(e)=>setChat(e.target.value)} defaultValue={chat} placeholder="What is your medical problem?" className={styles.sContainer}></textarea>
                <button onClick={async ()=>{
                    setIsRecommeding(true);
                    const res=await reply(chat);
                    setDoctors(res);
                    setIsRecommeding(false);
                    setChat("")
                }} className={styles.findDrBtn} style={{ background:isRecommending && "var(--color-green)"}}> { isRecommending ? "Recommending" : "Find Dr."} <i className="fa fa-user-md"></i></button> 
                <div className={styles.drsBtnContainer}>
                {docs.map((drObj)=>{
                    return (
                        <button>{drObj}</button>
                    )})}
                    </div>     
            </div>
        </div>
    )
}

export default index;