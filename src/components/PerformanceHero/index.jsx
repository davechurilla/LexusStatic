import React from "react";
import Styled from "./index.styled";
import Typography from  "../Typography";

const PerformanceHero = ({ children }) => {
	return (
		<Styled.PerformanceHero>
			{children}
			<Styled.SectionHero>
				<div className="video--overlay-copy section-padded">
					<div className="text-center constrain-x"></div>
				</div>
				<div className="video--wrapper">
					<video autoplay="" muted="" loop="" className="hero-video">
						<source src="https://www.lexus.com/media/performance/PerformanceHeader1.mp4" />
						<source src="https://www.lexus.com/media/performance/PerformanceHeader1.webm" />
					</video>
				</div>
				<div className="video--wrapper-image">
					<div className="tablet-only">
						<img
							src="/cm-img/performance/landing/05/Lexus-Performance-Hero-Tablet-960x469_M75.jpg"
							className="bg-image"
							alt=""
						/>
						<div className="disclaimer-container disclaimer--right">
							{/*<span>Options shown</span>*/}
						</div>
					</div>
					<div className="mobile-only">
						<img
							src="/cm-img/performance/landing/05/Lexus-Performance-Hero-Mobile-640x700_M75.jpg"
							className="bg-image"
							alt=""
						/>
						<div className="disclaimer-container disclaimer--right">
							{/*<span>Options shown</span>*/}
						</div>
					</div>
				</div>
			{/*video content styled component*/}
				<Styled.VideoContent>
					<div className="video--title">
						<div className="divider-vert"></div>
						<div>
							<Styled.Title>PERFORMANCE BORN OF REFINEMENT</Styled.Title>
							<Styled.H4>The Lexus High-Performance Line</Styled.H4>
						</div>
					</div>
					<div className="video--buttons">
						<Styled.Button as="a"
							href="https://www.lexus.com/media/performance/PerformanceHeader1.mp4"
							data-target="#hero-modal"
						>
							PLAY VIDEO
						</Styled.Button>
						<Styled.Button primary as="a" href="#explore">
							SEE ALL MODELS
						</Styled.Button>
					</div>
				</Styled.VideoContent>
				<div className="disclaimer--large">
					<div className="disclaimer-container disclaimer--right">
						<span>
							Professional driver on a closed course. Do not
							attempt. Options shown.
						</span>
					</div>
				</div>
			</Styled.SectionHero>
		</Styled.PerformanceHero>
	);
};

export default PerformanceHero;