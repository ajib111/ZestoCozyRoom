import { useState, useRef, useEffect } from "react";

import dayBg from "../assets/DayBackgroundMobile.webp";
import nightBg from "../assets/NightBackgroundMobile.webp";

import chime from "../assets/sounds/chime.mp3";
import daySound from "../assets/sounds/day.mp3";
import cricket from "../assets/sounds/crickets.mp3";

import Ajib from "./Ajib";
import Letter from "./Letter";

function Room() {
  const [isNight, setIsNight] = useState(false);

  // Sounds
  const chimeSound = useRef(new Audio(chime));
  const dayAudio = useRef(new Audio(daySound));
  const cricketAudio = useRef(new Audio(cricket));

  // Volume
  chimeSound.current.volume = 0.08;

  dayAudio.current.loop = true;
  dayAudio.current.volume = 0.8;

  cricketAudio.current.loop = true;
  cricketAudio.current.volume = 1;

  // Change ambience
  useEffect(() => {
    if (isNight) {
      dayAudio.current.pause();
      dayAudio.current.currentTime = 0;

      cricketAudio.current.play();
    } else {
      cricketAudio.current.pause();
      cricketAudio.current.currentTime = 0;

      dayAudio.current.play();
    }
  }, [isNight]);


  // Toggle
  const toggleDayNight = () => {
    chimeSound.current.currentTime = 0;
    chimeSound.current.play();

    setIsNight((prev) => !prev);
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-5px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

      <div
        className="w-full h-dvh bg-cover bg-center duration-500 relative overflow-hidden"
        style={{
          backgroundImage: `url(${isNight ? nightBg : dayBg})`,
        }}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleDayNight}
          className="absolute top-5 right-5 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md z-50"
        >
          {isNight ? "🌙 Night" : "☀️ Day"}
        </button>
        

        {/* Letter */}
        <Letter />

        {/* Character */}
        <Ajib />
      </div>
    </>
  );
}

export default Room;