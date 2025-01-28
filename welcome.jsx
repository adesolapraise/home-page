import React, { useState, useEffect } from "react";
import './welcome.css';

const SlidingParagraphs = () => {
  // Array of 6 different texts
  const paragraphs = [
    "Your Belle don full.",
    "Cikinka ya cika.",
    "Ife ime gi zuru oke.",
    "Inu e ti kun.",
    "Tu es rassasié.",
    "Estás lleno."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change paragraph every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 2000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div className="slider">   
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className={`paragraph ${index === currentIndex ? "active" : "hidden"}`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default SlidingParagraphs;
