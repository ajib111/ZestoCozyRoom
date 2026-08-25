import { useState } from "react";

import Room from "./components/Room";
import Scooter from "./components/Scooter";
import Letter from "./components/Letter";
import Navigation from "./components/Navigation";
import Games from "./pages/Games";
import Canvas from "./pages/Canvas";

function App() {
  const [activeSection, setActiveSection] = useState("room");
  const [isNavLetterOpen, setIsNavLetterOpen] = useState(false);

  const isRoomVisible =
    activeSection === "room" ||
    activeSection === "canvas" ||
    activeSection === "games";

  return (
    <>
      {/* Keep the room mounted so its day/night and interactive state remain intact. */}
      <div className={isRoomVisible ? "" : "hidden"}>
        <Room />

        {/* Scooter Cat */}
        <Scooter />
      </div>

      {activeSection === "games" && <Games />}
      {activeSection === "canvas" && <Canvas />}

      {isNavLetterOpen && (
        <Letter
          defaultOpen
          hideTrigger
          onClose={() => setIsNavLetterOpen(false)}
        />
      )}

      <Navigation
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onOpenLetter={() => setIsNavLetterOpen(true)}
      />
    </>
  );
}

export default App;
