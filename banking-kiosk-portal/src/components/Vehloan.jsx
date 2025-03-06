import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import '../style/Vehloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const VehicleLoan = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead("");
  };

  return (
    <div className="veh-loan-container">
      <Header />
      <h2 className="page-title">{t("vehicle_loan_header")}</h2>
      <div className="loan-info-container">
        <div className="loan-box">
          <h3>{t("vehicle_loan_access_header")}</h3>
          <ul>
            {t("vehicle_loan_access_steps", { returnObjects: true }).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud(t("vehicle_loan_access_steps", { returnObjects: true }).join(". "))}>🔊 {t("read_aloud")}</button>
            <button className="stop-btn" onClick={handleStop}>⏹ {t("stop")}</button>
          </div>
        </div>
        <div className="loan-box">
          <h3>{t("vehicle_loan_procedure_header")}</h3>
          <ul>
            {t("vehicle_loan_procedure_steps", { returnObjects: true }).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud(t("vehicle_loan_procedure_steps", { returnObjects: true }).join(". "))}>🔊 {t("read_aloud")}</button>
            <button className="stop-btn" onClick={handleStop}>⏹ {t("stop")}</button>
          </div>
        </div>
      </div>
      
      <TextToSpeech text={textToRead} stop={handleStop} />
      
      <button className="documents-btn" onClick={() => setShowPopup(true)}>{t("documents_required")}</button>

      {showPopup && (
        <div className="popup-box show">
          <div className="popup-content">
            <h3>{t("vehicle_loan_documents_header")}</h3>
            <ul id="documents-list">
              {t("vehicle_loan_documents", { returnObjects: true }).map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
            <div className="button-group">
              <button className="read-aloud-btn" onClick={() => {
                const docText = t("vehicle_loan_documents", { returnObjects: true }).join(". ");
                handleReadAloud(`${t("vehicle_loan_documents_header")}: ${docText}`);
              }}>🔊 {t("read_aloud")}</button>
              <button className="stop-btn" onClick={handleStop}>⏹ {t("stop")}</button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>{t("close")}</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default VehicleLoan;
