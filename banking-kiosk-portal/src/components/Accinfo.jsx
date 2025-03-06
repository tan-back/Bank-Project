import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Accinfo.css";
import "../style/Header.css";
import "../style/Footer.css";

// Import Account Icons
import saving from "../assets/saving.png";
import sal from "../assets/salary.png";
import recur from "../assets/recurring.png";
import fixed from "../assets/fixed.png";
import cur from "../assets/current.png";

const AccountInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]); // Show first two tabs initially

  const accounts = [
    { path: "/savingAcc", img: saving, label: t("saving_account") },
    { path: "/recurring", img: recur, label: t("recurring_account") },
    { path: "/fixed", img: fixed, label: t("fixed_account") },
    { path: "/salary", img: sal, label: t("salary_account") },
    { path: "/current", img: cur, label: t("current_account") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % accounts.length;
        let nextSecond = (second + 2) % accounts.length;
        return [nextFirst, nextSecond];
      });
    }, 3000); // Change tabs every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-acc">
      <Header />

      {/* Main Content */}
      <main className="content-acc">
        <div className="acc">
          {accounts.map((tab, index) => (
            <div
              key={index}
              className={`acc-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="acc-icon-container">
                <img src={tab.img} alt={tab.label} />
                <p>{tab.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountInfo;
