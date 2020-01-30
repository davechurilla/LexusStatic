import styled from "styled-components";

import breakpoint from '../../packages/breakpoints';

export default {
	PerformanceHero: styled.div`
		font-family: "nobel-regular", Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: normal;
		width: 100%;
		position: relative;
		background: black;
	`,
	SectionHero: styled.div`
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		position: relative;

		.hero-video {
			width: 100%;
			object-fit: cover;
		}
	`,
	VideoWrapper: styled.div`

	`,
	VideoWrapperImage: styled.div`
		display: none;
	`,
	MobileOnly: styled.div`
	`,
	TabletOnly: styled.div`
	`,
	ResponsiveDisclaimer: styled.div`
	`,
	VideoContent: styled.div`
		bottom: 0;
		display: flex;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		z-index: 1101;
		color: white;
		padding: 108px 0 108px 140px;
	`,
	VideoTitle: styled.div `
		display: flex;
		padding-bottom: 30px;

		.divider-vert {
			margin-right: 16px;
		    background: #fff;
		    width: 3px;			
		}
	`,
	Title: styled.h1`
		font-size: 5rem;
		line-height: 0.9em;
		font-weight: 400;
		margin: 0;
	`,
	H4: styled.h4`
		font-size: 2rem;
		line-height: 0.82em;
		font-weight: 400;
		margin: 1% 0;
	`,
	VideoButtons: styled.div `
	// just a container
	`,
	Button: styled.button`
		background: ${props => (props.primary ? "transparent" : "white")};
		color: ${props => (props.primary ? "white" : "black")};
		font-size: 12px;
		font-family: "nobel-bold", Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		margin: 1em 1.25em 2em 0;
		padding: 1.2em ;
		padding-left: ${props => (props.primary ? "1em" : "3.5em")};
		border: 2px solid white;
		text-decoration: none;
		position: relative;
		letter-spacing: 2px;
		&:hover {
			background: black;
			color: white;
		}

		&:before {
			content: "►";
			color: white;
			border-radius: 100%;
			background-color: black;
			width: 24px;
			display: inline-block;
			height: 24px;
			line-height: 24px;
			position: absolute;
			text-align: center;
			top: 50%;
			margin-top: -12px;
			left: 8px;
			padding: 0 0 0 3px;
			display: ${props => (props.primary ? "none" : "inline-block")};
		}
		&:hover:before {
			background: white;
			color: black;
		}
	`,
	Disclaimer: styled.div`
		position: relative;
	    z-index: 1110;
	    display: block;		
	`,
	DisclaimerContainer: styled.div`
		right: 5px;
	    padding-left: 10px;
	    text-align: right;
	    font-size: 10px;
	    bottom: 5px;
	    font-size: 9px;
	    line-height: 1.2em;
	    position: absolute;	
	    color: white;
        font-family: "Palatino","Palatino Linotype","Book Antiqua",serif;
        text-transform: none;
	`,	
};
