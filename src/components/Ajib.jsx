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

    "Work Song by Hozier is my favorite",

    "Scooter honestly sleeps all day 😭",

    "I could listen to Cherry Wine forever",

    "This room feels so much better at night 🌙",

    "Thanks for visiting my little world :)",
    
    "I am learing Like Real Peopleon Guitar 🎸",
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

            bottom: "365px",
            right: "111px",

            background: "rgba(34, 33, 33, 0.25)",

            color: "white",

            padding: "9px 12px",

            borderRadius: "15px",

            backdropFilter: "blur(1px)",

            fontSize: "10px",

            maxWidth: "180px",

            lineHeight: "1.3",

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
  draggable="false"
  onContextMenu={(e) => e.preventDefault()}
  style={{
    position: "absolute",
    bottom: "-4%",
    right: "-20%",
    width: "320px",

    zIndex: 10,

    cursor: "pointer",

    userSelect: "none",
    WebkitUserSelect: "none",
    WebkitTouchCallout: "none",

    WebkitUserDrag: "none",

    transition: "0.3s ease",
  }}
/>
    </>
  );
}

export default Ajib;