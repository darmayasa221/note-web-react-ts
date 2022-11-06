import styled from "@emotion/styled";
import React, { FC } from "react";
import { Anchor } from "globalStyle/GlobalStyle";
import mq from "globalStyle/MediaQuery";

interface INavBar {
  isActive: boolean;
}
const NavBarContainer = styled.nav<INavBar>(({ isActive }) => ({
  position: "absolute",
  width: "100%",
  height: "100vh",
  left: 0,
  top: 0,
  marginTop: "80px",
  transition: "0.4s",
  transform: !isActive ? "translateX(-100%)" : "translateX(0)",
  background: "rgba(36, 36, 36, 0.06)",
  backdropFilter: "blur(10px)",
  [mq[1] as string]: {
    position: "static",
    transform: "unset",
    height: "unset",
    margin: 0,
    background: "unset",
  },
}));
const UnderList = styled.ul({
  marginTop: "10px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  alignItems: "center",
  [mq[1] as string]: {
    justifyContent: "flex-end",
    flexDirection: "row",
    margin: 0,
    columnGap: "20px",
  },
});
const List = styled.li({
  width: "90%",
  listStyle: "none",
  borderTop: "2px solid rgba(102, 102, 102, 0.24)",
  borderBottom: "2px solid rgba(102, 102, 102, 0.24)",
  padding: "1rem 0",
  transition: "0.4s",
  ":hover": {
    borderTop: "2px solid white",
    borderBottom: "2px solid white",
  },
  [mq[1] as string]: {
    border: "none",
    width: "unset",
    borderRadius: "6px",
    ":hover": {
      cursor: "pointer",
      padding: "1rem 1.5rem",
      border: "1px solid white",
    },
  },
});
const Link = styled.a(Anchor, {
  textAlign: "center",
  color: "var(--color-one)",
  transition: "0.4s",
  ":hover": {
    color: "white",
  },
});
const NavBar: FC<Partial<INavBar>> = ({ isActive }) => {
  return (
    <NavBarContainer isActive={isActive as boolean}>
      <UnderList>
        <List>
          <Link href="/">Notes</Link>
        </List>
        <List>
          <Link href="/">Collaboration</Link>
        </List>
        <List>
          <Link href="/">Home</Link>
        </List>
      </UnderList>
    </NavBarContainer>
  );
};

export default NavBar;
