import { useState } from "react";

import dayBg from "../assets/DayBackgroundMobile.webp";
import nightBg from "../assets/NightBackgroundMobile.webp";

import Ajib from "./Ajib";
import Letter from "./Letter";

function Room() {
  const [isNight, setIsNight] = useState(false);

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
          onClick={() => setIsNight(!isNight)}
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