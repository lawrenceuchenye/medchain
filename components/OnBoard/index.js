import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ConnectWallet from "@/components/ConnectWallet";

const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );

  const [userData, setUserData] = useState({ type: null });
  const [isNextSectionDocOnBoardActive, setIsNextSectionDocOnBoardActive] =
    useState(false);
  const [isNextSectionPatOnBoardActive, setIsNextSectionPatOnBoardActive] =
    useState(false);

  const [isOnBoardMe, setIsOnBoard] = useState(false);

  return (
    <div
      className={styles.overlay}
      onClick={() => setIsOnBoardingStatus(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.onBoardingOptions}
        initial={{ opacity: 0, y: "200px" }}
        animate={{
          opacity: 1,
          y: "0",
          transition: { type: "spring", delay: 1 },
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 1.5 },
          }}
        >
          Welcome! <span>#onChain</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 1.8 },
          }}
        >
          Pick a catgory to get started
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 2.1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
          onClick={() => setUserData({ type: "patient" })}
        >
          <h2>Patient</h2>
          <i className="fa fa-head-side-virus"></i>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 2.4 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
          onClick={() => setUserData({ type: "volunteer" })}
        >
          <h2>Volunteer</h2>
          <i className="fa fa-hand-holding-heart"></i>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 2.7 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
          onClick={() => setUserData({ type: "doctor" })}
        >
          <h2>Doctor</h2>
          <i className="fas fa-user-md"></i>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 3.1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={styles.category}
          onClick={() => setUserData({ type: "sponsor" })}
        >
          <h2>Sponsor</h2>
          <i className="fa fa-hand-holding-dollar"></i>
        </motion.div>
      </motion.div>

      {userData.type === "patient" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className={styles.patientOnBoardingContainer}
        >
          <div className={styles.patientInfoContainer}>
            <h1>Almost there...</h1>
            <p>Please fill this form. - 1/2</p>
            {!isOnBoardMe && !isNextSectionPatOnBoardActive && (
              <motion.div
                whileTap={{ scale: 1.2 }}
                className={styles.cancelBtn}
                onClick={() => setUserData({ type: null })}
              >
                <i className="fa fa-x"></i>
              </motion.div>
            )}
            <div className={styles.patientInfo}>
              <div className={styles.patientInfoHeadInputContainer}>
                <div>
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
              </div>
              <div style={{ margin: "20px 0" }}>
                <label>Address</label>
                <input type="text" placeholder="*Optional" />
              </div>
              <div
                className={styles.patientInfoHeadInputContainer}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <label>Nationality</label>
                  <input type="text" />
                </div>
                <div>
                  <label className={styles.thisLabel}>Gender</label>
                  <select>
                    <option value="male"></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={styles.thisLabel}>Profile Picture</label>
                <input type="file" />
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsNextSectionPatOnBoardActive(true)}
          >
            <h2>
              Continue{" "}
              <i
                className="fa fa-arrow-right"
                style={{ marginLeft: "10px" }}
              ></i>
            </h2>
          </motion.button>
        </motion.div>
      )}

      {userData.type === "volunteer" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className={styles.patientOnBoardingContainer}
        >
          <div className={styles.patientInfoContainer}>
            <h1>Almost there...</h1>
            <p>Please fill this form.</p>
            {!isOnBoardMe && (
              <motion.div
                whileTap={{ scale: 1.2 }}
                className={styles.cancelBtn}
                onClick={() => setUserData({ type: null })}
              >
                <i className="fa fa-x"></i>
              </motion.div>
            )}
            <div className={styles.patientInfo}>
              <div className={styles.patientInfoHeadInputContainer}>
                <div>
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
              </div>
              <div style={{ margin: "20px 0" }}>
                <label>Address</label>
                <input type="text" placeholder="*Optional" />
              </div>
              <div
                className={styles.patientInfoHeadInputContainer}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <label>Nationality</label>
                  <input type="text" />
                </div>
                <div>
                  <label className={styles.thisLabel}>E-mail</label>
                  <input type="email" />
                </div>
              </div>
              <div>
                <label className={styles.thisLabel}>Profile Picture</label>
                <input type="file" />
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsOnBoard(!isOnBoardMe)}
          >
            <h2>OnBoard</h2>
          </motion.button>
        </motion.div>
      )}

      {userData.type === "sponsor" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className={styles.patientOnBoardingContainer}
        >
          <div className={styles.patientInfoContainer}>
            <h1>Almost there...</h1>
            <p>Please fill this form.</p>
            {!isOnBoardMe && (
              <motion.div
                whileTap={{ scale: 1.2 }}
                className={styles.cancelBtn}
                onClick={() => setUserData({ type: null })}
              >
                <i className="fa fa-x"></i>
              </motion.div>
            )}
            <div className={styles.patientInfo}>
              <div className={styles.patientInfoHeadInputContainer}>
                <div>
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
              </div>
              <div style={{ margin: "20px 0" }}>
                <label>Organizational Representation</label>
                <input type="text" placeholder="*Optional" />
              </div>
              <div
                className={styles.patientInfoHeadInputContainer}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <label>Nationality</label>
                  <input type="text" />
                </div>
                <div>
                  <label className={styles.thisLabel}>E-mail</label>
                  <input type="email" />
                </div>
              </div>
              <div>
                <label className={styles.thisLabel}>Profile Picture</label>
                <input type="file" />
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsOnBoard(!isOnBoardMe)}
          >
            <h2>OnBoard</h2>
          </motion.button>
        </motion.div>
      )}

      {isNextSectionPatOnBoardActive && (
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 0.3 },
          }}
          className={styles.NextOnBoardContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>Health Information</h1>
          <p>Please fill this form - 2/2.</p>

          <div className={styles.mainFormContainer}>
            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
              }}
            >
              <label>Medical Condition</label>
              <input type="text" />
            </div>

            <div
              style={{
                display: window.innerWidth > 750 ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                padding: "0",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Medical Condition</label>
                <input type="text" placeholder="*Optional" />
              </div>

              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Allergy</label>
                <input type="text" placeholder="*Optional" />
              </div>
            </div>
            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
              }}
            >
              <label>Emergency Contact</label>
              <input type="number" />
            </div>

            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
                marginRight: window.innerWidth > 750 && "10px",
              }}
            >
              <label>Emergency Contact</label>
              <input type="number" placeholder="*Optional" />
            </div>
            <div
              style={{
                display: window.innerWidth > 750 ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                padding: "0",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Hospital Email</label>
                <input type="email" placeholder="*Optional" />
              </div>

              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Hospital Contact</label>
                <input
                  type="text"
                  placeholder="*(Optional)Number/Website link"
                />
              </div>
            </div>
            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
              }}
            >
              <label>Additional Information</label>
              <textarea
                style={{
                  width: window.innerWidth < 750 ? "94%" : "93%",
                  height: "120px",
                  padding: "10px 8px",
                  border: "none",
                  background: "var(--color-gray)",
                  fontFamily: "Poppins",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              ></textarea>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsOnBoard(true)}
            style={{ left: "0", top: "6px" }}
          >
            <h2>onBoard</h2>
          </motion.button>

          {isNextSectionPatOnBoardActive && !isOnBoardMe && (
            <motion.button
              whileTap={{ scale: 1.2 }}
              className={styles.cancelBtn}
              style={{
                border: "none",
                top: window.innerWidth > 750 ? "5px" : "65px",
              }}
              onClick={() => setIsNextSectionPatOnBoardActive(false)}
            >
              <i className="fa fa-x"></i>
            </motion.button>
          )}
        </motion.div>
      )}

      {userData.type === "doctor" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className={styles.patientOnBoardingContainer}
        >
          <div className={styles.patientInfoContainer}>
            <h1>Hi Dr.</h1>
            <p>Please fill this form - 1/2.</p>
            {!isOnBoardMe && !isNextSectionDocOnBoardActive && (
              <motion.div
                whileTap={{ scale: 1.2 }}
                className={styles.cancelBtn}
                onClick={() => setUserData({ type: null })}
              >
                <i className="fa fa-x"></i>
              </motion.div>
            )}
            <div className={styles.patientInfo}>
              <div className={styles.patientInfoHeadInputContainer}>
                <div>
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
              </div>
              <div
                className={styles.patientInfoHeadInputContainer}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <label>Address</label>
                  <input type="text" placeholder="*Optional" />
                </div>
                <div>
                  <label>E-mail</label>
                  <input type="email" placeholder="*Optional" />
                </div>
              </div>
              <div
                className={styles.patientInfoHeadInputContainer}
                style={{ marginTop: "20px" }}
              >
                <div
                  style={{
                    marginRight: window.innerWidth > 750 && "20px",
                    maxWidth: window.innerWidth < 750 ? "100%" : "240px",
                  }}
                >
                  <label className={styles.thisLabel}>Nationality</label>
                  <input type="email" placeholder="" />
                </div>
                <div
                  style={{
                    marginLeft: window.innerWidth > 750 && "20px",
                    maxWidth: window.innerWidth < 750 ? "100%" : "240px",
                  }}
                >
                  <label className={styles.thisLabel}>Profile Picture</label>
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsNextSectionDocOnBoardActive(true)}
          >
            <h2>
              Continue
              <i
                className="fa fa-arrow-right"
                style={{ marginLeft: "10px" }}
              ></i>
            </h2>
          </motion.button>
        </motion.div>
      )}

      {isNextSectionDocOnBoardActive && (
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 0.3 },
          }}
          className={styles.NextOnBoardContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>Qualification & License</h1>
          <p>Please fill this form - 2/2.</p>
          <p style={{ opacity: "0.3" }}>
            *Don't worry dr. we lose access as soon as your verified
          </p>

          <div className={styles.mainFormContainer}>
            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
              }}
            >
              <label>Medical School Attended</label>
              <input type="text" />
            </div>

            <div
              style={{
                display: window.innerWidth > 750 ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                padding: "0",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Year of Graduation</label>
                <input type="date" placeholder="" />
              </div>

              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Department/Major</label>
                <input type="text" />
              </div>
            </div>
            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
              }}
            >
              <label>Medical School Email</label>
              <input type="email" />
            </div>

            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
                marginRight: window.innerWidth > 750 && "10px",
              }}
            >
              <label>Licensure</label>
              <input type="text" placeholder="" />
            </div>
            <div
              style={{
                display: window.innerWidth > 750 ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                padding: "0",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Year of Expiration</label>
                <input type="date" placeholder="" />
              </div>

              <div
                style={{
                  width: window.innerWidth > 750 ? "100%" : "95%",
                }}
              >
                <label>Specialty</label>
                <input type="text" />
              </div>
            </div>
            <div
              style={{
                width: window.innerWidth > 750 ? "100%" : "95%",
              }}
            >
              <label>Licensure Email</label>
              <input type="email" />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className={styles.onBoardBtn}
            onClick={() => setIsOnBoard(true)}
            style={{ left: "0", top: "6px" }}
          >
            <h2>onBoard</h2>
          </motion.button>

          {isNextSectionDocOnBoardActive && !isOnBoardMe && (
            <motion.button
              whileTap={{ scale: 1.2 }}
              className={styles.cancelBtn}
              style={{
                border: "none",
                top: window.innerWidth > 750 ? "5px" : "65px",
              }}
              onClick={() => setIsNextSectionDocOnBoardActive(false)}
            >
              <i className="fa fa-x"></i>
            </motion.button>
          )}
        </motion.div>
      )}

      {isOnBoardMe && (
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: { type: "spring", delay: 0.3 },
          }}
          className={styles.onBoardContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            whileTap={{ scale: 1.2 }}
            className={styles.cancelBtn}
            onClick={() => setIsOnBoard(false)}
          >
            <i className="fa fa-x"></i>
          </motion.div>

          <div>
            <ConnectWallet />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default index;
