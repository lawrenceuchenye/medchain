import styles from "./index.module.css";
import Chat from "../Chat";
import { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import useStore from "../../store";
import { toast } from "react-toastify";

const index = () => {
  const setIsRequestDoc = useStore((state) => state.setIsRequestDoc);

  const [docs, setDoctors] = useState([
    "Neuorsurgeon",
    "Cardiologist",
    "Physiologist",
  ]);
  const [chat, setChat] = useState("");
  const [getDoctors, setIsGetDoctors] = useState(false);
  const [doctor, setDoctor] = useState(null);

  const [isRecommending, setIsRecommeding] = useState(false);

  const reply = async (res) => {
    let _doctors = "";
    docs.map((drObj) => {
      console.log("io");
      _doctors = _doctors.concat(` a ${drObj}`);
    });
    console.log(_doctors);
    try {
      const openai = new OpenAI({
        apiKey: "",
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Your a friendly doctor recommender assistant and put your reply`,
          },
          {
            role: "user",
            content: `"translate ${res} to english then recommend between ${_doctors} give me an array ordered by who would be the most helpful to treat me must be only an array in response put the array in a single string`,
          },
        ],
      });
      return JSON.parse(completion.choices[0].message.content);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <div className={styles.overlay} onClick={() => setIsRequestDoc(false)}>
      <div
        className={styles.chatContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <textarea
          onChange={(e) => setChat(e.target.value)}
          defaultValue={chat}
          placeholder="What is your medical problem?"
          className={styles.sContainer}
        ></textarea>
        <button
          onClick={async () => {
            if (chat.length > 5) {
              setIsRecommeding(true);
              const res = await reply(chat);
              setDoctors(res);
              setIsRecommeding(false);
              setChat("");
            } else {
              toast.warn("description to little please write more", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              });
            }
          }}
          className={styles.findDrBtn}
          style={{ background: isRecommending && "var(--color-green)" }}
        >
          {isRecommending ? "Recommending" : "Find Dr."}{" "}
          <i className="fa fa-user-md"></i>
        </button>
        <div className={styles.drsBtnContainer}>
          {docs.map((drObj) => {
            return (
              <button onClick={() => setIsGetDoctors(true)}>{drObj}</button>
            );
          })}
        </div>
      </div>
      {getDoctors && (
        <div
          className={styles.doctorsContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>
            Doctors Online{" "}
            <i
              className="fa fa-circle-xmark"
              onClick={() => setIsGetDoctors(false)}
            ></i>
          </h1>
          <div className={styles.drsContainer}>
            <div className={styles.mainContainer}>
              <div
                className={styles.drProfileContainer}
                onClick={() => setIsGetDoctors(false)}
              >
                <div></div>
                <div
                  style={{
                    width: "80%",
                    borderRadius: "0px",
                    textAlign: "left",
                    background: "var(--color-white)",
                    marginBottom: "8px",
                  }}
                >
                  <h4>Dr. Ken. Kurd..</h4>
                  <p>Neurosurgen..</p>
                  <p>
                    <b>ID:</b> 2ED...0X7E
                  </p>
                </div>
              </div>
              <div className={styles.cardType}>
                <p>Consult</p>
              </div>
            </div>

            <div className={styles.mainContainer}>
              <div
                className={styles.drProfileContainer}
                onClick={() => setIsGetDoctors(false)}
              >
                <div></div>
                <div
                  style={{
                    width: "80%",
                    borderRadius: "0px",
                    textAlign: "left",
                    background: "var(--color-white)",
                    marginBottom: "8px",
                  }}
                >
                  <h4>Dr. Ken. Kurd..</h4>
                  <p>Neurosurgen..</p>
                </div>
              </div>
              <div
                onClick={() =>
                  setDoctor({
                    id: "2e892r8",
                    name: "Ken Kurdy",
                    specialty: "Neurosurgeon",
                  })
                }
                className={styles.cardType}
              >
                <p>Consult</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {doctor && (
        <div
          className={styles.requestConsultationContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Consultation Request</h3>
          <textarea placeholder="Description"></textarea>
          <div></div>
          <button>SEND</button>
        </div>
      )}
    </div>
  );
};

export default index;
