import { Global } from "@emotion/react";
import Header from "components/Header/Header";
import Home from "components/Home/Home";
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
          main: {
            boxSizing: "border-box",
            height: "100%",
            paddingTop: "90px",
          },
        }}
      />
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
