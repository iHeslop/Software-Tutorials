import React from "react";
import background from "../assets/Smile.jpg";

function HomeScreen() {
  return (
    <div
      className="homescreen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 0,
      }}
    >
      <form>
        <input type="text" required="required" placeholder="Email..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HomeScreen;
