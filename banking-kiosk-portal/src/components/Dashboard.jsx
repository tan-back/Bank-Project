import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook
import Header from "./Header";
import Footer from "./Footer";
import ls from "../assets/loans.png";
import bs from "../assets/bsbank.png";
import cust from "../assets/custmsupport.png";
import accinfo from "../assets/accinfo.png";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/Home.css";

const Dashboard = () => {
  const { t } = useTranslation(); // Translation function
  const navigate = useNavigate();
  const [visibleIndex, setVisibleIndex] = useState(0);

  // Define service tabs
  const serviceTabs = [
    { path: "/accinfo", img: accinfo, key: "account_info" },
    { path: "/bank-services", img: bs, key: "bank_service" },
    { path: "/loans", img: ls, key: "loans" },
    { path: "/custsupport", img: cust, key: "customer_support" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % serviceTabs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceTabs.length]);

  return (
    <div className="homepage">
      <Header />
      <main className="content">
        <div className="services">
          {serviceTabs.map((tab, index) => (
            <div
              key={index}
              className={`service-item ${index === visibleIndex ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
              role="button"
              tabIndex={0}
            >
              <Link to={tab.path} className="icon-container">
                <img src={tab.img} alt={t(tab.key)} />
                <p>{t(tab.key)}</p> {/* Fetch translation dynamically */}
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
