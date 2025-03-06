import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/Footer.css'; // Ensure this file exists

const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <footer className="footer">
            <p>{t("disclaimer")}</p>
        </footer>
    );
}

export default Footer;
