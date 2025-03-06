import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook
import "../style/custsupport.css";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import { Link } from "react-router-dom";

import locate from "../assets/locate.png";
import rules from "../assets/rules.png";
import updates from "../assets/updates.png";

const cust = [
  { path: "/locate", img: locate, labelKey: "locate_us" },
  { path: "/rules", img: rules, labelKey: "rules_and_regulations" },
  { path: "/updates", img: updates, labelKey: "updates" },
];

const CustomerSupport = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Initialize translation

  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]); // Show first two tabs initially

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % cust.length;
        let nextSecond = (second + 2) % cust.length;
        return [nextFirst, nextSecond];
      });
    }, 3000); // Change tabs every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-cust">
      <Header />


      {/* Main Content */}
      <main className="content-cust">
        <div className="cust">
          {cust.map((tab, index) => (
            <div
              key={index}
              className={`cust-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="cust-icon-container">
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

export default CustomerSupport;
