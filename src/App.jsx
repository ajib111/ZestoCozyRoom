import { useState } from "react";

import Room from "./components/Room"
import Scooter from "./components/Scooter";
import MusicPlayer from "./components/MusicPlayer";



function App() {
  const [isNight, setIsNight] = useState(false);

  return (
    <>
      
       <Room/>
        {/* Scooter Cat */}
        <Scooter />

        {/* Music Player */}
        <MusicPlayer />


      
    </>
  );
}

export default App;