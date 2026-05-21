import Room from "./components/Room";
import Scooter from "./components/Scooter";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        background: "#000",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        overflow: "hidden",
      }}
    >
      {/* Zesto Phone Container */}
      <div
        style={{
          width: "375px",
          height: "667px",

          position: "relative",

          overflow: "hidden",

          borderRadius: "30px",

          background: "black",

          boxShadow: "0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Room */}
        <Room />

        {/* Scooter */}
        <Scooter />

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;