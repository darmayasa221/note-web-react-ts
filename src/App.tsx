import { Global } from "@emotion/react";
import Header from "components/Header/Header";
import React from "react";

function App() {
  return (
    <>
      <Global
        styles={{
          ":root": {
            "--color-one": "rgba(255, 255, 255, 0.85)",
          },
          "*": {
            margin: 0,
            padding: 0,
          },
          "#root": {
            backgroundColor: "#242424",
            height: "100vh",
          },
        }}
      />
      <Header />
    </>
  );
}

export default App;
