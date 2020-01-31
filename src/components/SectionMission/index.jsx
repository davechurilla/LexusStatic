import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: black;
    padding: 0;
    margin:0;
  }
`;

const SectionMission = ({ children }) => {
  return (
    <Styled.SectionMission>
      {children}
    </Styled.SectionMission>
  );
};

export default SectionMission;
