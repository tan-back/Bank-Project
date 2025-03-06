import React, { useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { getFaqCategories, getFAQs } from "../services/faq-service";
// import { BeatLoader } from "react-spinners";
import { useNavigate, useLocation } from "react-router-dom";


import "../style/Faq.css";

import Footer from "./Footer";
import Header from "./Header";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [categories, setCategories] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Fetch categories on load
    useEffect(() => {
        const fetchCategories = async () => {
            let data = await getFaqCategories();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    // Fetch FAQs when category changes
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get("category");
        if (category) {
            fetchFAQs(category);
        }
    }, [location.search]);

    const fetchFAQs = async (category) => {
        setLoading(true);
        let data = await getFAQs(category);
        setFaqs(data);
        setLoading(false);
    };

    return (
        <div>
            <Header />
            <div className="faq-container">
                {/* Show Category Buttons */}
                {!selectedCategory ? (
                    <div className="faq-section">
                        <h2>Select a Category</h2>
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <Button
                                    key={index}
                                    className="faq-category"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        navigate(`/faq?category=${encodeURIComponent(category)}`);
                                    }}
                                >
                                    {category}
                                </Button>
                            ))
                        ) : (
                            <p>No categories available</p>
                        )}
                    </div>
                ) : null}

                {/* Show FAQs in Accordion */}
                {selectedCategory && (
                    <div className="faq-section">
                        <h2>{selectedCategory} FAQs</h2>
                        <Button
                            className="faq-back-btn"
                            onClick={() => {
                                setSelectedCategory(null);
                                navigate("/faq");
                            }}
                        >
                            ← Back to Categories
                        </Button>
                        {loading ? (
    <div className="spinner-container">
        {/* <BeatLoader color="#36D7B7" size={50} /> */}
    </div>
) : (
    <div className="faq-accordion">
        {faqs.length > 0 ? (
            faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <button
                        className={`faq-question ${openIndex === index ? "open" : ""}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span>{faq.question}</span>
                        <span>{openIndex === index ? "▲" : "▼"}</span>
                    </button>
                    <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-center text-gray-500">No FAQs available for this category.</p>
        )}
    </div>
)}


                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default FAQAccordion;
