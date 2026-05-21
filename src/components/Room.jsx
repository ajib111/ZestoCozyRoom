import { useState } from "react";

import dayBg from "../assets/DayBackgroundMobile.webp";
import nightBg from "../assets/NightBackgroundMobile.webp";

import letter from "../assets/Letter.png";

import Ajib from "./Ajib";

function Room() {
  const [isNight, setIsNight] = useState(false);

  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <>
      {/* Floating Animation */}
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
        <img
          src={letter}
          alt="Letter"
          onClick={() => setIsLetterOpen(true)}
          style={{
            position: "absolute",

            bottom: "45%",
            left: "0%",

            width: "70px",

            zIndex: 15,

            cursor: "pointer",

            animation: "float 3s ease-in-out infinite",

            filter:
              "drop-shadow(0 0 8px rgba(255,220,160,0.25))",

            transition: "0.3s ease",

            imageRendering: "auto",

            userSelect: "none",
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
            WebkitUserDrag: "none",
          }}  
        />

        {/* Temporary Letter Modal */}
        {isLetterOpen && (
          <div
            onClick={() => setIsLetterOpen(false)}
            style={{
              position: "absolute",
              inset: 0,

              background: "rgba(0,0,0,0.45)",

              backdropFilter: "blur(4px)",

              zIndex: 100,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "85%",

                background: "#f4e7d3",

                borderRadius: "24px",

                padding: "20px",

                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",

                color: "#4b2e2e",
              }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  marginBottom: "15px",
                  fontWeight: "bold",
                }}
              >
                Write a Letter
              </h2>

              <textarea
                placeholder="Leave a little message for me..."
                style={{
                  width: "100%",
                  height: "140px",

                  border: "none",

                  outline: "none",

                  resize: "none",

                  padding: "14px",

                  borderRadius: "16px",

                  background: "#fffaf3",

                  fontSize: "15px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "10px",

                  marginTop: "15px",
                }}
              >
                <button
                  style={{
                    flex: 1,

                    padding: "12px",

                    borderRadius: "14px",

                    border: "none",

                    background: "#6b8f71",

                    color: "white",

                    fontWeight: "bold",

                    cursor: "pointer",
                  }}
                >
                  Send
                </button>

                <button
                  onClick={() => setIsLetterOpen(false)}
                  style={{
                    flex: 1,

                    padding: "12px",

                    borderRadius: "14px",

                    border: "none",

                    background: "#d8c3a5",

                    color: "#4b2e2e",

                    fontWeight: "bold",

                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Character */}
        <Ajib />
      </div>
    </>
  );
}

export default Room;