import styles from "@/styles/index.module.css";
import { useState, useEffect, useRef } from "react";
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
  const setIsTranslating = useStore((state) => state.setIsTranslating);
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );
  const [translatedWords, setTranslatedWords] = useState({
    headText: "Health care Anywhere Anytime",
    writeUpText: `            MedChain is an on-chain network aimed at bridging healthcare gaps
            across Africa by connecting health professionals, volunteers, and
            sponsors delivering health care through telemedicine to patients in
            need, leveraging technology to ensure healthcare reaches remote and
            war-torn areas. Together, we make healthcare accessible for all!`,
    signUpText: "Sign Up!",
    featuresText: "in product",
    card1Title: "Health Data Privacy & Security",
    card1Body: ` MedChain employs the blockchain to store medical records making
                it resistant against attacks and data loss ensuring the safety
                and privacy of your health data.`,
    card2Title: "Easy Volunteer Mentoring",
    card2Body: `One-on-one virtual audio and visual interactions between doctors
                and volunteers boost medical awareness, improving coordination
                in addressing local healthcare issues and emergencies.`,
    card3Title: "Funds Disbursment Transparency & Tracking",
    card3Body: `  MedChain tackles corruption in Africa by leveraging blockchain's
                transparency to ensure that charity funds reach those in need,
                thereby building sponsor confidence.`,
    card4Title: "Language Translation",
    card4Body: ` By integrating GPT-4o, MedChain enables users of
                    different languages to easily access, navigate, and
                    collaborate, enhancing the experience for patients,
                    volunteers, doctors, and sponsors.`,
    benefitsText: "Benefits",
    benefitCard1Title: "Cost Efficiency",
    benefitCard1Body: `MedChain's network of decentralized health professionals and
                    volunteers reduces transport costs for personnel, allowing
                    costs to be effectively utilized, alongside lower payment
                    fees over the BASE network.`,
    benefitCard2Title: "Reduced Risk",
    benefitCard2Body: `Through volunteers in high-risk regions, MedChain enables ease
                access to healthcare professionals, allowing effective
                collaboration without the need for risky travel by providers.`,
    benefitCard3Title: `Work Load Sharing`,
    benefitCard3Body: `MedChain facilitates consultations and screenings between
                patients and doctors, enabling care in conflict-prone areas
                while leveraging volunteers to reduce the workload on local
                clinics.`,
    benefitCard4Title: "Reduction of Language Barriers & Data Safety/Privacy",
    benefitCard4Body: `Employing GPT-4o to improve collaboration for
                multilingual users, enhancing the experience for patients,
                volunteers, doctors, and sponsors, while blockchain ensures
                health data privacy.`,
    motto: `The creation of an #onChain decentralized network of health
          professionals and volunteers scattered across Africa!`,
    goal: "Our Goal",
  });
  const [prevLang, setPrevLang] = useState("English");

  const translate = useStore((state) => state.translate);
  const lang = useStore((state) => state.lang);
  const [isTranslated, setIsTranslated] = useState(false);
  const headTextRef = useRef(null);
  const writeUpTextRef = useRef(null);
  const signUpTextRef = useRef(null);
  const featuresTextRef = useRef(null);
  const card1TitleRef = useRef(null);
  const card1BodyRef = useRef(null);
  const card2TitleRef = useRef(null);
  const card2BodyRef = useRef(null);
  const card3TitleRef = useRef(null);
  const card3BodyRef = useRef(null);
  const card4TitleRef = useRef(null);
  const card4BodyRef = useRef(null);
  const benefitsTitleRef = useRef(null);
  const benefitCard1TitleRef = useRef(null);
  const benefitCard1BodyRef = useRef(null);
  const benefitCard2TitleRef = useRef(null);
  const benefitCard2BodyRef = useRef(null);
  const benefitCard3TitleRef = useRef(null);
  const benefitCard3BodyRef = useRef(null);
  const benefitCard4TitleRef = useRef(null);
  const benefitCard4BodyRef = useRef(null);
  const mottoRef = useRef(null);
  const goalRef = useRef(null);

  const htmlChange = async (tr) => {
    try {
      headTextRef.current.innerHTML = `${tr.headText} <i class="fa-solid fa-circle-nodes"></i>`;
      writeUpTextRef.current.innerHTML = `${tr.writeUpText}`;
      signUpTextRef.current.innerHTML = `${tr.signUpText} <i class="fa-solid fa-rocket"></i>`;
      featuresTextRef.current.innerHTML = `${tr.featuresText}`;
      card1TitleRef.current.innerHTML = `${tr.card1Title}`;
      card1BodyRef.current.innerHTML = `${tr.card1Body}`;
      card2TitleRef.current.innerHTML = `${tr.card2Title}`;
      card2BodyRef.current.innerHTML = `${tr.card2Body}`;
      card3TitleRef.current.innerHTML = `${tr.card3Title}`;
      card3BodyRef.current.innerHTML = `${tr.card3Body}`;
      card4TitleRef.current.innerHTML = `${tr.card4Title}`;
      card4BodyRef.current.innerHTML = `${tr.card4Body}`;
      benefitsTitleRef.current.innerHTML = `${tr.benefitsText}`;
      benefitCard1TitleRef.current.innerHTML = `${tr.benefitCard1Title}`;
      benefitCard1BodyRef.current.innerHTML = `${tr.benefitCard1Body}`;
      benefitCard2TitleRef.current.innerHTML = `${tr.benefitCard2Title}`;
      benefitCard2BodyRef.current.innerHTML = `${tr.benefitCard2Body}`;
      benefitCard3TitleRef.current.innerHTML = `${tr.benefitCard3Title}`;
      benefitCard3BodyRef.current.innerHTML = `${tr.benefitCard3Body}`;
      benefitCard4TitleRef.current.innerHTML = `${tr.benefitCard4Title}`;
      benefitCard4BodyRef.current.innerHTML = `${tr.benefitCard4Body}`;
      mottoRef.current.innerHTML = `"${tr.motto}"`;
      goalRef.current.innerHTML = `${tr.goal}`;
    } catch (err) {
      alert("ERRR");
    }
  };

  const Translate = async () => {
    setIsTranslating(true);
    let tr = await translate(JSON.stringify(translatedWords), lang);
    if (tr.headText) {
      await htmlChange(tr);
    }
    setPrevLang(lang);
    setIsTranslating(false);
  };

  useEffect(() => {
    console.log(lang);
    if (lang != prevLang) {
      Translate();
    }
  }, [lang]);

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
          <h1 ref={headTextRef}>
            Healthcare Anywhere Anytime <i class="fa-solid fa-circle-nodes"></i>{" "}
          </h1>
          <p ref={writeUpTextRef}>
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
            <h2 ref={signUpTextRef}>
              Sign Up! <i class="fa-solid fa-rocket"></i>
            </h2>
          </motion.div>
        </div>
      </div>

      <div className={styles.featureContainer}>
        <h1 ref={featuresTextRef}>Features</h1>
        {!isMobile[0] ? (
          <div className={styles.featuresContainer}>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1 ref={card1TitleRef}>Health Data Privacy & Security</h1>
              <p ref={card1BodyRef}>
                MedChain employs the blockchain to store medical records making
                it resistant against attacks and data loss ensuring the safety
                and privacy of your health data.
              </p>
              <i class="fa-solid fa-vault"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1 ref={card2TitleRef}>Easy Volunteer Mentoring</h1>
              <p ref={card2BodyRef}>
                One-on-one virtual audio and visual interactions between doctors
                and volunteers boost medical awareness, improving coordination
                in addressing local healthcare issues and emergencies.
              </p>
              <i className="fa fa-school"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1 ref={card3TitleRef}>
                Funds Disbursment Transparency & Tracking
              </h1>
              <p ref={card3BodyRef}>
                MedChain tackles corruption in Africa by leveraging blockchain's
                transparency to ensure that charity funds reach those in need,
                thereby building sponsor confidence.
              </p>
              <i className="fa fa-money-bill"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.feature}>
              <h1 ref={card4TitleRef}>Language Translation</h1>
              <p ref={card4BodyRef}>
                By integrating GPT-4o, MedChain enables users of different
                languages to easily access, navigate, and collaborate, enhancing
                the experience for patients, volunteers, doctors, and sponsors.
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
                  <h1 ref={card1TitleRef}>Health Data Privacy & Security</h1>
                  <p ref={card1BodyRef}>
                    MedChain employs the blockchain to store medical records
                    making it resistant against attacks and data loss ensuring
                    the safety and privacy of your health data.
                  </p>
                  <i class="fa-solid fa-vault"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.feature_2}>
                  <h1 ref={card2TitleRef}>Easy Volunteer Mentoring</h1>
                  <p ref={card2BodyRef}>
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
                  <h1 ref={card3TitleRef}>Funds Transparency & Tracking</h1>
                  <p ref={card3BodyRef}>
                    MedChain tackles corruption in Africa by leveraging
                    blockchain's transparency to ensure that charity funds reach
                    those in need, thereby building sponsor confidence.
                  </p>
                  <i className="fa fa-money-bill"></i>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.feature_4}>
                  <h1 ref={card4TitleRef}>Language Translation</h1>
                  <p ref={card4BodyRef}>
                    By integrating GPT-4o, MedChain enables users of different
                    languages to easily access, navigate, and collaborate,
                    enhancing the experience for patients, volunteers, doctors,
                    and sponsors.
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
        <h1 ref={benefitsTitleRef}>Benefits</h1>
        {!isMobile[0] ? (
          <div className={styles.benefitsContainer}>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.benefit}>
              <h1 ref={benefitCard1TitleRef}>Cost Efficiency</h1>
              <p ref={benefitCard1BodyRef}>
                MedChain's network of decentralized health professionals and
                volunteers reduces transport costs for personnel, allowing costs
                to be effectively utilized, alongside lower payment fees over
                the BASE network.
              </p>
              <i class="fa-solid fa-cut"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.benefit}>
              <h1 ref={benefitCard2TitleRef}>Reduced Risk</h1>
              <p ref={benefitCard2BodyRef}>
                Through volunteers in high-risk regions, MedChain enables ease
                access to healthcare professionals, allowing effective
                collaboration without the need for risky travel by providers.
              </p>
              <i className="fa fa-user-shield"></i>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.benefit}>
              <h1 ref={benefitCard3TitleRef}>Work Load Sharing</h1>
              <p ref={benefitCard3BodyRef}>
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
              <h1 ref={benefitCard4TitleRef}>
                Reduction of Language Barriers & Data Safety/Privacy{" "}
              </h1>
              <p ref={benefitCard4BodyRef}>
                Employing GPT-4o to improve collaboration for multilingual
                users, enhancing the experience for patients, volunteers,
                doctors, and sponsors, while blockchain ensures health data
                privacy.
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
                  <h1 ref={benefitCard1TitleRef}>Cost Efficiency</h1>
                  <p ref={benefitCard1BodyRef}>
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
                  <h1 ref={benefitCard2TitleRef}>Reduced Risk</h1>
                  <p ref={benefitCard2BodyRef}>
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
                  <h1 ref={benefitCard3TitleRef}>Work Load Sharing</h1>
                  <p ref={benefitCard3BodyRef}>
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
                  <h1 ref={benefitCard4TitleRef}>
                    Reduction of Language Barriers & Data Safety/Privacy{" "}
                  </h1>
                  <p ref={benefitCard4BodyRef}>
                    Employing GPT-4o to improve collaboration for multilingual
                    users, enhancing the experience for patients, volunteers,
                    doctors, and sponsors, while blockchain ensures health data
                    privacy.
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
        <h1 ref={mottoRef}>
          "The creation of an #onChain decentralized network of health
          professionals and volunteers scattered across Africa!"
        </h1>
        <h2 ref={goalRef}>Our Goal</h2>
      </div>
    </div>
  );
};

export default index;
