import { Global } from "@emotion/react";
import HelloWorld from "components/HelloWorld";
import React from "react";

function App() {
  return (
    <>
      <Global
        styles={{
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
      <HelloWorld />
    </>
  );
}

export default App;
