import React from "react";
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular";
import requests from "./request";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar/>
      <Popular fetchUrl={requests.fetchGames} />
    </div>
  );
}

export default App;
