import { useEffect, useRef, useState } from "react";

import cozy1 from "../assets/music/cozy1.mp3";
import cozy2 from "../assets/music/cozy2.mp3";
import cozy3 from "../assets/music/cozy3.mp3";

function MusicPlayer() {
  const songs = [cozy1, cozy2, cozy3];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // Set volume once
  useEffect(() => {
    audioRef.current.volume = 0.4;
  }, []);

  // Change song when index changes
  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex];

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex]);

  // Play / Pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Next Song
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  // Previous Song
  const prevSong = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
      />

        <div className="fixed bottom-5 right-5 z-50 flex gap-2 bg-black/40 backdrop-blur-md p-3 rounded-2xl text-white">
        
        <button onClick={prevSong}>
          ⏮
        </button>

        <button onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button onClick={nextSong}>
          ⏭
        </button>

      </div>
    </>
  );
}

export default MusicPlayer;