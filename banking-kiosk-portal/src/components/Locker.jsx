import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../style/Locker.css";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";

const Locker = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Function to handle text-to-speech
  const handleReadAloud = (titleKey, stepsKey) => {
    const title = t(titleKey);
    const steps = t(stepsKey, { returnObjects: true });

    // Ensure steps is an array
    const stepsArray = Array.isArray(steps) ? steps : [steps];

    // Combine title and steps for speech
    const textToRead = [title, ...stepsArray].join(". ");

    // Create speech synthesis object
    const utterance = new SpeechSynthesisUtterance(textToRead);

    // Set language for speech
    const languageMap = {
      en: "en-US",
      hi: "hi-IN",
      mr: "mr-IN",
    };
    utterance.lang = languageMap[i18n.language] || "en-US";

    // Handle speaking state
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    // Stop any ongoing speech before starting new one
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="locker-container">
      <Header />

      <h2 className="page-title">{t("locker_services_header")}</h2>

      <div className="locker-info-container">
        {[
          { title: "eligibility_process", steps: "steps_eligibility" },
          { title: "charges_fees", steps: "steps_charges" },
          { title: "terms_conditions", steps: "steps_terms" },
        ].map((section, index) => (
          <div className="locker-box" key={index}>
            <h3>{t(section.title)}</h3>
            <ul>
              {t(section.steps, { returnObjects: true }).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <div className="button-group">
              <button
                className="read-aloud-btn"
                onClick={() => handleReadAloud(section.title, section.steps)}
                disabled={isSpeaking}
              >
                🔊 {t("read_aloud")}
              </button>
              <button className="stop-btn" onClick={handleStop} disabled={!isSpeaking}>
                ⏹ {t("stop")}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Locker;
