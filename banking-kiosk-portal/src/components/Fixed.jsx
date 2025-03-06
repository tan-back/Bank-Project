import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/Fixed.css"; // CSS for Fixed Deposit

const FixedDeposit = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");

  const handleReadAloud = (text) => {
    setTextToRead(text);
    const utterance = new SpeechSynthesisUtterance(text);

    // Language map for SpeechSynthesis
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

  // Sections with translation keys
  const sections = [
    { title: "fixed_create_header", steps: "fixed_create_steps" },
    { title: "fixed_manage_header", steps: "fixed_manage_steps" },
    { title: "fixed_close_header", steps: "fixed_close_steps" },
  ];

  return (
    <div>
      <Header />
      <div className="fixed-deposit-container">
        <h2>{t("fixed_account_header")}</h2>
        <div className="account-sections">
          {sections.map((section, index) => (
            <div className="account-box" key={index}>
              <div className="account-content">
                <h3>{t(section.title)}</h3>
                <ul>
                  {t(section.steps, { returnObjects: true }).map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="button-container">
                <button
                  className="read-aloud"
                  onClick={() =>
                    handleReadAloud(t(section.steps, { returnObjects: true }).join(". "))
                  }
                >
                  🔊 {t("read_aloud")}
                </button>
                <button className="stop" onClick={handleStop}>
                  ⏹ {t("stop")}
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

export default FixedDeposit;
