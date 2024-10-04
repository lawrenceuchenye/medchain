import styles from "@/styles/index.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import useStore from "@/store";

const index = () => {
  const [isMobile, setIsMobile] = useState([false]);

  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );
  useEffect(() => {
    if (window.innerWidth <= 750) {
      setIsMobile([true, window.innerWidth - 20]);
    } else {
      setIsMobile([false]);
    }
  }, []);

  return (
    <div className={styles.mainMainContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <h1>
            Healthcare Anywhere Anytime <i class="fa-solid fa-circle-nodes"></i>{" "}
          </h1>
          <p>
            MedChain is an on-chain network aimed at bridging healthcare gaps
            across Africa by connecting health professionals, volunteers, and
            sponsors delivering health care through telemedicine to patients in
            need, leveraging technology to ensure healthcare reaches remote and
            war-torn areas. Together, we make healthcare accessible for all!
          </p>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={styles.imgDiv}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={styles.imgDiv2}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={styles.imgDiv3}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className={styles.joinBtn}
            onClick={() => setIsOnBoardingStatus(true)}
          >
            <h2>
              Sign Up! <i class="fa-solid fa-rocket"></i>
            </h2>
          </motion.div>
        </div>
      </div>

      <div className={styles.featureContainer}>
        <h1>Features</h1>
        {!isMobile[0] ? (
          <div className={styles.featuresContainer}>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1>Health Data Privacy & Security</h1>
              <p>
                MedChain employs the blockchain to store medical records making
                it resistant against attacks and data loss ensuring the safety
                and privacy of your health data.
              </p>
              <i class="fa-solid fa-vault"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1>Easy Volunteer Mentoring</h1>
              <p>
                One-on-one virtual audio and visual interactions between doctors
                and volunteers boost medical awareness, improving coordination
                in addressing local healthcare issues and emergencies.
              </p>
              <i className="fa fa-school"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1>Funds Disbursment Transparency & Tracking</h1>
              <p>
                MedChain tackles corruption in Africa by leveraging blockchain's
                transparency to ensure that charity funds reach those in need,
                thereby building sponsor confidence.
              </p>
              <i className="fa fa-money-bill"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1>Language Translation</h1>
              <p>
                By integrating Google Translate, MedChain enables users of
                different languages to easily access, navigate, and collaborate,
                enhancing the experience for patients, volunteers, doctors, and
                sponsors.
              </p>
              <i className="fa fa-language"></i>
            </motion.div>
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".slider-arrow-r",
              prevEl: ".slider-arrow-l",
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            style={{ height: "450px", width: "100%" }}
          >
            <div className={styles.featuresContainer}>
              <SwiperSlide>
                <div className={styles.feature}>
                  <h1>Health Data Privacy & Security</h1>
                  <p>
                    MedChain employs the blockchain to store medical records
                    making it resistant against attacks and data loss ensuring
                    the safety and privacy of your health data.
                  </p>
                  <i class="fa-solid fa-vault"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.feature_2}>
                  <h1>Easy Volunteer Mentoring</h1>
                  <p>
                    One-on-one virtual audio and visual interactions between
                    doctors and volunteers boost medical awareness, improving
                    coordination in addressing local healthcare issues and
                    emergencies.
                  </p>
                  <i className="fa fa-school"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.feature_3}>
                  <h1>Funds Transparency & Tracking</h1>
                  <p>
                    MedChain tackles corruption in Africa by leveraging
                    blockchain's transparency to ensure that charity funds reach
                    those in need, thereby building sponsor confidence.
                  </p>
                  <i className="fa fa-money-bill"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.feature_4}>
                  <h1>Language Translation</h1>
                  <p>
                    By integrating Google Translate, MedChain enables users of
                    different languages to easily access, navigate, and
                    collaborate, enhancing the experience for patients,
                    volunteers, doctors, and sponsors.
                  </p>
                  <i className="fa fa-language"></i>
                </div>
              </SwiperSlide>
            </div>

            <div className="slider-controler">
              <motion.div
                whileTap={{ scale: 1.2 }}
                className="leftNav slider-arrow-l"
              >
                <i class="fa-solid fa-square-up-right"></i>
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                className="rightNav slider-arrow-r"
              >
                <i class="fa-solid fa-square-up-right"></i>
              </motion.div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        )}
      </div>

      <div className={styles.benefitContainer}>
        <h1>Benefits</h1>
        {!isMobile[0] ? (
          <div className={styles.benefitsContainer}>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.benefit}>
              <h1>Cost Efficiency</h1>
              <p>
                MedChain's network of decentralized health professionals and
                volunteers reduces transport costs for personnel, allowing costs
                to be effectively utilized, alongside lower payment fees over
                the BASE network.
              </p>
              <i class="fa-solid fa-cut"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.benefit}>
              <h1>Reduced Risk</h1>
              <p>
                Through volunteers in high-risk regions, MedChain enables ease
                access to healthcare professionals, allowing effective
                collaboration without the need for risky travel by providers.
              </p>
              <i className="fa fa-user-shield"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.benefit}>
              <h1>Work Load Sharing</h1>
              <p>
                MedChain facilitates consultations and screenings between
                patients and doctors, enabling care in conflict-prone areas
                while leveraging volunteers to reduce the workload on local
                clinics.
              </p>
              <i className="fa fa-minimize"></i>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, x: "-19px" }}
              className={styles.benefit}
            >
              <h1>Reduction of Language Barriers & Data Safety/Privacy </h1>
              <p>
                Employing Google Translate to improve collaboration for
                multilingual users, enhancing the experience for patients,
                volunteers, doctors, and sponsors, while blockchain ensures
                health data privacy.
              </p>
              <i className="fa fa-link"></i>
            </motion.div>
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".slider-arrow-r",
              prevEl: ".slider-arrow-l",
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            style={{
              height: "500px",
              width: "100%",
            }}
          >
            <div className={styles.benefitsContainer}>
              <SwiperSlide>
                <div className={styles.benefit}>
                  <h1>Cost Efficiency</h1>
                  <p>
                    MedChain's network of decentralized health professionals and
                    volunteers reduces transport costs for personnel, allowing
                    costs to be effectively utilized, alongside lower payment
                    fees over the BASE network.
                  </p>
                  <i class="fa-solid fa-cut"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.benefit}>
                  <h1>Reduced Risk</h1>
                  <p>
                    Through volunteers in high-risk regions, MedChain enables
                    ease access to healthcare professionals, allowing effective
                    collaboration without the need for risky travel by
                    providers.
                  </p>
                  <i className="fa fa-user-shield"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.benefit}>
                  <h1>Work Load Sharing</h1>
                  <p>
                    MedChain facilitates consultations and screenings between
                    patients and doctors, enabling care in conflict-prone areas
                    while leveraging volunteers to reduce the workload on local
                    clinics.
                  </p>
                  <i className="fa fa-minimize"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.benefit}>
                  <h1>Reduction of Language Barriers & Data Safety/Privacy </h1>
                  <p>
                    Employing Google Translate to improve collaboration for
                    multilingual users, enhancing the experience for patients,
                    volunteers, doctors, and sponsors, while blockchain ensures
                    health data privacy.
                  </p>
                  <i className="fa fa-link"></i>
                </div>
              </SwiperSlide>
            </div>

            <div className="slider-controler">
              <motion.div
                whileTap={{ scale: 1.2 }}
                className="leftNav slider-arrow-l"
              >
                <i class="fa-solid fa-square-up-right"></i>
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                className="rightNav slider-arrow-r"
              >
                <i class="fa-solid fa-square-up-right"></i>
              </motion.div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        )}
      </div>

      <div className={styles.goalContainer}>
        <h1>
          "The creation of an #onChain decentralized network of health
          professionals and volunteers scattered across Africa!"
        </h1>
        <h2>Our Goal</h2>
      </div>
    </div>
  );
};

export default index;
