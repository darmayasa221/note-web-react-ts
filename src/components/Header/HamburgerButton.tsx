import styled from "@emotion/styled";
import mq from "globalStyle/MediaQuery";
import React, { FC, useEffect, useState } from "react";

interface IHamburgerButton {
  isActive: boolean;
  setMobile(params: boolean): void;
}
const HamburgerButtonWrapper = styled.button<
  Pick<IHamburgerButton, "isActive">
>(({ isActive }) => ({
  display: "block",
  position: "relative",
  cursor: "pointer",
  background: "none",
  border: "none",
  span: {
    display: "block",
    width: "33px",
    height: "4px",
    position: "relative",
    marginBottom: "5px",
    borderRadius: "6px",
    backgroundColor: "var(--color-one)",
    transformOrigin: "0 0",
    transition: "0.4s",
  },
  ":hover": {
    "span:nth-of-type(2)": {
      transform: "translateX(10px)",
    },
  },
  // is Active
  "span:nth-of-type(1)": {
    transform: !isActive ? "none" : "translate(0px, -2px) rotate(45deg)",
  },
  "span:nth-of-type(2)": {
    opacity: !isActive ? "unset" : 0,
    transform: !isActive ? "none" : "translateX(-15px)",
  },
  "span:nth-of-type(3)": {
    transform: !isActive ? "none" : "translate(-3px, 3px) rotate(-45deg)",
  },
  [mq[1] as string]: {
    display: "none",
  },
}));
const HamburgerButton: FC<Pick<IHamburgerButton, "setMobile">> = ({
  setMobile,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick = (): void =>
    !isActive ? setIsActive(true) : setIsActive(false);
  useEffect(() => {
    setMobile(isActive);
  });
  return (
    <HamburgerButtonWrapper isActive={isActive} type="button" onClick={onClick}>
      <span />
      <span />
      <span />
    </HamburgerButtonWrapper>
  );
};

export default HamburgerButton;
