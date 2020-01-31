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

const SectionMission = ({ headline, bodytext }) => {
	return (
		<Styled.SectionMission>
			<GlobalStyle />
			<Styled.Container>
				<Styled.Heading>{headline}</Styled.Heading>
				<Styled.Divider></Styled.Divider>
				<Styled.TextContent>
					<Styled.BodyText>
						{bodytext[0]}
					</Styled.BodyText>
					<Styled.BodyText>
						{bodytext[1]}
					</Styled.BodyText>
				</Styled.TextContent>
			</Styled.Container>
		</Styled.SectionMission>
	);
};

export default SectionMission;
