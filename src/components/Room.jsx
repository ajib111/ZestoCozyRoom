import { useState } from "react";

import dayBg from "../assets/DayBackgroundMobile.png";
import nightBg from "../assets/NightBackgroundMobile.png";

function Room() {
  const [isNight, setIsNight] = useState(false);

  return (
    <div
      className="w-full h-dvh bg-cover bg-center duration-500"
      style={{
        backgroundImage: `url(${isNight ? nightBg : dayBg})`,
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsNight(!isNight)}
        className="absolute top-5 right-5 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md"
      >
        {isNight ? "☀️ Day" : "🌙 Night"}
      </button>
    </div>
  );
}

export default Room;