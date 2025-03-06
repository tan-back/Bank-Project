import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TextToSpeech = ({ text, stop }) => {
  const { i18n } = useTranslation(); // Get the current language

  useEffect(() => {
    if (!text) return;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Set language based on the selected language
    switch (i18n.language) {
      case "hi": // Hindi
        utterance.lang = "hi-IN";
        break;
      case "mr": // Marathi
        utterance.lang = "mr-IN";
        break;
      default: // Default to English
        utterance.lang = "en-US";
        break;
    }

    synth.speak(utterance);

    return () => {
      synth.cancel(); // Stop speech when the component unmounts or text changes
    };
  }, [text, i18n.language]); // Reacts to language changes

  return null;
};

export default TextToSpeech;
