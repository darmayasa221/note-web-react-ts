import styled from "@emotion/styled";
import React from "react";

const LogoContainer = styled.div({
  color: "var(--color-one)",
  border: "2px solid white",
  padding: "0 20px",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Logo = () => {
  return (
    <LogoContainer>
      <p>logo</p>
    </LogoContainer>
  );
};

export default Logo;
