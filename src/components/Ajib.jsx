import { useState } from "react";

import atPhone from "../assets/AjibAtPhone.png";
import waving from "../assets/AjibWaving.png";

function Ajib() {
  const [isWaving, setIsWaving] = useState(false);

  const handleClick = () => {
    setIsWaving(true);

    setTimeout(() => {
      setIsWaving(false);
    }, 2000);
  };

  return (
    <img
      src={isWaving ? waving : atPhone}
      alt="Ajib"
      onClick={handleClick}
style={{
  position: "absolute",
  bottom: "-4%",
  right: "-20%",
  width: "320px",
  zIndex: 10,
  cursor: "pointer",
  userSelect: "none",
}}
    />
  );
}

export default Ajib;