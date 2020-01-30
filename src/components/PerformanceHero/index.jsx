import React from "react";
import Styled from "./index.styled";
import Typography from "../Typography";

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
			<Styled.SectionHero>
				<Styled.VideoWrapper>
					<video autoPlay muted loop className="hero-video">
						<source src={`${heroVideo}.mp4`} />
						<source src={`${heroVideo}.webm`} />
					</video>
				</Styled.VideoWrapper>
				<Styled.VideoWrapperImage>
					<Styled.TabletOnly>
						<img src={`${tabletImg}`} className="bg-image" alt="" />
						<Styled.ResponsiveDisclaimer>
							<span>{options}</span>
						</Styled.ResponsiveDisclaimer>
					</Styled.TabletOnly>
					<Styled.MobileOnly>
						<img src={`${mobileImg}`} className="bg-image" alt="" />
						<Styled.ResponsiveDisclaimer>
							<span>{options}</span>
						</Styled.ResponsiveDisclaimer>
					</Styled.MobileOnly>
				</Styled.VideoWrapperImage>
				<Styled.VideoContent>
					<Styled.VideoTitle>
						<div className="divider-vert"></div>
						<div>
							<Styled.Title>{headline}</Styled.Title>
							<Styled.H4>{subheadline}</Styled.H4>
						</div>
					</Styled.VideoTitle>
					<Styled.VideoButtons>
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
					</Styled.VideoButtons>
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
