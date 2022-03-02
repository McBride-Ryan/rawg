import React from "react";
import Card from "./Components/Card";
import requests from "./request";

function App() {
  return (
    <Card title="Trending Now" fetchUrl={requests.fetchGames} />
  );
}

export default App;
