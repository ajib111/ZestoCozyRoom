import { useEffect, useRef, useState } from "react";

import sleepingGif from "../assets/ScooterSleeping.gif";
import awakeGif from "../assets/ScooterAwake.gif";
import pettedGif from "../assets/ScooterPetted.gif";

function Scooter() {
  const [mood, setMood] = useState("sleeping");

  // Timer for petting
  const touchTimer = useRef(null);

  // Get correct gif
  const getGif = () => {
    if (mood === "sleeping") return sleepingGif;
    if (mood === "awake") return awakeGif;
    if (mood === "petted") return pettedGif;
  };

  // Tap / click = wake up
  const wakeScooter = () => {
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
        bottom: "40px",
        left: "25%",

        transform: "translateX(-50%)",

        // Better mobile size
        width: "150px",

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