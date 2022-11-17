import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "globalStyle/GlobalStyle";
import { CgNotes } from "react-icons/cg";
import { HiOutlinePencil } from "react-icons/hi";
import React, { Dispatch, FC, useState } from "react";

interface IHeader {
  setIsClick: Dispatch<React.SetStateAction<Boolean>>;
}

const BodyHeader = styled.div({
  marginTop: "1rem",
  display: "flex",
  columnGap: "1rem",
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

const Header: FC<IHeader> = ({ setIsClick }) => {
  const [data, setData] = useState<string>("");
  const onClickNoteQuickHandler: () => Promise<void> =
    async (): Promise<void> => {
      setIsClick(true);
      const responseJson = await fetch(
        "http://localhost:5000/api/notes/quickNote",
        {
          method: "POST",
        },
      );
      const response = await responseJson.json();
      setData(response);
      setIsClick(false);
    };
  return (
    <BodyHeader>
      <ButtonQuickNote type="button" onClick={onClickNoteQuickHandler}>
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
  );
};

export default Header;
