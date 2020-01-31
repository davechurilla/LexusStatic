import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: black;
    padding: 0;
    margin:0;
  }
`

const PerformanceHero = ({
	headline,
	subheadline,
	heroVideo,
	mobileImg,
	tabletImg,
	options,
	cta,
	disclaimer
}) => {
	return (
		<Styled.PerformanceHero>
		<GlobalStyle />
			<Styled.SectionHero>
				<Styled.VideoWrapper>
					<Styled.BackgroundVideo autoPlay muted loop>
						<source src={`${heroVideo}.mp4`} />
						<source src={`${heroVideo}.webm`} />
					</Styled.BackgroundVideo>
				</Styled.VideoWrapper>
				<Styled.VideoWrapperImage>
					<Styled.Wrapper>
						<Styled.TabletOnly src={`${tabletImg}`} alt="" />
						<Styled.MobileDisclaimer>
							<Styled.DisclaimerContainer>
								<span>{options}</span>
							</Styled.DisclaimerContainer>
						</Styled.MobileDisclaimer>
					</Styled.Wrapper>
					<Styled.Wrapper>
						<Styled.MobileOnly src={`${mobileImg}`} alt="" />
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
						<Styled.Button
							as="a"
							href={`${heroVideo}.mp4`}
							data-target="#hero-modal"
						>
							{cta[0]}
						</Styled.Button>
						<Styled.Button primary as="a" href="#explore">
							{cta[1]}
						</Styled.Button>
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
