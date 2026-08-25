import { useEffect, useRef, useState } from "react";

import cozy1 from "../assets/music/cozy1.mp3";
import cozy2 from "../assets/music/cozy2.mp3";
import cozy3 from "../assets/music/cozy3.mp3";

function MusicPlayer() {
  const songs = [cozy1, cozy2, cozy3];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

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

      <div className="relative shrink-0 border-l border-white/15 pl-1">
        <button
          type="button"
          aria-label="Open music player"
          aria-expanded={isPlayerOpen}
          onClick={() => setIsPlayerOpen((open) => !open)}
          className={`grid size-10 place-items-center rounded-xl text-base transition active:scale-95 md:size-11 ${
            isPlayerOpen
              ? "bg-[#f6ddae]/75 text-[#5b3527] shadow-sm"
              : "bg-white/10 text-white/85"
          }`}
        >
          🎵
        </button>

        {isPlayerOpen && (
          <div className="absolute right-0 bottom-full mb-2 flex items-center gap-1 rounded-2xl border border-white/15 bg-[#3d2b24]/55 p-2 shadow-[0_8px_24px_rgba(57,35,26,0.2)] backdrop-blur-md md:top-full md:bottom-auto md:mt-2 md:mb-0">
            <button
              type="button"
              aria-label="Previous song"
              onClick={prevSong}
              className="grid size-10 place-items-center rounded-xl bg-white/10 text-sm text-white transition active:scale-95"
            >
              ⏮
            </button>

            <button
              type="button"
              aria-label={isPlaying ? "Pause music" : "Play music"}
              onClick={togglePlay}
              className="grid size-10 place-items-center rounded-xl bg-[#f6ddae]/75 text-sm text-[#5b3527] shadow-sm transition active:scale-95"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <button
              type="button"
              aria-label="Next song"
              onClick={nextSong}
              className="grid size-10 place-items-center rounded-xl bg-white/10 text-sm text-white transition active:scale-95"
            >
              ⏭
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default MusicPlayer;
