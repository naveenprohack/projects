import React, { useState, useRef } from "react";
import "../assets/css/omnitrix.css";

const menuItems = [
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function OmnitrixMenu({ onMenuSelect }) {
  const [rotation, setRotation] = useState(0);
  const rotateSound = useRef(new Audio("/sounds/rotate.mp3"));
  const lockSound = useRef(new Audio("/sounds/lock.mp3"));

  const handleClick = (id) => {
    rotateSound.current.play();
    lockSound.current.play();

    setRotation((prev) => prev + 90); // step rotation
    onMenuSelect(id);
  };

  return (
    <div className="omnitrix-wrapper">
      <div className="claws"></div>

      <div className="omnitrix-core">
        <div
          className="omnitrix-outer-ring"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              className={`omni-button pos-${i + 1}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="omnitrix-center"></div>
        <div className="energy-pulse"></div>
      </div>
    </div>
  );
}
