import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/Header.css';
import bankIcon from '../assets/bank.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="account-info-container">
      {/* Header */}
      <div className="header">
        <div className="dashboard-logo">
          <img src={bankIcon} alt="Bank Logo" className="bank-logo" />
          <h1 className="shiny-text">{t("global_bank")}</h1>
        </div>

        <div className="header-right">
          {/* Chat Button (Placed Before Language Selector) */}
          <Link to="/faq" className="chat-btn">
            {t("chat")}
          </Link>

          {/* Language Selector */}
          <div className="language-container">
            <label className="language-label">{t("select_language")}</label>
            <select onChange={changeLanguage} defaultValue={i18n.language} className="language-selector">
              <option value="en">English</option>
              <option value="mr">मराठी</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="title-bar">
        <div className="nav-links">
          <Link to="/dashboard" className="nav">
            <p>{t("home")}</p>
          </Link>
          <Link to="/accinfo" className="nav">
            <p>{t("account_info")}</p>
          </Link>
          <Link to="/bank-services" className="nav">
            <p>{t("bank_service")}</p>
          </Link>
          <Link to="/loans" className="nav">
            <p>{t("loans")}</p>
          </Link>
          <Link to="/custsupport" className="nav">
            <p>{t("customer_support")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
