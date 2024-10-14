import styles from "./index.module.css";
import Chat from "../Chat";
import { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import useStore from "../../store";
import { motion } from "framer-motion";

const index = () => {
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState("");
  const scrollContainer = useRef();
  const [scrollPos, setScrollPos] = useState(0);

  const lang = useStore((state) => state.lang);
  const setIsRequestDES = useStore((state) => state.setIsRequestDES);

  const reply = async (res) => {
    try {
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
            content: `Your a friendly de-anxiety and de-stress assistant and put your reply in ${lang}`,
          },
          {
            role: "user",
            content: `${res} make your response short`,
          },
        ],
      });
      return completion.choices[0].message.content;
    } catch (err) {
      return err;
    }
  };

  return (
    <motion.div
      className={styles.overlay}
      onClick={() => setIsRequestDES(false)}
    >
      <div
        className={styles.chatContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={styles.chatsContainer}
          ref={scrollContainer}
          id="chatsContainer"
        >
          {chats.map((chat) => {
            return <Chat content={chat.content} isLeft={chat.pos} />;
          })}
        </div>
        <input
          type="text"
          placeholder="What is on your mind?"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <div
          className={styles.btn}
          onClick={async () => {
            if (chat.length > 0) {
              setScrollPos(
                scrollContainer.current.scrollHeight + scrollPos + 200
              );
              chats.push({ content: chat, pos: true });

              const res = await reply(chat);
              setChat("");
              setScrollPos(
                scrollContainer.current.scrollHeight + scrollPos + 200
              );
              chats.push({ content: res, pos: false });
              scrollContainer.current.scrollTo(
                0,
                scrollContainer.current.scrollHeight + scrollPos
              );
            }
          }}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
