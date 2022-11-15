import styled from "@emotion/styled";
import mq from "globalStyle/MediaQuery";
import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

const HeaderContaioner = styled.header({
  boxSizing: "border-box",
  width: "100vw",
  position: "fixed",
  height: "80px",
  borderBottom: "1px solid rgba(102, 102, 102, 0.24)",
  display: "flex",
  padding: "1rem 1rem",
  justifyContent: "space-between",
  [mq[0] as string]: {
    padding: "1rem 3rem",
  },
});
const Header = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  return (
    <HeaderContaioner>
      <Logo />
      <NavBar isActive={mobile} />
      <HamburgerButton setMobile={setMobile} />
    </HeaderContaioner>
  );
};

export default Header;
