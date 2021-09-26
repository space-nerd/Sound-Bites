import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper, WrapperVarient } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVarient;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
