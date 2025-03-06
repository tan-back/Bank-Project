import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import "../style/Loans.css";
import Header from "./Header";
import Footer from "./Footer";

import hloan from "../assets/home.png";
import edu from "../assets/edu.png";
import bloan from "../assets/busi.png";
import ploan from "../assets/pers.png";
import gloan from "../assets/gold.png";
import vloan from "../assets/car.png";

const loans = [
  { path: "/homeloan", img: hloan, labelKey: "home_loan" },
  { path: "/eduloan", img: edu, labelKey: "education_loan" },
  { path: "/busiloan", img: bloan, labelKey: "business_loan" },
  { path: "/perloan", img: ploan, labelKey: "personal_loan" },
  { path: "/goldloan", img: gloan, labelKey: "gold_loan" },
  { path: "/vehloan", img: vloan, labelKey: "vehicle_loan" }
];

const LoanServices = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Initialize translation

  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]); // Show first two tabs initially

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % loans.length;
        let nextSecond = (second + 2) % loans.length;
        return [nextFirst, nextSecond];
      });
    }, 5000); // Change tabs every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-loan">
      <Header />

      {/* Main Content */}
      <main className="content-loan">
        <div className="loan">
          {loans.map((tab, index) => (
            <div
              key={index}
              className={`loan-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="loan-icon-container">
                <img src={tab.img} alt={t(tab.labelKey)} />
                <p>{t(tab.labelKey)}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoanServices;
