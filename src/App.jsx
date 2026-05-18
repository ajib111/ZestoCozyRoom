import { useState } from "react";

import Scooter from "./components/Scooter";
import MusicPlayer from "./components/MusicPlayer";

import dayBg from "./assets/DayBackgroundMobile.png";
import nightBg from "./assets/NightBackgroundMobile.png";

function App() {
  const [isNight, setIsNight] = useState(false);

  return (
    <>
      <div
        className="w-full h-dvh bg-cover bg-center duration-500 relative overflow-hidden"
        style={{
          backgroundImage: `url(${isNight ? nightBg : dayBg})`,
        }}
      >
        {/* Scooter Cat */}
        <Scooter />

        {/* Music Player */}
        <MusicPlayer />

        {/* Day / Night Toggle */}
        <button
          onClick={() => setIsNight(!isNight)}
          className="absolute top-5 right-5 z-50 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md"
        >
          {isNight ? "☀️ Day" : "🌙 Night"}
        </button>
      </div>
    </>
  );
}

export default App;