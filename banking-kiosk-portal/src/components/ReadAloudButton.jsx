import React from 'react';
import { useTranslation } from 'react-i18next';

const ReadAloudButton = () => {
  const { t } = useTranslation();

  return (
    <button className="read-aloud-btn">
      🔊 {t("read_aloud")}
    </button>
  );
};

export default ReadAloudButton;
