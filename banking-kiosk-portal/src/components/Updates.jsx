import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/Updates.css";

const BankUpdates = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Hook for translation
  const [textToRead, setTextToRead] = useState("");

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead(""); // Stop the speech
  };

  return (
    <div>
      <Header />
      <div className="bank-updates-container">
        <h2>{t("updates_header")}</h2>

        <div className="update-sections">
          {/* Bank Updates Section */}
          <div className="update-box">
            <div className="update-content">
              <h3>{t("updates_section_title")}</h3>
              <p><strong>{t("update_1_title")}</strong></p>
              <p>🔹 {t("update_1_details.0")}</p>
              <p>🔹 {t("update_1_details.1")}</p>
              <p>🔹 {t("update_1_details.2")}</p>
              <p>🔹 {t("update_1_details.3")}</p>
              <p><strong>{t("update_1_date")}</strong></p>

              <p><strong>{t("update_2_title")}</strong></p>
              <p>🔹 {t("update_2_details.0")}</p>
              <p>🔹 {t("update_2_details.1")}</p>
              <p>🔹 {t("update_2_details.2")}</p>
              <p>🔹 {t("update_2_details.3")}</p>
              <p><strong>{t("update_2_date")}</strong></p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud(t("read_aloud_text"))}>
                🔊 {t("read_aloud")}
              </button>
              <button className="stop" onClick={handleStop}>⏹ {t("stop")}</button>
            </div>
          </div>

          {/* Bank Announcements Section */}
          <div className="update-box">
            <div className="update-content">
              <h3>{t("updates_announcement_title")}</h3>
              <p><strong>{t("announcement_1_title")}</strong></p>
              <p>🔹 {t("announcement_1_details.0")}</p>
              <p>🔹 {t("announcement_1_details.1")}</p>
              <p>🔹 {t("announcement_1_details.2")}</p>
              <p><strong>{t("announcement_1_date")}</strong></p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud(t("read_aloud_text_announcements"))}>
                🔊 {t("read_aloud")}
              </button>
              <button className="stop" onClick={handleStop}>⏹ {t("stop")}</button>
            </div>
          </div>
        </div>
      </div>
      <TextToSpeech text={textToRead} stop={handleStop} />
      <Footer />
    </div>
  );
};

export default BankUpdates;
