import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/Bill.css"; // Bill-specific styles
import TextToSpeech from "../TextToSpeech";

const Bill = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");

  const handleReadAloud = (text) => {
    setTextToRead(text);
    const utterance = new SpeechSynthesisUtterance(text);

    // Language mapping for speech synthesis
    const languageMap = {
      en: "en-US",
      hi: "hi-IN",
      mr: "mr-IN",
    };

    utterance.lang = languageMap[i18n.language] || "en-US";
    speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    setTextToRead("");
    speechSynthesis.cancel();
  };

  const sections = [
    { title: "bill_eligibility_title", steps: "bill_eligibility_steps" },
    { title: "bill_charges_title", steps: "bill_charges_steps" },
    { title: "bill_types_title", steps: "bill_types_steps" },
  ];

  return (
    <div>
      <Header />
      <div className="bill-container">
        <h2>{t("bill_services_header")}</h2>

        <div className="bill-info-container">
          {sections.map((section, index) => (
            <div className="bill-box" key={index}>
              <div className="bill-content">
                <h3>{t(section.title)}</h3>
                <ul>
                  {t(section.steps, { returnObjects: true }).map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="button-group">
                <button
                  className="read-aloud-btn"
                  onClick={() =>
                    handleReadAloud(t(section.steps, { returnObjects: true }).join(". "))
                  }
                >
                  🔊 {t("read_aloud")}
                </button>
                <button className="stop-btn" onClick={handleStop}>
                  ⏹ {t("stop")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TextToSpeech text={textToRead} stop={handleStop} />
      <Footer />
    </div>
  );
};

export default Bill;
