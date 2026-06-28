import { useEffect, useRef, useState } from "react";

import sleepingGif from "../assets/ScooterSleeping.webp";
import awakeGif from "../assets/ScooterAwake.webp";
import pettedGif from "../assets/ScooterPetted.webp";
import scooterMeow from "../assets/sounds/ScooterMeow.mp3";
import scooterSnoring from "../assets/sounds/ScooterSnoring.mp3";
import scooterPetted from "../assets/sounds/ScooterPetted.mp3";

function Scooter() {
  const [mood, setMood] = useState("sleeping");
  // Scooter Sounds
const meowSound = useRef(new Audio(scooterMeow));
const snoreSound = useRef(new Audio(scooterSnoring));
const petSound = useRef(new Audio(scooterPetted));

// Volume
meowSound.current.volume = 0.35;

snoreSound.current.loop = true;
snoreSound.current.volume = 0.25;

petSound.current.volume = 0.35;

  // Timer for petting
  const touchTimer = useRef(null);

  useEffect(() => {
  if (mood === "sleeping") {
    snoreSound.current.play();
  } else {
    snoreSound.current.pause();
    snoreSound.current.currentTime = 0;
  }

  if (mood === "petted") {
    petSound.current.currentTime = 0;
    petSound.current.play();
  }
}, [mood]);

  // Get correct gif
  const getGif = () => {
    if (mood === "sleeping") return sleepingGif;
    if (mood === "awake") return awakeGif;
    if (mood === "petted") return pettedGif;
  };

  // Tap / click = wake up
  const wakeScooter = () => {
    if (mood === "sleeping") {
      meowSound.current.currentTime = 0;
      meowSound.current.play();
  }

  setMood("awake");
};

  // Hold touch or hover = pet
  const handlePetStart = () => {
    if (mood !== "sleeping") {
      touchTimer.current = setTimeout(() => {
        setMood("petted");
      }, 1000);
    }
  };

  // Stop petting
  const handlePetEnd = () => {
    clearTimeout(touchTimer.current);

    if (mood === "petted") {
      setMood("awake");
    }
  };

  // Auto sleep after idle
  useEffect(() => {
    let sleepTimer;

    if (mood === "awake") {
      sleepTimer = setTimeout(() => {
        setMood("sleeping");
      }, 5000);
    }

    return () => clearTimeout(sleepTimer);
  }, [mood]);

  return (
    <img
      src={getGif()}
      alt="Scooter"
      draggable="false"
      onClick={wakeScooter}
      onTouchStart={handlePetStart}
      onTouchEnd={handlePetEnd}
      onMouseEnter={handlePetStart}
      onMouseLeave={handlePetEnd}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        position: "absolute",

        // Better room placement
        bottom: "20px",
        left: "18%",

        transform: "translateX(-50%)",

        // Better mobile size
        width: "125px",

        // Prevent iPhone image popup
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",

        cursor: "pointer",

        // Smooth feeling
        transition: "0.3s ease",

        // Depth shadow
        filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.25))",
      }}
    />
  );
}

export default Scooter;