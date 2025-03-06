import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../style/Tax.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const Tax = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Import translation hook

  // Function to read aloud the text
  const handleReadAloud = (textArray) => {
    if (!Array.isArray(textArray)) textArray = [textArray]; // Ensure it's an array

    const fullText = textArray.join(". "); // Convert array into a single readable string
    const utterance = new SpeechSynthesisUtterance(fullText);
    
    // Set the correct language for speech synthesis
    utterance.lang = i18n.language === "hi" ? "hi-IN" : i18n.language === "mr" ? "mr-IN" : "en-US";
    
    utterance.rate = 0.9; // Set a comfortable speaking rate
    utterance.pitch = 1; // Adjust pitch if necessary

    speechSynthesis.cancel(); // Stop any ongoing speech
    speechSynthesis.speak(utterance);
  };

  // Function to stop speech
  const handleStop = () => {
    speechSynthesis.cancel();
  };

  return (
    <div className="tax-container">
      <Header />
      <h2 className="page-title">{t("tax_services_header")}</h2>
      <div className="tax-info-container">

        {/* Eligibility Section */}
        <div className="tax-box">
          <h3>{t("tax_eligibility_title")}</h3>
          <ul>
            {t("tax_eligibility_steps", { returnObjects: true }).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => {
              handleReadAloud([
                t("tax_eligibility_title"),
                ...t("tax_eligibility_steps", { returnObjects: true })
              ]);
            }}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>

        {/* Charges Section */}
        <div className="tax-box">
          <h3>{t("tax_charges_title")}</h3>
          <ul>
            {t("tax_charges_steps", { returnObjects: true }).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => {
              handleReadAloud([
                t("tax_charges_title"),
                ...t("tax_charges_steps", { returnObjects: true })
              ]);
            }}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>

        {/* Types Section */}
        <div className="tax-box">
          <h3>{t("tax_types_title")}</h3>
          <ul>
            {t("tax_types_steps", { returnObjects: true }).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => {
              handleReadAloud([
                t("tax_types_title"),
                ...t("tax_types_steps", { returnObjects: true })
              ]);
            }}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Tax;
