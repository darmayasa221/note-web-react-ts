import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "globalStyle/GlobalStyle";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { HiOutlinePencil, HiOutlineViewList } from "react-icons/hi";

const HomeBodyWrapper = styled.div({
  height: "80%",
});
const BodyHeader = styled.div({
  marginTop: "1rem",
  display: "flex",
  columnGap: "1rem",
});
const BodyMain = styled.div({
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  height: "100%",
});
const DefaultButtons = css(Button, {
  color: "var(--color-one)",
  display: "block",
  cursor: "pointer",
  background: "none",
  span: {
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
    columnGap: "6px",
  },
});
const ButtonQuickNote = styled.button(DefaultButtons, {});
const ButtonSpecificNote = styled.button(DefaultButtons, {});
const List = styled.div({
  height: "100%",
});
const ListHeader = styled.div({
  display: "flex",
  fontSize: "20px",
  alignItems: "center",
  columnGap: "6px",
  color: "var(--color-one)",
});
const ListBody = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
  height: "75%",
  borderTop: "2px solid rgba(102, 102, 102, 0.24)",
  borderBottom: "2px solid rgba(102, 102, 102, 0.24)",
});
const HomeBody = () => {
  return (
    <HomeBodyWrapper>
      <BodyHeader>
        <ButtonQuickNote type="button">
          <span>
            <CgNotes />
            <p>Quick Note</p>
          </span>
        </ButtonQuickNote>
        <ButtonSpecificNote type="button">
          <span>
            <HiOutlinePencil />
            <p>Specific Note</p>
          </span>
        </ButtonSpecificNote>
      </BodyHeader>
      <BodyMain>
        <List>
          <ListHeader>
            <HiOutlineViewList />
            <p> Notes</p>
          </ListHeader>
          <ListBody>test body</ListBody>
        </List>
        <List>
          <ListHeader>
            <HiOutlineViewList />
            <p>Collaboration</p>
          </ListHeader>
          <ListBody>test body</ListBody>
        </List>
      </BodyMain>
    </HomeBodyWrapper>
  );
};

export default HomeBody;
