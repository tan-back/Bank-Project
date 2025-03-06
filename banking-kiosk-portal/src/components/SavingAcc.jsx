import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/SavingAcc.css";

const SavingAccount = () => {
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

  const sections = [
    { title: "saving_create_header", steps: "saving_create_steps" },
    { title: "saving_manage_header", steps: "saving_manage_steps" },
    { title: "saving_close_header", steps: "saving_close_steps" },
  ];

  return (
    <div>
      <Header />
      <div className="saving-account-container">
        <h2 className="center-heading">{t("saving_account_header")}</h2>
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

export default SavingAccount;
