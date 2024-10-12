import styles from "./index.module.css";
import Chat from "../Chat";
import { useState,useEffect } from "react";


const index=()=>{

    const [chats,setChats]=useState([]);
    const [chat,setChat]=useState("");
   

    return(
        <div className={styles.overlay}>
            <div className={styles.chatContainer}>
                <div className={styles.chatsContainer}>
                    {chats.map((chat)=>{
                        return  <Chat content={chat.content} isLeft={chat.pos} />
                    })}
                </div>
                <input type="text" placeholder="What questions do you have?" value={chat} onChange={(e)=>setChat(e.target.value)} />
                <div className={styles.btn} onClick={()=>{
                    if(chat.length > 0){
                        chats.push({ content:chat,pos:true});
                        setChat("");
                    }    
                }}>
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default index;