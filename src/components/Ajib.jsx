import { useEffect, useState } from "react";

import atPhone from "../assets/AjibAtPhone.png";
import waving from "../assets/AjibWaving.png";

import talking1 from "../assets/AjibTalking1.png";
import talking2 from "../assets/AjibTalking2.png";
import talking3 from "../assets/AjibTalking3.png";

function Ajib() {
  const [currentImage, setCurrentImage] = useState(atPhone);
  const [showText, setShowText] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const talkingImages = [talking1, talking2, talking3];

  const messages = [
    "Hello, welcome to Zesto ✨",

    "Have you met my cat, Scooter? 🐈",

    "I really love listening to Hozier 🎧",

    "Work Song by Hozier has been my favorite lately",

    "Scooter honestly sleeps all day 😭",

    "I could listen to Cherry Wine forever",

    "This room feels so much better at night 🌙",

    "Thanks for visiting my little world :)",
    
    "One day, I wanna play Like Real People Do perfectly on Guitar 🎸",
  ];

  // Random talking every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Random talking image
      const randomTalking =
        talkingImages[
          Math.floor(Math.random() * talkingImages.length)
        ];

      // Random message
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      setCurrentImage(randomTalking);

      setCurrentMessage(randomMessage);

      setShowText(true);

      // Return back to phone
      setTimeout(() => {
        setCurrentImage(atPhone);
        setShowText(false);
      }, 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Wave on click
  const handleClick = () => {
    setCurrentImage(waving);

    setTimeout(() => {
      setCurrentImage(atPhone);
    }, 2000);
  };

  return (
    <>
      {/* Dialogue Bubble */}
      {showText && (
        <div
          style={{
            position: "absolute",

            bottom: "360px",
            right: "140px",

            background: "rgba(0,0,0,0.25)",

            color: "white",

            padding: "10px 14px",

            borderRadius: "18px",

            backdropFilter: "blur(8px)",

            fontSize: "13px",

            maxWidth: "190px",

            lineHeight: "1.4",

            zIndex: 20,

            transition: "0.3s ease",
          }}
        >
          {currentMessage}
        </div>
      )}

      {/* Character */}
      <img
        src={currentImage}
        alt="Ajib"
        onClick={handleClick}
        style={{
          position: "absolute",
          bottom: "-4%",
          right: "-20%",
          width: "320px",

          zIndex: 10,

          cursor: "pointer",

          userSelect: "none",

          transition: "0.3s ease",
        }}
      />
    </>
  );
}

export default Ajib;