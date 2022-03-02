import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import requests from "./request";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar/>
      <Card title="Trending Now" fetchUrl={requests.fetchGames} />
    </div>
  );
}

export default App;
