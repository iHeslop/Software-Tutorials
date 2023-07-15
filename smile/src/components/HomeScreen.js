import React from "react";

function HomeScreen() {
  return (
    <div>
      <form>
        <input type="text" required="required" placeholder="Email..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HomeScreen;
