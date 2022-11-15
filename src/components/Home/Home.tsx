import styled from "@emotion/styled";
import mq from "globalStyle/MediaQuery";
import React from "react";
import HomeBody from "./HomeBody";
import HomeHeader from "./HomeHeader";

const HomeContainer = styled.div({
  boxSizing: "border-box",
  height: "100%",
  padding: "0 1rem",
  [mq[0] as string]: {
    padding: "1rem 3rem",
  },
});

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <HomeBody />
    </HomeContainer>
  );
};

export default Home;
