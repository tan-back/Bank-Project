import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import TextToSpeech from "../TextToSpeech";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/Rules.css";

const Rules = () => {
  const { t } = useTranslation(); // i18next translation hook
  const rulesData = t("rules.sections", { returnObjects: true }); // Fetch translated rules data

  const textToSpeechRefs = useRef(rulesData.map(() => React.createRef()));
  const scrollRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <div className="rules-container">
        <h1 className="title">{t("rules.title")}</h1>

        <div className="scroll-buttons">
          <button onClick={scrollLeft} className="scroll-btn">⬅</button>
          <button onClick={scrollRight} className="scroll-btn">➡</button>
        </div>

        <div className="rules-scroll" ref={scrollRef}>
          {rulesData.map((rule, index) => (
            <div key={index} className="rule-card">
              <h2>{rule.title}</h2>
              <div className="rule-text">
                <p>{rule.text}</p>
              </div>
              <div className="tts-buttons">
                <TextToSpeech ref={textToSpeechRefs.current[index]} text={rule.title + "." + rule.text} />
                <button onClick={() => textToSpeechRefs.current[index].current.speak()}>
                  🔊 {t("rules.readAloud")}
                </button>
                <button onClick={() => textToSpeechRefs.current[index].current.stop()}>
                  ⏹ {t("rules.stop")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rules;
