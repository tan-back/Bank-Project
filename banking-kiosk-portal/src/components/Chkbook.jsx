import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../style/Chkbook.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const Checkbook = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead("");
  };

  return (
    <div className="Checkcontainer">
      <Header />
      <h2 className="page-title">{t("checkbook_header")}</h2>
      <div className="Check-info-container">
        <div className="Check-box">
          <h3>{t("eligibility_process_header")}</h3>
          <ul>
            <li>{t("eligibility_point1")}</li>
            <li>
              {t("eligibility_point2")}
              <ul>
                <li>{t("branch_visit")}</li>
                <li>{t("net_mobile_banking")}</li>
                <li>{t("atm_request")}</li>
                <li>{t("sms_customer_care")}</li>
              </ul>
            </li>
            <li>{t("checkbook_delivery")}</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud(t("eligibility_process_text"))}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>
        <div className="Check-box">
          <h3>{t("charges_fees_header")}</h3>
          <ul>
            <li>{t("free_checkbooks")}</li>
            <li>{t("additional_checkbook_charges")}</li>
            <li>{t("stop_payment_charges")}</li>
            <li>{t("check_bounce_penalty")}</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud(t("charges_fees_text"))}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>
        <div className="Check-box">
          <h3>{t("types_of_checkbooks_header")}</h3>
          <ul>
            <li>{t("personal_checkbooks")}</li>
            <li>{t("business_checkbooks")}</li>
            <li>{t("multi_city_checks")}</li>
            <li>{t("cts_2010_compliant_checks")}</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud(t("types_of_checkbooks_text"))}>
              🔊 {t("read_aloud")}
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ {t("stop")}
            </button>
          </div>
        </div>
      </div>
      <TextToSpeech text={textToRead} stop={handleStop} />
      <Footer />
    </div>
  );
};

export default Checkbook;
