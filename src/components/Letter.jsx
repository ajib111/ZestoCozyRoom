import emailjs from "@emailjs/browser";
import { useState } from "react";

import letter from "../assets/Letter.png";

function Letter() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const [message, setMessage] = useState("");

  const sendLetter = () => {
    if (!message.trim()) {
      alert("Write something first 😭");
      return;
    }

    emailjs
      .send(
        "service_7yvwscm",
        "template_qxiozsb",
        {
          message: message,
        },
        "ezrTxEfoDWuIuXNUG"
      )
      .then(() => {
        alert("Letter sent successfully ✨");

        setMessage("");

        setIsLetterOpen(false);
      })
      .catch((error) => {
        console.log(error);

        alert("Something went wrong 😭");
      });
  };

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

      {/* Modal */}
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

            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "420px",

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
              Write a Letter ✨
            </h2>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

                color: "#4b2e2e",
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
                onClick={sendLetter}
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
    </>
  );
}

export default Letter;