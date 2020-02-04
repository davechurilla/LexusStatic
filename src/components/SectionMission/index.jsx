import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";

const SectionMission = ({ headline, bodytext }) => {
	const bodytextItems = bodytext.map((item) =>
	  <Styled.BodyText>{item}</Styled.BodyText>
	);	
	return (
		<Styled.SectionMission>
			<Styled.Container>
				<Styled.Heading>{headline}</Styled.Heading>
				<Styled.Divider></Styled.Divider>
				<Styled.TextContent>
					{bodytextItems}
				</Styled.TextContent>
			</Styled.Container>
		</Styled.SectionMission>
	);
};

export default SectionMission;
