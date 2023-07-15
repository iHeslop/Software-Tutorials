import React from "react";
import background from "../assets/Smile.jpg";
import HomeScreen from "../components/HomeScreen";

function Home() {
  return (
    <div
      className="PageNotFound"
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
      }}
    >
      <HomeScreen />
    </div>
  );
}

export default Home;
