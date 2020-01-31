import styled from "styled-components";

import breakpoint from '../../packages/breakpoints';
import { createGlobalStyle } from 'styled-components'

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
	`,
	VideoWrapper: styled.div`
		display: none;
	    ${breakpoint('desktop', 'up')}{
	      display: block;
	    }		
	`,
	BackgroundVideo: styled.video`
		width: 100%;
		object-fit: cover;		
	`,
	Wrapper: styled.div`
		position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	`,
	ButtonWrapper: styled.div`
	    ${breakpoint('mobile')}{
	      display: inline-block;
	    }	
	`,	
	VideoWrapperImage: styled.div`
		
	`,
	TabletOnly: styled.img`
		display: none;
		width: 100%;
	    ${breakpoint('tablet')}{
	      display: block;
	    }			
	`,
	MobileOnly: styled.img`
		display: none;
		width: 100%;
	    ${breakpoint('mobile')}{
	      display: block;
	    }			
	`,	
	VideoContent: styled.div`
	    padding: 48px 20px 20px;
	    justify-content: space-between;
		bottom: 0;
		display: flex;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		flex-direction: column;
		z-index: 1101;
		color: white;

	    ${breakpoint('desktop', 'up')}{
	      	padding: 108px 0 108px 140px;
	      	justify-content: flex-end;
	    }
	    ${breakpoint('tablet')}{
		    padding: 80px 0 40px 80px;
			justify-content: flex-end;
	    }	    		
	`,
	VideoTitle: styled.div `
		display: flex;
		padding-bottom: 30px;
	`,
	DividerVert: styled.div`
		margin-right: 16px;
	    background: #fff;
	    width: 3px;	
	    ${breakpoint('tablet', 'up')}{
	      	margin-left: -22px;
	    }	    
	`,
	Title: styled.h1`
		font-size: 2rem;
		line-height: 0.9em;
		font-weight: 400;
		margin: 0;
	    ${breakpoint('tablet')}{
	      font-size: 2.75rem;
	    }		
	    ${breakpoint('desktop', 'up')}{
	      font-size: 5rem;
	    }	
	`,
	H4: styled.h4`
		font-size: 0.8rem;
		line-height: 0.82em;
		font-weight: 400;
		margin: 1% 0;
	    ${breakpoint('tablet')}{
	      font-size: 1rem;
	    }		
	    ${breakpoint('desktop', 'up')}{
	      font-size: 2rem;
	    }			
	`,
	Button: styled.button`
		background: ${props => (props.primary ? "transparent" : "white")};
		color: ${props => (props.primary ? "white" : "black")};
		font-size: 10px;
		font-family: "nobel-bold", Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		margin: 1em 1.25em 2em 0;
		padding: 10px;
		padding-left: ${props => (props.primary ? "1em" : "4em")};
		border: 2px solid white;
		text-decoration: none;
		position: relative;
		letter-spacing: 1px;
	    ${breakpoint('tablet', 'up')}{
	      font-size: 12px;
	      padding: 1.2em;
	      padding-left: ${props => (props.primary ? "1em" : "3.5em")};
	      letter-spacing: 2px;
	    }			
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
	    display: none;	
	    ${breakpoint('desktop', 'up')}{
	      	display: block;
	    }	    	
	`,
	MobileDisclaimer: styled.div`
		position: relative;
	    z-index: 1110;
	    display: block;
	    ${breakpoint('desktop', 'up')}{
	      	display: none;
	    }	    	
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
