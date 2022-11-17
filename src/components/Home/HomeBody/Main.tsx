import styled from "@emotion/styled";
import { HiOutlineViewList } from "react-icons/hi";
import React, { FC, useEffect, useState } from "react";
import { INotes } from "model/notes/Notes";

interface IMain {
  isClick: Boolean;
}

const BodyMain = styled.div({
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  height: "100%",
});
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

const Main: FC<IMain> = ({ isClick }) => {
  const [notes, setNotes] = useState<INotes>([
    {
      id: "",
      title: "",
      body: "",
      tags: [""],
      createdAt: "",
      updatedAt: "",
    },
  ]);
  // render just one
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "GET",
      });
      const responseJson = (await response.json()) as {
        data: { notes: INotes };
      };
      setNotes(responseJson.data.notes);
    })();
  }, []);
  // when add new notes
  useEffect(() => {
    if (isClick) {
      (async () => {
        const response = await fetch("http://localhost:5000/api/notes", {
          method: "GET",
        });
        const responseJson = (await response.json()) as {
          data: { notes: INotes };
        };
        setNotes(responseJson.data.notes);
      })();
    }
  }, [isClick]);
  return (
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
  );
};

export default Main;
