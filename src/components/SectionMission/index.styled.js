import styled from "styled-components";
import breakpoint from "../../packages/breakpoints";

export default {
	SectionMission: styled.div`
		display: block;
		padding-bottom: 48px;
		padding-top: 48px;
		color: #fff;
		${breakpoint("tablet", "up")} {
			padding-bottom: 72px;
			padding-top: 56px;
		}
	`,
	Container: styled.div`
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		max-width: 700px;
		padding-left: 22px;
		padding-right: 22px;
	`,
	TextContent: styled.div`
    font-size: 14px;
		${breakpoint("tablet", "up")} {
			font-size: 18px;
		}    
	`,
	Heading: styled.h2`
		font-size: 21px;
		line-height: 1.3em;
		margin: 0.5em 0;
		font-family: "nobel-book", Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: 300;
		${breakpoint("tablet", "up")} {
			font-size: 28px;
		}
	`,
	Divider: styled.div`
		background-color: currentColor;
		display: inline-block;
		height: 1px;
		margin: 10px 0;
		width: 40px;
		${breakpoint("tablet", "up")} {
			width: 80px;
		}		
	`,
	BodyText: styled.p`
		margin: 1em 0;
		line-height: 1.45em;
		font-family: "Palatino","Palatino Linotype","Book Antiqua",serif;
		${breakpoint("tablet", "up")} {
			line-height: 1.35em;
		}
	`
};
