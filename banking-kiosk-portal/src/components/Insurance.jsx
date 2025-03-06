import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../style/Insurance.css";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const Insurance = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [textToRead, setTextToRead] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for pop-up

  const handleReadAloud = (key) => {
    const textArray = t(key, { returnObjects: true });
    const text = Array.isArray(textArray) ? textArray.join(". ") : textArray;
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead("");
  };

  return (
    <div className="insur-container">
      <Header />

      <h2 className="page-title">{t("insurance_services_header")}</h2>

      <div className="insur-info-container">
        {/* Eligibility Section */}
        <div className="insur-box">
          <h3>{t("insurance_eligibility_title")}</h3>
          <ul>
            {t("insurance_eligibility_steps", { returnObjects: true }).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("insurance_eligibility_steps")}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>

        {/* Charges & Fees Section */}
        <div className="insur-box">
          <h3>{t("insurance_charges_title")}</h3>
          <ul>
            {t("insurance_charges_steps", { returnObjects: true }).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("insurance_charges_steps")}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>

        {/* Insurance Types Section */}
        <div className="insur-box">
          <h3>{t("insurance_types_title")}</h3>
          <ul>
            {t("insurance_types_steps", { returnObjects: true }).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("insurance_types_steps")}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>
      </div>

      {/* Text-to-Speech Component */}
      <TextToSpeech text={textToRead} stop={handleStop} />

      <Footer />
    </div>
  );
};

export default Insurance;
