import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import "../style/Banner.css";
// import { ClipLoader, GridLoader, PulseLoader } from "react-spinners";
import { logBannerClick } from "../services/banner-service"; // Import API function

// Import banner images
import login2 from "../assets/login2.png";
import login3 from "../assets/login3.png";
import login4 from "../assets/login4.png";
import login5 from "../assets/login5.png";

const images = [login2, login3, login4, login5]; // Array of images
const captions = ["Safe Banking", "Quick Loans", "Easy Solutions", "Various Services"]; // Captions

const Banner = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Track active image index
  const [loading, setLoading] = useState(false); // Track loading state

  // Automatically change the active image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle button click
  const handleButtonClick = async () => {
    setLoading(true); // Show full-screen loader
    try {
      await logBannerClick(activeIndex + 1); // Log banner click with current index
    } catch (error) {
      console.error("Failed to log banner click", error);
    }
    setTimeout(() => {
      navigate("/dashboard"); // Navigate after delay
    }, 2000);
  };

  return (
    <div className="banner-container">
      {/* Full-Screen Loader */}
      {loading && (
        <div className="full-screen-loader">
          {/* <PulseLoader color="#ffffff" size={20} /> */}
          <p>Loading, please wait...</p>
        </div>
      )}

      {/* Image Display (Hidden when loading) */}
      {!loading && (
        <>
          <div className="image-wrapper">
            <Image className="banner-image" src={images[activeIndex]} alt="Banking Services" />
            <div className="caption">
              <h3>{captions[activeIndex]}</h3>
            </div>
          </div>

          {/* Navigation Button */}
          <div className="button-container">
            <Button className="home-btn" onClick={handleButtonClick}>
              <p>Proceed to Home</p>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
