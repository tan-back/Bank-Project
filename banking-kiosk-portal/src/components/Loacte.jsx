import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import "../style/LocateUs.css";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const branches = [
  { 
    name: "Global Bank - Branch 1", 
    address: "Andheri-Kurla Road, Andheri East, Mumbai", 
    mapLink: "https://www.google.com/maps/place/Andheri-Kurla+Road,+Mumbai" 
  },
  { 
    name: "Global Bank - Branch 2", 
    address: "Baner Road, Baner, Pune", 
    mapLink: "https://www.google.com/maps/place/Baner+Road,+Pune" 
  },
  { 
    name: "Global Bank - Branch 3", 
    address: "Linking Road, Bandra West, Mumbai", 
    mapLink: "https://www.google.com/maps/place/Linking+Road,+Mumbai" 
  }
];

const LocateUs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div>
      <Header />
      <div className="locate-us-page">
        <h1>{t("locateUs.title")}</h1>
        <p>{t("locateUs.hotline")}: +1 234 567 890</p>
      </div>
      <div className="locate-content">
        <div className="locate-content-in">
          <h3>{t("locateUs.branchLocations")}</h3>
          <ul>
            {branches.map((branch, index) => (
              <li key={index} className="branch-item">
                <strong>{branch.name}</strong>: {branch.address} 
                (<a href={branch.mapLink} target="_blank" rel="noopener noreferrer">{t("locateUs.mapLink")}</a>)
              </li>
            ))}
          </ul>
          <h3>{t("locateUs.emergencyContacts")}</h3>
          <p>{t("locateUs.hotline")}: +1 234 567 890</p>

          {/* Updated Follow Us Section */}
          <h3>{t("locateUs.followUs")}</h3>
          <p className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">{t("locateUs.facebook")}</a> |{" "}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">{t("locateUs.twitter")}</a> |{" "}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{t("locateUs.instagram")}</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocateUs;
