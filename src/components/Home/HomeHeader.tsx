import styled from "@emotion/styled";
import React from "react";
import { CgProfile } from "react-icons/cg";

const HomeHeaderWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const HomeHeader = () => {
  return (
    <HomeHeaderWrapper>
      <h3>Wellcome For First Note</h3>
      <CgProfile color="var(--color-one)" size={40} />
    </HomeHeaderWrapper>
  );
};

export default HomeHeader;
