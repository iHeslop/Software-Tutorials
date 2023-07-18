import React, { useState } from "react";
import smileyImage from "../assets/Mr._Smiley_Face.svg.png";

function BlackScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = (event) => {
    // Check if the clicked element is the image
    if (event.target.tagName === "IMG") {
      setIsFadingOut(true);
    }

    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the delay (in milliseconds) as needed for a slower or faster fade-out
  };

  return isVisible ? (
    <div
      className="blackscreen"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: isFadingOut ? 0 : 1, // Set the opacity to 0 during the fade-out animation
        zIndex: 1,
        transition: "opacity 3s", // Adjust the transition duration (in seconds) as needed
      }}
      onClick={handleClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <img
          src={smileyImage}
          style={{
            maxWidth: "15%",
            maxHeight: "15%",
          }}
          alt="Smiley Face"
          className="pulse-animation"
        />
      </div>
    </div>
  ) : null;
}

export default BlackScreen;
