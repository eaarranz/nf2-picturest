import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import "gestalt/dist/gestalt.css";
import { Box, IconButton, Masonry, Spinner } from "gestalt";
import Pin from "./Components/Pin/Pin";
import CreationButton from "./Components/CreationButton/CreationButton";

function App() {
  const [pins, setPins] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchPins = () => {
    fetch("http://localhost/api/pins")
      .then((response) => response.json())
      .then((response) => {
        setPins(response);
        setIsFetching(false);
      });
  };

  if (isFetching) {
    fetchPins();
  }

  console.log(pins);

  return (
    <div className="App">
      <Header />
      {!isFetching ? (
        <Masonry comp={Pin} items={pins} />
      ) : (
        <Spinner show={isFetching} accessibilityLabel="loadingPins" />
      )}
      <CreationButton />
    </div>
  );
}

export default App;
