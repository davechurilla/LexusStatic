import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";
import { createGlobalStyle } from "styled-components";

const PerformanceHero = ({
	headline,
	subheadline,
	heroVideo,
	responsiveImages,
	options,
	ctas,
	disclaimer
}) => {

	const CtaItems = () => ctas.map(({url, text, ...cta}) => 	
		<Styled.Button {...cta} as="a" href={`${url}`}>
			{text}
		</Styled.Button>
	);

	return (
		<Styled.PerformanceHero>
			<Styled.SectionHero>
				<Styled.VideoWrapper>
					<Styled.BackgroundVideo autoPlay muted loop>
						<source src={`${heroVideo}.mp4`} />
						<source src={`${heroVideo}.webm`} />
					</Styled.BackgroundVideo>
				</Styled.VideoWrapper>
				<Styled.VideoWrapperImage>
					<Styled.Wrapper>
						<Styled.TabletOnly
							src={`${responsiveImages.tabletImg.url}`}
							alt={`${responsiveImages.tabletImg.alt}`}
						/>
						<Styled.MobileDisclaimer>
							<Styled.DisclaimerContainer>
								<span>{options}</span>
							</Styled.DisclaimerContainer>
						</Styled.MobileDisclaimer>
					</Styled.Wrapper>
					<Styled.Wrapper>
						<Styled.MobileOnly
							src={`${responsiveImages.mobileImg.url}`}
							alt={`${responsiveImages.mobileImg.alt}`}
						/>
						<Styled.MobileDisclaimer>
							<Styled.DisclaimerContainer>
								<span>{options}</span>
							</Styled.DisclaimerContainer>
						</Styled.MobileDisclaimer>
					</Styled.Wrapper>
				</Styled.VideoWrapperImage>
				<Styled.VideoContent>
					<Styled.VideoTitle>
						<Styled.DividerVert></Styled.DividerVert>
						<div>
							<Styled.Title>{headline}</Styled.Title>
							<Styled.H4>{subheadline}</Styled.H4>
						</div>
					</Styled.VideoTitle>
					<Styled.ButtonWrapper>
						<CtaItems />
					</Styled.ButtonWrapper>
				</Styled.VideoContent>
				<Styled.Disclaimer>
					<Styled.DisclaimerContainer>
						<span>{disclaimer}</span>
					</Styled.DisclaimerContainer>
				</Styled.Disclaimer>
			</Styled.SectionHero>
		</Styled.PerformanceHero>
	);
};

export default PerformanceHero;
