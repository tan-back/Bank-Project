import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../style/Bank-services.css";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";

import tax from "../assets/tax.png";
import chk from "../assets/checkbook.png";
import bill from "../assets/bill.png";
import atm from "../assets/atm.png";
import locker from "../assets/locker.png";
import digi from "../assets/digital.png";
import insur from "../assets/insurance.png";

const banks = [
  { path: "/tax", img: tax, labelKey: "tax_services" },
  { path: "/chkbook", img: chk, labelKey: "checkbook_services" },
  { path: "/bill", img: bill, labelKey: "bill_services" },
  { path: "/atmser", img: atm, labelKey: "atm_services" },
  { path: "/locker", img: locker, labelKey: "locker_services" },
  { path: "/digital", img: digi, labelKey: "digital_services" },
  { path: "/insurance", img: insur, labelKey: "insurance_services" },
];

const BankingServices = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % banks.length;
        let nextSecond = (second + 2) % banks.length;
        return [nextFirst, nextSecond];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-bank">
      <Header />

      {/* Main Content */}
      <main className="content-bank">
        <div className="bank">
          {banks.map((tab, index) => (
            <div
              key={index}
              className={`bank-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="bank-icon-container">
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

export default BankingServices;
