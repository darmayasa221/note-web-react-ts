import styled from "@emotion/styled";
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

const HomeBodyWrapper = styled.div({
  height: "80%",
});
const HomeBody = () => {
  const [isClick, setIsClick] = useState<Boolean>(false);

  return (
    <HomeBodyWrapper>
      <Header setIsClick={setIsClick} />
      <Main isClick={isClick} />
    </HomeBodyWrapper>
  );
};

export default HomeBody;
